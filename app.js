/* =========================================================
   SIMULATORE D'ESAME · Logica applicativa
   ========================================================= */

// ----- Stato globale ---------------------------------------------------------
const state = {
  mode: null,            // 'quick' | 'exam' | 'lesson' | 'all'
  questions: [],         // array di domande della sessione
  current: 0,            // indice domanda corrente
  answers: [],           // array parallelo: indice selezionato o null=saltata
  startTime: null,       // ms
  endTime: null,         // ms
  timerInterval: null,
  timeLimit: null,       // secondi, solo per 'exam'
  locked: false          // true dopo aver risposto, finché non clicchi avanti
};

const LETTERS = ['A', 'B', 'C', 'D'];

// ----- Utility ---------------------------------------------------------------
function $(sel) { return document.querySelector(sel); }
function $$(sel) { return Array.from(document.querySelectorAll(sel)); }

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function flatQuestions() {
  const out = [];
  DOMANDE_RIABILITAZIONE.lezioni.forEach(lez => {
    lez.domande.forEach(d => {
      out.push({
        ...d,
        lezioneId: lez.id,
        lezioneTitolo: lez.titolo
      });
    });
  });
  return out;
}

function formatTime(seconds) {
  const m = Math.floor(seconds / 60).toString().padStart(2, '0');
  const s = Math.floor(seconds % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

// ----- Routing schermate -----------------------------------------------------
function showScreen(id) {
  $$('.screen').forEach(s => s.classList.remove('active'));
  $('#' + id).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'instant' });
}

// ----- Statistiche (localStorage) --------------------------------------------
const STATS_KEY = 'sicurezza-stats-v1';

function loadStats() {
  try {
    const raw = localStorage.getItem(STATS_KEY);
    if (!raw) return { attempts: 0, best: 0, scores: [] };
    return JSON.parse(raw);
  } catch (e) {
    return { attempts: 0, best: 0, scores: [] };
  }
}

function saveStats(s) {
  try { localStorage.setItem(STATS_KEY, JSON.stringify(s)); } catch (e) {}
}

function renderStats() {
  const s = loadStats();
  $('#stat-attempts').textContent = s.attempts || '—';
  $('#stat-best').textContent = s.best ? s.best + '%' : '—';
  const avg = s.scores && s.scores.length
    ? Math.round(s.scores.reduce((a, b) => a + b, 0) / s.scores.length)
    : null;
  $('#stat-avg').textContent = avg !== null ? avg + '%' : '—';
}

function recordResult(percent) {
  const s = loadStats();
  s.attempts = (s.attempts || 0) + 1;
  s.best = Math.max(s.best || 0, percent);
  s.scores = (s.scores || []).concat([percent]).slice(-50); // ultimi 50
  saveStats(s);
  renderStats();
}

// ----- Avvio modalità --------------------------------------------------------
function startMode(mode, opts = {}) {
  state.mode = mode;
  state.current = 0;
  state.startTime = Date.now();
  state.endTime = null;
  state.timeLimit = null;
  state.locked = false;

  const all = flatQuestions();

  if (mode === 'quick') {
    state.questions = shuffle(all).slice(0, 10);
  } else if (mode === 'exam') {
    state.questions = shuffle(all).slice(0, 30);
    state.timeLimit = 45 * 60; // 45 minuti
  } else if (mode === 'lesson') {
    const lez = DOMANDE_RIABILITAZIONE.lezioni.find(l => l.id === opts.lessonId);
    if (!lez) return;
    state.questions = lez.domande.map(d => ({
      ...d,
      lezioneId: lez.id,
      lezioneTitolo: lez.titolo
    }));
  } else if (mode === 'all') {
    state.questions = all;
  }

  state.answers = new Array(state.questions.length).fill(null);
  showScreen('quiz');
  renderQuestion();
  startTimer();
}

// ----- Timer -----------------------------------------------------------------
function startTimer() {
  stopTimer();
  state.timerInterval = setInterval(() => {
    const elapsed = Math.floor((Date.now() - state.startTime) / 1000);

    if (state.timeLimit !== null) {
      const remaining = state.timeLimit - elapsed;
      if (remaining <= 0) {
        $('#quiz-timer').textContent = '00:00';
        finishQuiz();
        return;
      }
      $('#quiz-timer').textContent = formatTime(remaining);
      if (remaining < 60) {
        $('#quiz-timer').classList.add('timer-warn');
      }
    } else {
      $('#quiz-timer').textContent = formatTime(elapsed);
    }
  }, 250);
}

function stopTimer() {
  if (state.timerInterval) {
    clearInterval(state.timerInterval);
    state.timerInterval = null;
  }
  $('#quiz-timer').classList.remove('timer-warn');
}

// ----- Render domanda --------------------------------------------------------
function renderQuestion() {
  const q = state.questions[state.current];
  const total = state.questions.length;

  $('#quiz-progress').textContent = `${state.current + 1} / ${total}`;
  $('#progress-fill').style.width = ((state.current) / total * 100) + '%';

  $('#q-lesson').textContent = `Lezione ${q.lezioneId.replace('L', '')} · ${q.lezioneTitolo}`;
  $('#q-text').textContent = q.q;

  // Badge "da verificare" per domande a maggiore incertezza
  const vbEl = $('#q-verify');
  if (vbEl) {
    if (q.verify) {
      vbEl.style.display = 'inline-flex';
    } else {
      vbEl.style.display = 'none';
    }
  }

  // Figura/e della domanda (se presenti)
  const figEl = $('#q-figure');
  if (figEl) {
    figEl.innerHTML = '';
    if (q.img && q.img.length) {
      q.img.forEach(src => {
        const wrap = document.createElement('div');
        wrap.className = 'q-fig-wrap';
        const im = document.createElement('img');
        im.className = 'q-fig';
        im.src = 'figures/' + src;
        im.alt = 'Figura della domanda';
        im.loading = 'lazy';
        wrap.appendChild(im);
        figEl.appendChild(wrap);
      });
      figEl.style.display = 'flex';
    } else {
      figEl.style.display = 'none';
    }
  }

  // Opzioni
  const optsEl = $('#q-options');
  optsEl.innerHTML = '';
  q.opts.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option';
    btn.setAttribute('data-idx', i);
    btn.innerHTML = `
      <span class="option-letter">${LETTERS[i]}</span>
      <span class="option-text">${opt}</span>
    `;
    btn.addEventListener('click', () => selectOption(i));
    optsEl.appendChild(btn);
  });

  // Reset feedback e stato
  $('#q-feedback').className = 'feedback';
  $('#q-feedback').innerHTML = '';
  state.locked = false;
  $('#btn-next').textContent = state.current === total - 1 ? 'concludi →' : 'avanti →';
  $('#btn-next').disabled = true;
  $('#btn-skip').style.display = 'inline-flex';
}

// ----- Selezione opzione -----------------------------------------------------
function selectOption(idx) {
  if (state.locked) return;
  state.locked = true;

  const q = state.questions[state.current];
  const correct = q.correct;
  state.answers[state.current] = idx;

  // Stile opzioni
  $$('#q-options .option').forEach((btn, i) => {
    btn.disabled = true;
    if (i === correct) btn.classList.add('correct');
    if (i === idx && i !== correct) btn.classList.add('wrong');
  });

  // Feedback
  const fb = $('#q-feedback');
  if (idx === correct) {
    fb.className = 'feedback feedback-right slide-in';
    fb.innerHTML = `
      <div class="fb-head">✓ Risposta corretta</div>
      <div class="fb-body">${q.spiega || ''}</div>
    `;
  } else {
    fb.className = 'feedback feedback-wrong slide-in';
    fb.innerHTML = `
      <div class="fb-head">✗ Risposta errata</div>
      <div class="fb-body">
        <div class="fb-correct">La risposta corretta è <strong>${LETTERS[correct]}</strong>: ${q.opts[correct]}</div>
        <div class="fb-explain">${q.spiega || ''}</div>
      </div>
    `;
  }

  $('#btn-next').disabled = false;
  $('#btn-skip').style.display = 'none';
}

// ----- Skip ------------------------------------------------------------------
function skipQuestion() {
  if (state.locked) return;
  state.answers[state.current] = null;
  goNext();
}

// ----- Avanti / Concludi -----------------------------------------------------
function goNext() {
  if (state.current >= state.questions.length - 1) {
    finishQuiz();
  } else {
    state.current++;
    renderQuestion();
  }
}

// ----- Fine quiz · risultati -------------------------------------------------
function finishQuiz() {
  stopTimer();
  state.endTime = Date.now();

  let correct = 0, wrong = 0, skipped = 0;
  state.questions.forEach((q, i) => {
    const a = state.answers[i];
    if (a === null) skipped++;
    else if (a === q.correct) correct++;
    else wrong++;
  });

  const total = state.questions.length;
  const percent = Math.round((correct / total) * 100);
  const elapsedSec = Math.floor((state.endTime - state.startTime) / 1000);

  $('#result-score').textContent = `${correct} / ${total}`;
  $('#result-percent').textContent = percent + '%';
  $('#result-time').textContent = formatTime(elapsedSec);
  $('#result-correct').textContent = correct;
  $('#result-wrong').textContent = wrong;
  $('#result-skipped').textContent = skipped;

  // Giudizio
  let judgment;
  if (percent >= 90) judgment = 'Ottimo · padronanza solida';
  else if (percent >= 70) judgment = 'Buono · pronto per l\'esame';
  else if (percent >= 55) judgment = 'Discreto · puoi migliorare';
  else if (percent >= 35) judgment = 'Sufficiente · serve ripasso';
  else judgment = 'Da rivedere · torna sul materiale';
  $('#result-judgment').textContent = judgment;

  // Revisione
  renderReview();

  // Salva nelle statistiche (solo se il quiz è "significativo" — almeno una risposta data)
  if (correct + wrong > 0) {
    recordResult(percent);
  }

  showScreen('results');
}

function renderReview() {
  const list = $('#review-list');
  list.innerHTML = '';

  state.questions.forEach((q, i) => {
    const a = state.answers[i];
    const item = document.createElement('div');
    let statusClass, statusLabel;
    if (a === null) { statusClass = 'rv-skip'; statusLabel = 'saltata'; }
    else if (a === q.correct) { statusClass = 'rv-ok'; statusLabel = 'corretta'; }
    else { statusClass = 'rv-no'; statusLabel = 'errata'; }

    item.className = `review-item ${statusClass}`;
    item.innerHTML = `
      <div class="rv-head">
        <span class="rv-num">${String(i + 1).padStart(2, '0')}</span>
        <span class="rv-lesson">L${q.lezioneId.replace('L', '')}</span>
        <span class="rv-status">${statusLabel}</span>
      </div>
      <div class="rv-q">${q.q}</div>
      ${q.img && q.img.length ? `<div class="rv-fig"><img src="figures/${q.img[0]}" alt="figura" loading="lazy"></div>` : ''}
      ${a !== null && a !== q.correct ? `
        <div class="rv-your"><span class="rv-tag">tua:</span> ${LETTERS[a]}. ${q.opts[a]}</div>
      ` : ''}
      <div class="rv-correct"><span class="rv-tag">corretta:</span> ${LETTERS[q.correct]}. ${q.opts[q.correct]}</div>
      ${q.spiega ? `<div class="rv-spiega">${q.spiega}</div>` : ''}
    `;
    list.appendChild(item);
  });
}

// ----- Lesson picker ---------------------------------------------------------
function renderLessonList() {
  const list = $('#lesson-list');
  list.innerHTML = '';
  DOMANDE_RIABILITAZIONE.lezioni.forEach(lez => {
    const btn = document.createElement('button');
    btn.className = 'lesson-item';
    btn.innerHTML = `
      <div class="lesson-id">L${lez.id.replace('L', '')}</div>
      <div class="lesson-info">
        <div class="lesson-title">${lez.titolo}</div>
        <div class="lesson-count">${lez.domande.length} domande</div>
      </div>
      <div class="lesson-arrow">→</div>
    `;
    btn.addEventListener('click', () => startMode('lesson', { lessonId: lez.id }));
    list.appendChild(btn);
  });
}

// ----- Conferma uscita -------------------------------------------------------
function confirmExit() {
  if (state.current === 0 && state.answers.every(a => a === null)) {
    // niente di fatto, esce silenziosamente
    stopTimer();
    showScreen('home');
    return;
  }
  if (confirm('Sicuro di voler uscire? I progressi di questo test andranno persi.')) {
    stopTimer();
    showScreen('home');
  }
}

// ----- Eventi ----------------------------------------------------------------
function bindEvents() {
  // Modalità home
  $$('.mode-card').forEach(card => {
    card.addEventListener('click', () => {
      const mode = card.dataset.mode;
      if (mode === 'lesson') {
        renderLessonList();
        showScreen('lesson-picker');
      } else {
        startMode(mode);
      }
    });
  });

  // Back generici
  $$('[data-back]').forEach(b => {
    b.addEventListener('click', () => showScreen('home'));
  });

  // Quiz controls
  $('#btn-next').addEventListener('click', () => {
    if (state.locked || state.answers[state.current] === null) {
      // se non bloccato e non risposto, ignora (il tasto è disabled comunque)
      if (state.locked) goNext();
      return;
    }
    goNext();
  });

  $('#btn-skip').addEventListener('click', skipQuestion);
  $('#quiz-back').addEventListener('click', confirmExit);

  // Risultati
  $('#btn-retry').addEventListener('click', () => {
    if (state.mode === 'lesson') {
      // Per ripetere una lezione servirebbe l'id, lo ricaviamo dalla prima domanda
      const lid = state.questions[0]?.lezioneId;
      if (lid) {
        startMode('lesson', { lessonId: lid });
        return;
      }
    }
    startMode(state.mode);
  });

  $('#btn-home').addEventListener('click', () => showScreen('home'));

  // Reset statistiche
  $('#stat-reset').addEventListener('click', () => {
    if (confirm('Azzerare tutte le statistiche?')) {
      try { localStorage.removeItem(STATS_KEY); } catch (e) {}
      renderStats();
    }
  });

  // Tastiera: 1-4 selezione, Enter avanti, Esc esci
  document.addEventListener('keydown', (e) => {
    const quizActive = $('#quiz').classList.contains('active');
    if (!quizActive) return;

    if (['1', '2', '3', '4'].includes(e.key)) {
      const idx = parseInt(e.key, 10) - 1;
      const q = state.questions[state.current];
      if (q && idx < q.opts.length && !state.locked) {
        selectOption(idx);
      }
    } else if (e.key === 'Enter') {
      if (!$('#btn-next').disabled) goNext();
    } else if (e.key === 'Escape') {
      confirmExit();
    } else if (e.key === 's' || e.key === 'S') {
      if (!state.locked) skipQuestion();
    }
  });
}

// ----- Init ------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  if (typeof DOMANDE_RIABILITAZIONE === 'undefined') {
    document.body.innerHTML = '<div style="padding:40px;font-family:sans-serif;">Errore: file domande non caricato. Verifica che <code>domande-riabilitazione.js</code> sia nella stessa cartella di <code>index.html</code>.</div>';
    return;
  }
  bindEvents();
  renderStats();
});
