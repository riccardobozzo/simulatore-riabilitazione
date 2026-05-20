# Simulatore d'esame · Riabilitazione Strutturale

Sito statico per simulare l'esame di **Riabilitazione Strutturale** (Ing. Civile, eCampus, Prof. Francesco Focacci).
Tutte le **209 domande chiuse** del set ufficiale eCampus, con correzione immediata, spiegazione tecnica e **figura/diagramma mostrati dentro la domanda** quando presenti nel testo.

## Cosa contiene

- `index.html` — interfaccia
- `style.css` — design editoriale/accademico
- `app.js` — logica del quiz
- `domande-riabilitazione.js` — banca delle 209 domande (52 lezioni)
- `figures/` — 107 immagini (diagrammi, sezioni, schemi) estratte dal PDF e mostrate nelle domande

## Modalità di test

1. **Test rapido** — 10 domande casuali da tutte le lezioni
2. **Esame completo** — 30 domande casuali con timer di 45 minuti
3. **Per lezione** — tutte le domande di una specifica lezione
4. **Tutte le domande** — modalità studio sull'intero database

Le statistiche (test completati, miglior punteggio, media) sono salvate localmente nel browser.

## Nota importante sulle risposte

Il PDF del set di domande eCampus **non riporta le risposte corrette** (non è compilato).
Le 209 risposte sono state quindi **risolte per via tecnica** (Scienza e Tecnica delle Costruzioni): metodo
semiprobabilistico, diagramma momento-curvatura, taglio, analisi limite della muratura, aderenza e rinforzo
con FRP/FRCM, confinamento. La maggior parte delle risposte è affidabile, ma **alcune imprecisioni sono possibili**.

Le domande la cui risposta dipende molto da dettagli di una figura (versi dei meccanismi, posizione delle
cerniere, punti su un dominio o un luogo dei centri di pressione) sono contrassegnate in alto da un badge
**"⚠ da verificare"**: su quelle conviene un controllo sul materiale del corso.

## Pubblicare gratis su GitHub Pages

### 1. Crea un account GitHub
Se non ce l'hai, registrati su [github.com](https://github.com). È gratuito.

### 2. Crea un nuovo repository
- Clicca sul **+** in alto a destra → **New repository**
- Nome: per esempio `simulatore-riabilitazione` (qualsiasi va bene, sarà parte dell'URL finale)
- Imposta su **Public** (richiesto per GitHub Pages gratuito)
- **Non** spuntare "Add a README file" (il tuo lo carichi tu)
- Clicca **Create repository**

### 3. Carica i file
Nella pagina del repository appena creato:
- Clicca **uploading an existing file** (link nella pagina vuota), oppure **Add file → Upload files**
- Trascina dentro **tutti i file di questa cartella, inclusa la cartella `figures/`**:
  - `index.html`
  - `style.css`
  - `app.js`
  - `domande-riabilitazione.js`
  - `README.md`
  - la cartella **`figures/`** con tutte le 107 immagini (importante: senza questa cartella i diagrammi non compaiono)
- In fondo, clicca **Commit changes**

> Suggerimento: per caricare anche la cartella `figures/` in un colpo solo, trascina l'intera cartella
> dentro l'area di upload di GitHub (il browser la carica con tutto il contenuto).

### 4. Attiva GitHub Pages
- Nel repository, vai su **Settings** (in alto a destra)
- Nel menu a sinistra, clicca **Pages**
- Sotto "Build and deployment", trova **Source**
- Seleziona **Deploy from a branch**
- Sotto "Branch", scegli **main** e cartella **/ (root)**
- Clicca **Save**

### 5. Aspetta 1-2 minuti
GitHub impiega un minuto per pubblicare. Quando è pronto, in cima alla stessa pagina vedrai:

> **Your site is live at `https://TUO-USERNAME.github.io/simulatore-riabilitazione/`**

Quello è il tuo link, puoi aprirlo da qualunque dispositivo e condividerlo.

### Aggiornare in futuro
Per correggere una risposta o un testo, modifica il file interessato (di solito `domande-riabilitazione.js`)
direttamente su GitHub (apri il file → icona matita → **Commit changes**). Il sito si aggiorna da solo in un minuto.

## Uso in locale (senza internet)
Apri semplicemente `index.html` con un doppio clic. Se i diagrammi non si vedono aprendo il file direttamente,
avvia un piccolo server locale dalla cartella:

```
python3 -m http.server 8000
```

e visita `http://localhost:8000` nel browser.

---

*Materiale didattico eCampus · Prof. Francesco Focacci · Risposte risolte per via tecnica (possibili imprecisioni).*
