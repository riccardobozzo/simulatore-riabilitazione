// Domande del corso Riabilitazione Strutturale - Prof. Francesco Focacci
// 209 domande chiuse, 52 lezioni. Risposte risolte per via tecnica.
// Il flag 'verify:true' segnala le domande la cui risposta dipende molto da dettagli
// figurali (meccanismi/cerniere): consigliata verifica sul materiale del corso.

const DOMANDE_RIABILITAZIONE = {
 "corso": "Riabilitazione Strutturale",
 "docente": "Francesco Focacci",
 "ateneo": "eCampus — Ingegneria Civile",
 "lezioni": [
  {
   "id": "002",
   "titolo": "Metodo semiprobabilistico agli stati limite",
   "domande": [
    {
     "q": "Nel metodo semiprobabilistico agli stati limite",
     "opts": [
      "le strutture vengono dimensionate con riferimento ai valori massimi delle azioni.",
      "nelle combinazioni allo stato limite ultimo le azioni permanenti vengono sempre moltiplicate per coefficienti parziali di sicurezza superiori all’unità.",
      "nelle combinazioni allo stato limite ultimo le azioni vengono applicate simultaneamente con le loro intensità caratteristiche.",
      "si devono considerare diverse combinazioni di carico allo stato limite ultimo se la struttura in esame è soggetta ad almeno due azioni."
     ],
     "correct": 3,
     "spiega": "Con due o più azioni vanno considerate diverse combinazioni di carico SLU (ogni variabile a turno dominante). Non si usano i valori massimi ma i caratteristici; i permanenti possono avere coefficiente <1 se favorevoli."
    },
    {
     "q": "Nel metodo semiprobabilistico agli stati limite",
     "opts": [
      "i coefficienti di combinazione tengono conto del fatto che è statisticamente improbabile che su una struttura agiscano contemporaneamente diverse azioni con le loro intensità caratteristiche.",
      "i coefficienti parziali di sicurezza tengono conto del fatto che è statisticamente improbabile che su una struttura agiscano contemporaneamente diverse azioni con le loro intensità caratteristiche.",
      "i coefficienti di combinazione tengono conto del fatto che è necessario considerare intensità delle azioni con una probabilità sufficientemente bassa di essere maggiorati.",
      "i coefficienti parziali di sicurezza sono sempre superiori all’unità."
     ],
     "correct": 0,
     "spiega": "I coefficienti di COMBINAZIONE ψ tengono conto dell'improbabilità che più azioni variabili indipendenti raggiungano insieme il valore caratteristico."
    },
    {
     "q": "Nel metodo semiprobabilistico agli stati limite",
     "opts": [
      "il valore raro di un’azione variabile è inferiore al valore quasi permanente della stessa azione.",
      "il valore quasi permanente di un’azione variabile è superiore al valore frequente della stessa azione.",
      "il valore raro di un’azione variabile è inferiore al valore frequente della stessa azione.",
      "il valore quasi permanente di un’azione variabile è non superiore al valore frequente della stessa azione."
     ],
     "correct": 3,
     "spiega": "Gerarchia dei valori: caratteristico (raro) ≥ frequente ≥ quasi permanente. Quindi il quasi permanente è non superiore al frequente."
    }
   ]
  },
  {
   "id": "003",
   "titolo": "Enti resistenti e valori di calcolo",
   "domande": [
    {
     "q": "Nel metodo semiprobabilistico agli stati limite",
     "opts": [
      "gli enti resistenti corrispondono al raggiungimento dello snervamento del materiale costituente la struttura se questo è duttile.",
      "gli enti resistenti corrispondono al raggiungimento di uno stato limite.",
      "gli enti resistenti corrispondono al raggiungimento della resistenza di calcolo del materiale in un punto di una struttura.",
      "gli enti resistenti corrispondono al raggiungimento della crisi di uno dei materiali costituenti la struttura."
     ],
     "correct": 3,
     "spiega": "Gli enti resistenti corrispondono al raggiungimento della crisi di uno dei materiali costituenti la struttura."
    },
    {
     "q": "Nel metodo semiprobabilistico agli stati limite",
     "opts": [
      "gli enti resistenti devono essere non inferiori agli enti sollecitanti per i soli stati limite ultimi.",
      "gli enti resistenti si valutano considerando i valori di calcolo dei parametri di resistenza dei materiali.",
      "gli enti resistenti devono essere non inferiori agli enti sollecitanti per i soli stati limite di esercizio.",
      "gli enti resistenti si valutano considerando i valori di calcolo di tutte le proprietà dei materiali."
     ],
     "correct": 1,
     "spiega": "Gli enti resistenti si valutano usando i valori di calcolo dei parametri di RESISTENZA dei materiali."
    },
    {
     "q": "Nel metodo semiprobabilistico agli stati limite",
     "opts": [
      "i valori di calcolo dei parametri di resistenza dei materiali di una struttura esistente non dipendono dai coefficienti parziali di sicurezza.",
      "i valori di calcolo dei parametri di resistenza dei materiali dipendono dal coefficiente parziale del modello di resistenza adottato.",
      "i valori di calcolo dei parametri di resistenza dei materiali si valutano in modo diverso per le strutture di nuova costruzione e per le strutture esistenti.",
      "i valori di calcolo dei parametri di resistenza dei materiali si calcolano sempre a partire dai valori caratteristici degli stessi parametri."
     ],
     "correct": 3,
     "spiega": "I valori di calcolo si ricavano sempre dai valori caratteristici (divisi per γM; per gli esistenti anche col fattore di confidenza FC)."
    }
   ]
  },
  {
   "id": "004",
   "titolo": "Sezioni composte e omogeneizzazione",
   "domande": [
    {
     "q": "In un’asta avente sezione composta soggetta a flessione retta, sotto l’ipotesi di conservazione delle sezioni piane",
     "opts": [
      "il profilo delle deformazioni sulla sezione è discontinuo se i moduli elastici dei materiali sono diversi.",
      "il profilo delle tensioni sulla sezione è lineare.",
      "il profilo delle tensioni sulla sezione è discontinuo se i moduli elastici dei materiali sono diversi.",
      "la curvatura è diversa relativamente alle parti omogenee della sezione."
     ],
     "correct": 2,
     "spiega": "Sezioni piane: deformazioni lineari e continue. Ma σ=E·ε, quindi con moduli diversi il profilo delle TENSIONI è discontinuo (salto all'interfaccia)."
    },
    {
     "q": "In un’asta avente sezione composta, soggetta a flessione retta, sotto l’ipotesi di conservazione delle sezioni piane",
     "opts": [
      "la curvatura è diversa relativamente alle parti omogenee della sezione.",
      "il legame momento-curvatura è lineare se i materiali costituenti la sezione hanno legame costitutivo elastico lineare.",
      "il profilo delle deformazioni sulla sezione è lineare solo se i materiali costituenti la sezione hanno legame costitutivo elastico lineare.",
      "l’asse neutro passa per il baricentro geometrico della sezione."
     ],
     "correct": 1,
     "spiega": "Con materiali elastici lineari il legame momento-curvatura è lineare. La curvatura è unica per la sezione; l'asse neutro passa per il baricentro della sezione omogeneizzata."
    },
    {
     "q": "In un’asta avente sezione composta",
     "opts": [
      "il momento di inerzia della sezione omogeneizzata dipende dal rapporto tra i moduli elastici dei materiali costituenti la sezione.",
      "il momento di inerzia della sezione omogeneizzata non dipende dai moduli elastici dei materiali in quanto è una proprietà geometrica della sezione.",
      "il momento di inerzia della sezione omogeneizzata è minore del momento di inerzia della sezione se l’asta fosse omogenea.",
      "il momento di inerzia della sezione omogeneizzata è maggiore del momento di inerzia della sezione se l’asta fosse omogenea."
     ],
     "correct": 0,
     "spiega": "Il momento d'inerzia omogeneizzato dipende dal coefficiente di omogeneizzazione n=E1/E2, quindi dal rapporto fra i moduli elastici."
    }
   ]
  },
  {
   "id": "005",
   "titolo": "Diagramma momento-curvatura del c.a.",
   "domande": [
    {
     "q": "Il diagramma momento-curvatura di figura è relativo ad una sezione di calcestruzzo armato soggetta a flessione retta. Si identifichi l'affermazione corretta tra le seguenti.",
     "opts": [
      "Il punto del diagramma corrispondente ad una deformazione delle armature tese uguale a 0.32% è nel tratto BC indipendentemente dalla deformazione massima del calcestruzzo compresso.",
      "Il punto del diagramma corrispondente ad una deformazione delle armature tese uguale a 0.32% è nel tratto AB indipendentemente dalla massima deformazione del calcestruzzo compresso.",
      "Il punto del diagramma corrispondente ad una deformazione delle armature tese uguale a 0.32% è nel tratto AB se la deformazione massima del calcestruzzo compresso è superiore allo 0.2%.",
      "Il punto del diagramma corrispondente ad una deformazione delle armature tese uguale a 0.32% è nel tratto BC solo se la deformazione massima del calcestruzzo è superiore allo 0.2%."
     ],
     "correct": 0,
     "spiega": "εst=0.32% supera lo snervamento (~0.2%): l'acciaio è snervato, quindi il punto è nel tratto BC indipendentemente dalla deformazione del calcestruzzo.",
     "img": [
      "fig_p007_000.png"
     ]
    },
    {
     "q": "Il diagramma momento-curvatura di una sezione di calcestruzzo armato costruito sotto l’ipotesi di conservazione delle sezioni piane",
     "opts": [
      "cambia pendenza alla fessurazione del calcestruzzo.",
      "è sempre lineare.",
      "non cambia pendenza allo snervamento delle armature tese.",
      "dipende dalla posizione della sezione."
     ],
     "correct": 0,
     "spiega": "Il diagramma M-χ cambia pendenza alla fessurazione del calcestruzzo (e poi allo snervamento): non è lineare."
    },
    {
     "q": "Nel diagramma momento-curvatura di figura, relativo ad una sezione di calcestruzzo armato soggetta a flessione retta",
     "opts": [
      "nel punto J il calcestruzzo è fessurato, nel punto K il calcestruzzo è fessurato e l’acciaio è snervato e nel punto H l’acciaio è snervato.",
      "nel punto K il calcestruzzo non è fessurato, nel punto H il calcestruzzo è fessurato e l’acciaio non è snervato e nel punto J il calcestruzzo non è fessurato.",
      "nel punto J il calcestruzzo non è fessurato e l’acciaio è snervato, nel punto K il calcestruzzo è fessurato e l’acciaio non è snervato e nel punto H l’acciaio è snervato.",
      "nel punto J il calcestruzzo non è fessurato, nel punto K il calcestruzzo è fessurato e l’acciaio non è snervato e nel punto H l’acciaio è snervato."
     ],
     "correct": 3,
     "spiega": "J (tratto OA): cls non fessurato; K (tratto AB): cls fessurato, acciaio non snervato; H (tratto BC): acciaio snervato.",
     "img": [
      "fig_p008_001.png"
     ]
    },
    {
     "q": "Nel diagramma momento-curvatura di figura, relativo ad una sezione di calcestruzzo armato soggetta a flessione retta, detti Ec il modulo elastico del calcestruzzo, Iom il momento di inerzia della sezione non parzializzata omogeneizzata ed Icr il momento di inerzia della sezione parzializzata (fessurata) omogeneizzata",
     "opts": [
      "la pendenza del tratto BC è approssimativamente pari al prodotto EcIom.",
      "la pendenza del tratto AB è approssimativamente pari al prodotto EcIom.",
      "la pendenza del tratto AB è approssimativamente pari al prodotto EcIcr",
      "la pendenza del tratto OA è approssimativamente pari al prodotto EcIcr."
     ],
     "correct": 2,
     "spiega": "Tratto AB (fessurato, pre-snervamento): pendenza ≈ Ec·Icr (sezione parzializzata). Verificato sulla figura O-A-B-C.",
     "img": [
      "fig_p008_002.png"
     ]
    },
    {
     "q": "Nel diagramma momento-curvatura di figura, relativo ad una sezione di calcestruzzo armato soggetta a flessione retta",
     "opts": [
      "il punto A corrisponde allo snervamento delle armature metalliche.",
      "il punto B corrisponde alla fessurazione del calcestruzzo.",
      "il punto C corrisponde allo snervamento delle armature metalliche.",
      "il punto B corrisponde allo snervamento delle armature metalliche."
     ],
     "correct": 3,
     "spiega": "Nel diagramma O-A-B-C: A=fessurazione, B=snervamento armature, C=rottura. Quindi B = snervamento delle armature.",
     "img": [
      "fig_p009_003.png"
     ]
    },
    {
     "q": "Il momento che produce lo snervamento delle armature in una sezione di calcestruzzo armato soggetta a pressoflessione retta",
     "opts": [
      "non può stimarsi considerando il calcestruzzo elastico lineare per tensioni di compressione in quanto allo snervamento dell’acciaio corrispondono elevate tensioni di compressione nel calcestruzzo.",
      "non dipende dallo sforzo normale agente.",
      "corrisponde ad uno spigolo del diagramma momento-curvatura.",
      "a parità di ogni altra condizione diminuisce con l’aumentare della tensione di snervamento delle armature."
     ],
     "correct": 2,
     "spiega": "Il momento di snervamento corrisponde a uno spigolo (cambio di pendenza) del diagramma M-χ."
    },
    {
     "q": "La posizione dell’asse neutro per una sezione di calcestruzzo armato soggetta a flessone retta",
     "opts": [
      "non dipende dal momento flettente se il calcestruzzo è in fase elastica.",
      "non dipende dal momento flettente se le armature sono in fase elastica e il calcestruzzo è elastico lineare per tensioni di compressione.",
      "non dipende dal momento flettente se il calcestruzzo non è fessurato.",
      "non dipende dal momento flettente se le armature sono snervate."
     ],
     "correct": 1,
     "spiega": "Con acciaio e cls elastici lineari (cls solo a compressione), la posizione dell'asse neutro della sezione fessurata non dipende dal momento, ma solo da geometria e n."
    },
    {
     "q": "La curvatura di una sezione di calcestruzzo armato inflessa (flessione retta)",
     "opts": [
      "non è definita se il calcestruzzo è fessurato.",
      "si può calcolare conoscendo la geometria della sezione e le caratteristiche meccaniche dell’acciaio e del calcestruzzo.",
      "si può calcolare conoscendo solo le deformazioni ai lembi e la geometria della sezione.",
      "si può rappresentare come la pendenza del diagramma delle tensioni sulla sezione."
     ],
     "correct": 1,
     "spiega": "La curvatura si calcola dalla geometria della sezione e dalle caratteristiche meccaniche di acciaio e calcestruzzo."
    },
    {
     "q": "Nel diagramma momento-curvatura di figura, relativo ad una sezione di calcestruzzo armato soggetta a flessione retta",
     "opts": [
      "il tratto BC è crescente anche se l’acciaio è elastico perfettamente plastico in quanto all’aumentare della curvatura aumenta il braccio della coppia interna.",
      "la pendenza del tratto AB non dipende dal modulo elastico del calcestruzzo.",
      "il tratto BC è costante se si considera per l’acciaio il legame costitutivo elastico perfettamente plastico.",
      "la parte discendente dopo il punto A è dovuta allo snervamento delle armature metalliche."
     ],
     "correct": 0,
     "spiega": "Il tratto BC è crescente anche con acciaio elastico-perfettamente plastico perché, snervato l'acciaio, all'aumentare della curvatura cresce il braccio della coppia interna.",
     "img": [
      "fig_p010_004.png"
     ]
    }
   ]
  },
  {
   "id": "006",
   "titolo": "Momento resistente di calcolo (c.a.)",
   "domande": [
    {
     "q": "Il momento resistente di calcolo di una sezione di calcestruzzo armato",
     "opts": [
      "è il momento flettente che produce il raggiungimento della deformazione ultima di calcolo dell’acciaio.",
      "è il momento flettente che produce il raggiungimento della deformazione ultima di calcolo del calcestruzzo o dell’acciaio.",
      "è il momento flettente che produce il raggiungimento della deformazione ultima di calcolo del calcestruzzo.",
      "è il momento flettente che produce la rottura per trazione del calcestruzzo."
     ],
     "correct": 1,
     "spiega": "MRd = momento che produce il raggiungimento della deformazione ultima di calcolo del calcestruzzo OPPURE dell'acciaio (cede il primo che arriva al limite)."
    },
    {
     "q": "Il momento resistente di calcolo di una sezione di calcestruzzo armato",
     "opts": [
      "è il momento flettente che produce il raggiungimento della deformazione ultima di calcolo del calcestruzzo se l’acciaio è considerato elastico incrudente.",
      "è il momento flettente che produce il raggiungimento della deformazione ultima di calcolo del calcestruzzo se l’acciaio è considerato elastico perfettamente plastico.",
      "è il momento flettente che produce il raggiungimento della tensione di snervamento di calcolo dell’acciaio.",
      "è il momento flettente che produce il raggiungimento della resistenza a compressione di calcolo del calcestruzzo."
     ],
     "correct": 1,
     "spiega": "Con acciaio elastico-perfettamente plastico, la crisi è governata dalla deformazione ultima del calcestruzzo (εcu)."
    },
    {
     "q": "Per la valutazione del momento resistente di calcolo di una sezione di calcestruzzo armato",
     "opts": [
      "si deve considerare il legame costitutivo parabola-rettangolo per il calcestruzzo compresso.",
      "si deve considerare il legame costitutivo parabola-rettangolo per il calcestruzzo teso.",
      "si può considerare il legame costitutivo elastico incrudente per l’acciaio.",
      "si deve considerare l’acciaio snervato."
     ],
     "correct": 0,
     "spiega": "Per MRd si usa il legame parabola-rettangolo per il calcestruzzo COMPRESSO; il cls teso si trascura."
    },
    {
     "q": "Per la valutazione del momento resistente di calcolo di una sezione di calcestruzzo armato",
     "opts": [
      "si devono considerare le resistenze di calcolo dei materiali che sono inferiori alle resistenze medie in quanto si vuole determinare un ente resistente che ha elevata probabilità di essere minorato dall’effettivo ente resistente dell’elemento strutturale.",
      "si devono considerare le resistenze di calcolo dei materiali che sono inferiori alle resistenze medie in quanto si vuole determinare un ente resistente che ha bassa probabilità di essere maggiorato dall’effettivo ente resistente dell’elemento strutturale.",
      "si devono considerare le resistenze di calcolo dei materiali che sono inferiori alle resistenze medie in quanto si vuole determinare un ente resistente che ha elevata probabilità di essere maggiorato dall’effettivo ente resistente dell’elemento strutturale.",
      "si devono considerare le resistenze di calcolo dei materiali che sono superiori alle resistenze medie in quanto si vuole determinare un ente resistente che ha elevata probabilità di essere maggiorato dall’effettivo ente resistente dell’elemento strutturale."
     ],
     "correct": 0,
     "spiega": "Si usano resistenze di calcolo (< medie) per ottenere un ente resistente con elevata probabilità di essere minorato dall'effettivo (cautela verso il basso)."
    },
    {
     "q": "Volendo determinare il momento resistente di calcolo sezione di calcestruzzo armato della seguente figura, nella quale è rappresentato il diagramma delle deformazioni",
     "opts": [
      "si deve imporre che la deformazione εcc sia uguale alla deformazione di rottura per compressione del calcestruzzo se l’acciaio si considera elastico perfettamente plastico.",
      "si deve imporre che la deformazione εct sia uguale alla deformazione di fessurazione del calcestruzzo teso.",
      "si deve imporre che la deformazione εst sia uguale alla deformazione di snervamento di calcolo dell’acciaio e che la deformazione che la deformazione εcc sia uguale alla deformazione di rottura per compressione del calcestruzzo.",
      "si deve imporre che la deformazione εst sia superiore alla deformazione di snervamento di calcolo dell’acciaio se l’acciaio si considera elastico incrudente."
     ],
     "correct": 0,
     "spiega": "Con acciaio elastico-perfettamente plastico la crisi si impone con εcc=εcu (rottura del calcestruzzo compresso).",
     "img": [
      "fig_p012_005.png"
     ]
    },
    {
     "q": "Per la sezione di calcestruzzo armato di figura, il momento resistente di calcolo",
     "opts": [
      "non dipende mai dallo sforzo normale agente.",
      "dipende sempre dallo sforzo normale agente.",
      "dipende dallo sforzo normale agente solo se questo è di compressione.",
      "dipende dallo sforzo normale agente solo se questo è di trazione."
     ],
     "correct": 1,
     "spiega": "Per pressoflessione MRd dipende sempre dallo sforzo normale agente N (dominio M-N).",
     "img": [
      "fig_p012_006.png"
     ]
    }
   ]
  },
  {
   "id": "007",
   "titolo": "Cerniere plastiche e rotazione",
   "domande": [
    {
     "q": "La massima rotazione relativa consentita da una cerniera plastica che si forma in un’asta",
     "opts": [
      "si può determinare imponendo che la curvatura massima sia pari alla curvatura di snervamento della sezione ed integrando le curvature nel tratto di asta nel quale viene superato il momento di snervamento stesso.",
      "si può determinare imponendo che la curvatura massima sia pari alla curvatura ultima della sezione ed integrando le rotazioni nel tratto di asta nel quale viene superato il momento di snervamento",
      "si può determinare imponendo che la curvatura massima sia pari alla curvatura ultima della sezione ed integrando le curvature nel tratto di asta nel quale viene superato il momento di snervamento.",
      "si può determinare imponendo che la rotazione massima sia pari alla rotazione ultima della sezione ed integrando le rotazioni nel tratto di asta nel quale viene superata la rotazione di snervamento."
     ],
     "correct": 2,
     "spiega": "La rotazione massima si ottiene imponendo curvatura massima = curvatura ULTIMA, integrando le CURVATURE nel tratto in cui M>My."
    },
    {
     "q": "In un elemento inflesso di calcestruzzo armato",
     "opts": [
      "le cerniere plastiche si formano quando il calcestruzzo raggiunge la sua resistenza a compressione.",
      "una cerniera plastica rappresenta il tratto nel quale l’acciaio è snervato.",
      "le cerniere plastiche si formano dove il momento flettente è stazionario.",
      "le cerniere plastiche rappresentano il diagramma momento-curvatura delle sezioni."
     ],
     "correct": 1,
     "spiega": "Una cerniera plastica rappresenta il tratto in cui l'acciaio è snervato (M>My), dove si concentrano le deformazioni plastiche."
    },
    {
     "q": "In un elemento inflesso di calcestruzzo armato, la capacità di rotazione rispetto alla corda",
     "opts": [
      "non dipende dallo spostamento della sezione nella quale il momento flettente è nullo.",
      "si calcola considerando l’acciaio al limite elastico.",
      "dipende sia dalle deformazioni elastiche che dalle deformazioni plastiche.",
      "dipende solo dalle deformazioni plastiche."
     ],
     "correct": 2,
     "spiega": "La capacità di rotazione rispetto alla corda dipende sia dalle deformazioni elastiche sia da quelle plastiche (θu = θy + θp)."
    },
    {
     "q": "In un elemento inflesso di calcestruzzo armato",
     "opts": [
      "una cerniera plastica è caratterizzata da un legame tra momento e rotazione relativa.",
      "l’estensione della zona plasticizzata non dipende dalla forma del diagramma del momento flettente.",
      "una cerniera plastica è caratterizzata esclusivamente da un legame momento-curvatura.",
      "la capacità di rotazione di una cerniera plastica non dipende dallo sforzo normale agente."
     ],
     "correct": 0,
     "spiega": "Una cerniera plastica è caratterizzata da un legame momento-rotazione relativa (M-θ), non momento-curvatura."
    }
   ]
  },
  {
   "id": "008",
   "titolo": "Taglio e traliccio di Mörsch",
   "domande": [
    {
     "q": "Il taglio resistente di calcolo in un elemento di calcestruzzo armato",
     "opts": [
      "si valuta considerando un’inclinazione delle bielle compresse di 45°, in accordo con l’andamento delle fessure.",
      "si può valutare considerando l’inclinazione delle bielle compresse che rende uguali il taglio-trazione ed il taglio-compressione se questa è tra 21.81° e 45°.",
      "è uguale al taglio-trazione se questo è più grande del taglio-compressione.",
      "si deve sempre valutare come la media tra taglio-trazione e taglio-compressione."
     ],
     "correct": 1,
     "spiega": "Il taglio resistente si valuta scegliendo l'inclinazione θ delle bielle che rende uguali taglio-trazione e taglio-compressione, se compresa tra 21.8° e 45°."
    },
    {
     "q": "All’aumentare dell’inclinazione delle bielle compresse che rappresentano il calcestruzzo nel traliccio di Morsh",
     "opts": [
      "il taglio-compressione diminuisce mentre il taglio-trazione aumenta.",
      "il taglio-compressione ed il taglio-trazione diminuiscono.diminuiscono.",
      "il taglio-compressione aumenta mentre il taglio-trazione diminuisce.",
      "il taglio-compressione ed il taglio-trazione aumentano.aumentano."
     ],
     "correct": 2,
     "spiega": "Aumentando θ (bielle più verticali): il taglio-compressione AUMENTA mentre il taglio-trazione DIMINUISCE."
    },
    {
     "q": "Il taglio resistente di calcolo di un elemento di calcestruzzo armato",
     "opts": [
      "è il taglio cui è associato il momento flettente che produce crisi delle sezioni di estremità dell’elemento.",
      "si può valutare come il minimo tra il taglio trazione ed il taglio compressione.",
      "non dipende dallo sforzo nomale cui è soggetto l’elemento.",
      "dipende dalla forma del diagramma del taglio sollecitante sull'elemento."
     ],
     "correct": 1,
     "spiega": "Il taglio resistente è il MINIMO tra taglio-trazione (snervamento staffe) e taglio-compressione (schiacciamento bielle)."
    },
    {
     "q": "Il taglio - trazione",
     "opts": [
      "non dipende dalla resistenza a compressione del calcestruzzo perché è il taglio cui è associato lo snervamento delle aste di parete tese del traliccio di Morsh.",
      "dipende dalla resistenza a compressione del calcestruzzo perché è il taglio cui è associata la rottura per compressione delle bielle di calcestruzzo del traliccio di Morsh.",
      "non dipende dall’interasse delle staffe.",
      "dipende dalla resistenza a compressione del calcestruzzo in quanto da questa dipende l’inclinazione delle bielle compresse del traliccio di Morsh."
     ],
     "correct": 0,
     "spiega": "Il taglio-trazione NON dipende dalla resistenza a compressione del cls: è associato allo snervamento delle aste di parete tese (staffe) del traliccio."
    }
   ]
  },
  {
   "id": "009",
   "titolo": "Tensioni di esercizio (c.a.)",
   "domande": [
    {
     "q": "Per la valutazione delle tensioni di esercizio di una sezione pressoinflessa di calcestruzzo armato",
     "opts": [
      "non è mai lecito utilizzare la sovrapposizione degli effetti (gli effetti dello sforzo normale centrato vengono sommati agli effetti della flessione) neanche se in esercizio i materiali possono considerarsi in fase elastica.",
      "è lecito utilizzare la sovrapposizione degli effetti (gli effetti dello sforzo normale centrato vengono sommati agli effetti della flessione) in quanto in esercizio i materiali possono considerarsi in fase elastica.",
      "è lecito utilizzare la sovrapposizione degli effetti (gli effetti dello sforzo normale centrato vengono sommati agli effetti della flessione) in quanto in esercizio i materiali possono considerarsi in fase elastica, solo se la sezione risulta parzializzata.",
      "è lecito utilizzare la sovrapposizione degli effetti (gli effetti dello sforzo normale centrato vengono sommati agli effetti della flessione) in quanto in esercizio i materiali possono considerarsi in fase elastica, solo se la sezione non risulta parzializzata."
     ],
     "correct": 3,
     "spiega": "La sovrapposizione degli effetti (N centrato + flessione) è lecita in fase elastica solo se la sezione NON è parzializzata (comportamento lineare su tutta la sezione)."
    },
    {
     "q": "Per la valutazione delle tensioni di esercizio di una sezione inflessa di calcestruzzo armato",
     "opts": [
      "è lecito considerare il calcestruzzo resistente a trazione e l’acciaio elastico lineare.",
      "è lecito considerare il calcestruzzo non resistente a trazione ed elastico lineare per tensioni di compressione ed è necessario considerare l’acciaio elastico perfettamente plastico.",
      "è lecito considerare il calcestruzzo elastico lineare e l’acciaio elastico lineare.",
      "è lecito considerare il calcestruzzo non resistente a trazione ed elastico lineare per tensioni di compressione e l’acciaio elastico lineare."
     ],
     "correct": 3,
     "spiega": "In esercizio è lecito considerare il cls non resistente a trazione ed elastico lineare a compressione, e l'acciaio elastico lineare."
    },
    {
     "q": "Per la valutazione delle tensioni di esercizio di una sezione inflessa (flessione semplice) di calcestruzzo armato",
     "opts": [
      "è lecito utilizzare il coefficiente di omogeneizzazione in quanto il calcolo è svolto sotto l’ipotesi di conservazione delle sezioni piane e i materiali sono in fase elastica.",
      "non è lecito utilizzare il coefficiente di omogeneizzazione in quanto il calcolo è svolto sotto l’ipotesi di conservazione delle sezioni piane.",
      "è lecito utilizzare il coefficiente di omogeneizzazione solo se la sezione non si parzializza.",
      "è lecito utilizzare il coefficiente di omogeneizzazione in quanto il calcolo non è svolto sotto l’ipotesi di conservazione delle sezioni piane."
     ],
     "correct": 0,
     "spiega": "È lecito usare il coefficiente di omogeneizzazione perché il calcolo è in conservazione delle sezioni piane e i materiali sono in fase elastica."
    },
    {
     "q": "Relativamente ad una combinazione di carico allo stato limite di esercizio per un elemento di calcestruzzo armato",
     "opts": [
      "la massima tensione di trazione del calcestruzzo non può superare la resistenza a trazione del calcestruzzo stesso.",
      "l’acciaio può essere snervato nella sezione più sollecitata.",
      "il calcestruzzo non deve fessurarsi in nessuna sezione.",
      "l’acciaio non deve snervarsi in nessuna sezione."
     ],
     "correct": 0,
     "spiega": "All'SLE la massima tensione di trazione del cls non può superare la sua resistenza a trazione (controllo di fessurazione). L'acciaio resta in fase elastica (non snervato)."
    }
   ]
  },
  {
   "id": "012",
   "titolo": "Carico di collasso travi iperstatiche",
   "domande": [
    {
     "q": "Per la trave di calcestruzzo armato di figura, avente la stessa sezione di armature longitudinali in ogni sezione, siano MRdn e MRdp i momenti resistenti di calcolo negativo e positivo, rispettivamente, ed L la luce. Il calcolo del carico di collasso come",
     "opts": [
      "è corretto solo se le armature nelle sezioni estreme si snervano quando le armature della sezione di mezzeria sono ancora in fase elastica.",
      "presuppone l’implicita assunzione che le armature nelle sezioni estreme siano snervate e che le armature nella sezione di mezzeria siano in fase elastica.",
      "presuppone l’implicita assunzione che le armature nelle sezioni estreme siano in fase elastica e che le armature nella sezione di mezzeria siano snervate.",
      "presuppone l’implicita assunzione che la sezione di mezzeria e quelle di estremità abbiano una sufficiente capacità deformativa."
     ],
     "correct": 3,
     "spiega": "Il calcolo del carico di collasso con MRdn e MRdp presuppone che le sezioni (mezzeria ed estremi) abbiano sufficiente capacità deformativa (duttilità) per formare il meccanismo plastico.",
     "img": [
      "fig_p018_011.png"
     ]
    }
   ]
  },
  {
   "id": "013",
   "titolo": "Materiale non resistente a trazione",
   "domande": [
    {
     "q": "Per un materiale non resistente a trazione",
     "opts": [
      "il tensore di tensione è rappresentato da una matrice definita negativa.",
      "il tensore di tensione è rappresentato da una matrice definita positiva.",
      "il tensore di tensione è rappresentato da una matrice semidefinita negativa.",
      "il tensore di tensione è rappresentato da una matrice semidefinita positiva."
     ],
     "correct": 2,
     "spiega": "Per un materiale non resistente a trazione il tensore di tensione è semidefinito NEGATIVO (autovalori ≤ 0: solo compressioni o tensioni nulle)."
    },
    {
     "q": "Lo stato di tensione rappresentato dai circoli di Mohr di figura (le tensioni di trazione sono considerate positive)",
     "opts": [
      "può sussistere in un punto di un materiale non resistente a trazione.",
      "può sussistere in un punto di un materiale non resistente a trazione se questo si considera anche infinitamente resistente a compressione.",
      "può sussistere in un punto di un materiale non resistente a trazione se la tensione tangenziale è sufficientemente piccola.",
      "non può sussistere in un punto di un materiale non resistente a trazione."
     ],
     "correct": 3,
     "spiega": "Se i circoli di Mohr mostrano una tensione principale positiva (di trazione), lo stato non può sussistere in un materiale non resistente a trazione.",
     "img": [
      "fig_p019_012.png"
     ]
    },
    {
     "q": "Per un materiale non resistente a trazione ed infinitamente rigido e resistente a compressione",
     "opts": [
      "in conseguenza dell’applicazione di un carico, la distanza tra due punti aumenta sempre.",
      "in conseguenza dell’applicazione di un carico, la distanza tra due punti aumenta se la congiungente i due punti non è intersecata da una fessura.",
      "in conseguenza dell’applicazione di un carico, la distanza tra due punti aumenta se la congiungente i due punti è intersecata da una fessura.",
      "in conseguenza dell’applicazione di un carico, la distanza tra due punti può solo diminuire."
     ],
     "correct": 2,
     "spiega": "In un materiale infinitamente rigido a compressione le distanze possono aumentare solo per apertura di fessure: la distanza tra due punti aumenta se la congiungente è intersecata da una fessura."
    }
   ]
  },
  {
   "id": "014",
   "titolo": "Cinematica dei materiali NRT",
   "domande": [
    {
     "q": "Per un materiale non resistente a trazione ed infinitamente rigido a compressione",
     "opts": [
      "le dilatazioni lineari specifiche sono positive.",
      "gli elementi del tensore di deformazione sono nulli.",
      "gli scorrimenti angolari sono negativi.",
      "gli elementi del tensore di deformazione sono positivi."
     ],
     "correct": 0,
     "spiega": "Con materiale NRT infinitamente rigido a compressione, le deformazioni sono solo dilatazioni (apertura fessure): le dilatazioni lineari specifiche sono positive."
    },
    {
     "q": "Per un corpo costituito da un materiale non resistente a trazione ed infinitamente rigido a compressione",
     "opts": [
      "si ha un campo di spostamenti non nullo se il sistema non si fessura.",
      "si ha un campo di spostamenti non nullo associato alle componenti del tensore di deformazione.",
      "si ha un campo di spostamenti non nullo appena in un punto si annulla la tensione di trazione.",
      "si ha un campo di spostamenti non nullo solo in conseguenza della formazione di cerniere."
     ],
     "correct": 3,
     "spiega": "Essendo il materiale infinitamente rigido, gli spostamenti non nulli derivano solo dalla formazione di cerniere/fessure (cinematismo di corpi rigidi)."
    },
    {
     "q": "Per un corpo costituito da materiale non resistente a trazione ed infinitamente rigido e resistente a compressione",
     "opts": [
      "le cerniere non si formano sul contorno del corpo.",
      "le cerniere si formano nel volume del corpo.",
      "le cerniere non si formano fuori dal volume del corpo per non violare l’ipotesi di infinita rigidezza e non si formano nel volume del corpo per non violare le condizioni di equilibrio.",
      "le cerniere non si formano nel volume del corpo per non violare l’ipotesi di infinita rigidezza e non si formano fuori dal volume del corpo per non violare le condizioni di equilibrio."
     ],
     "correct": 3,
     "spiega": "Le cerniere non si formano nel volume (violerebbe la rigidezza infinita) né fuori dal volume (violerebbe l'equilibrio): si formano sul contorno del corpo."
    }
   ]
  },
  {
   "id": "015",
   "titolo": "Teorema statico (carichi ammissibili)",
   "domande": [
    {
     "q": "Per un sistema costituito da un materiale non resistente a trazione, un carico staticamente ammissibile",
     "opts": [
      "è in equilibrio con uno stato di tensione relativamente al quale in ogni punto la massima tensione principale è non positiva.",
      "non è in equilibrio con uno stato di tensione relativamente al quale in ogni punto la massima tensione principale è non positiva.",
      "è in equilibrio con uno stato di tensione relativamente al quale in ogni punto la minima tensione principale è non negativa.",
      "è in equilibrio con uno stato di tensione relativamente al quale in ogni punto la massima tensione principale è non negativa."
     ],
     "correct": 0,
     "spiega": "Un carico staticamente ammissibile è in equilibrio con uno stato di tensione in cui in ogni punto la massima tensione principale è non positiva (sole compressioni, niente trazioni)."
    },
    {
     "q": "Si individui l’affermazione corretta relativamente al solido di figura, costituito da materiale non resistente a trazione avente resistenza e rigidezza a compressione tendenti ad infinito, soggetto al carico λq ed alle forze λN, essendo λ un moltiplicatore.",
     "opts": [
      "se moltiplicatore è inferiore ad un certo moltiplicatore limite il sistema non è in equilibrio.",
      "se il sistema è in equilibrio per λ = 1, non è detto che lo sia per λ = 2.",
      "se il sistema è in equilibrio per λ = 1 allora lo è anche per λ = 2.",
      "se moltiplicatore è superiore ad un certo moltiplicatore limite il sistema non è in equilibrio."
     ],
     "correct": 2,
     "spiega": "Per un materiale NRT con resistenza a compressione infinita, se è in equilibrio per λ=1 lo è anche per λ=2 (i carichi sono proporzionali e l'equilibrio si mantiene scalando, finché non si attiva il meccanismo).",
     "img": [
      "fig_p021_013.png"
     ]
    },
    {
     "q": "Per un sistema costituito da un materiale non resistente a trazione, un carico staticamente ammissibile",
     "opts": [
      "produce certamente la formazione di fessure.",
      "non produce la formazione di fessure.",
      "compie lavoro nullo per ogni meccanismo.",
      "può produrre la formazione di fessure."
     ],
     "correct": 3,
     "spiega": "Un carico staticamente ammissibile PUÒ produrre fessure (lo stato tensionale ammette tensioni nulle/compressioni, ma localmente possono esserci fessure compatibili con l'equilibrio)."
    },
    {
     "q": "Per un sistema costituito da un materiale non resistente a trazione un carico staticamente ammissibile",
     "opts": [
      "compie lavoro nullo per ogni meccanismo.",
      "compie lavoro non positivo per ogni meccanismo.",
      "compie lavoro nullo per almeno un meccanismo.",
      "compie lavoro non negativo per ogni meccanismo."
     ],
     "correct": 1,
     "spiega": "Un carico staticamente ammissibile compie lavoro non positivo per ogni meccanismo (teorema statico: il moltiplicatore staticamente ammissibile è ≤ di collasso)."
    },
    {
     "q": "Per un sistema costituito da un materiale non resistente a trazione soggetto al carico cinematicamente ammissibile associato ad un certo meccanismo",
     "opts": [
      "il lavoro compiuto dalle forze attive per gli spostamenti del meccanismo può essere positivo o negativo.",
      "il lavoro compiuto dalle forze attive è nullo per gli spostamenti del meccanismo.",
      "il lavoro compiuto dalle forze attive è negativo per gli spostamenti del meccanismo.",
      "il lavoro compiuto dalle forze attive è positivo per gli spostamenti del meccanismo."
     ],
     "correct": 3,
     "spiega": "Per il carico cinematicamente ammissibile associato a un meccanismo, il lavoro delle forze attive è positivo per gli spostamenti di quel meccanismo (definizione)."
    },
    {
     "q": "Per un sistema costituito da un materiale non resistente a trazione in equilibrio sotto un assegnato sistema di forze",
     "opts": [
      "il lavoro compiuto dalle forze attive è negativo per ogni meccanismo cinematicamente ammissibile.",
      "il lavoro compiuto dalle forze attive è non negativo per ogni meccanismo cinematicamente ammissibile.",
      "il lavoro compiuto dalle forze attive è non positivo per ogni meccanismo cinematicamente ammissibile.",
      "il lavoro compiuto dalle forze attive è nullo per ogni meccanismo cinematicamente ammissibile."
     ],
     "correct": 2,
     "spiega": "Per un sistema NRT in equilibrio, il lavoro delle forze attive è non positivo per ogni meccanismo cinematicamente ammissibile (condizione di equilibrio)."
    },
    {
     "q": "Per un sistema costituito da un materiale non resistente a trazione, un moltiplicatore cinematicamente ammissibile",
     "opts": [
      "è positivo se il sistema è in equilibrio sotto i carichi permanenti e i carichi variabili compiono lavoro positivo per gli spostamenti del meccanismo.",
      "è positivo se il sistema è in equilibrio sotto i carichi permanenti e i carichi variabili compiono lavoro negativo per gli spostamenti del meccanismo.",
      "non dipende dai carichi permanenti cui il sistema è soggetto.",
      "è negativo se il sistema è in equilibrio sotto i carichi permanenti e i carichi variabili compiono lavoro positivo per gli spostamenti del meccanismo."
     ],
     "correct": 0,
     "spiega": "Un moltiplicatore cinematicamente ammissibile è positivo se il sistema è in equilibrio sotto i permanenti e i variabili compiono lavoro positivo per gli spostamenti del meccanismo."
    }
   ]
  },
  {
   "id": "016",
   "titolo": "Equilibrio di solidi NRT",
   "domande": [
    {
     "q": "Si individui l’affermazione corretta relativamente al solido di figura, costituito da materiale non resistente a trazione avente resistenza e rigidezza a compressione tendenti ad infinito e soggetto al peso proprio P ed alle forze N.",
     "opts": [
      "La minima forza N necessaria per l’equilibrio dipende dal peso P ed aumenta all’aumentare di questo.",
      "La minima forza N necessaria per l’equilibrio non dipende dal peso P.",
      "La minima forza N necessaria per l’equilibrio dipende dal peso P e diminuisce all’aumentare di questo.",
      "Non esistono meccanismi che fanno compiere al pero lavoro negativo."
     ],
     "correct": 0,
     "spiega": "La minima forza N (orizzontale) necessaria all'equilibrio dipende dal peso P e aumenta all'aumentare di questo (più peso ribaltante → serve più forza stabilizzante).",
     "img": [
      "fig_p023_014.png"
     ]
    },
    {
     "q": "Per il sistema della figura seguente, costituito da materiale non resistente a trazione avente resistenza e rigidezza a compressione tendenti ad infinito",
     "opts": [
      "il moltiplicatore di collasso del carico q è nullo.",
      "il moltiplicatore di collasso del carico q dipende dal modulo elastico del materiale.",
      "il moltiplicatore di collasso del carico q dipende del peso specifico del materiale.",
      "il moltiplicatore di collasso del carico q è positivo."
     ],
     "correct": 3,
     "spiega": "Per il sistema (trave appoggiata con carico q) il moltiplicatore di collasso del carico q è positivo (esiste un valore finito di attivazione del meccanismo).",
     "img": [
      "fig_p023_015.png"
     ]
    },
    {
     "q": "Per il sistema della figura seguente, costituito da materiale non resistente a trazione avente resistenza e rigidezza a compressione tendenti ad infinito",
     "opts": [
      "il moltiplicatore di collasso del carico q è infinitamente grande.",
      "il moltiplicatore di collasso del carico q dipende dal modulo elastico del materiale.",
      "il moltiplicatore di collasso del carico q è negativo.",
      "il moltiplicatore di collasso del carico q dipende del peso specifico del materiale."
     ],
     "correct": 0,
     "spiega": "Per il sistema senza meccanismo attivabile dal carico q (configurazione stabile), il moltiplicatore di collasso è infinitamente grande: il carico non produce collasso.",
     "img": [
      "fig_p023_016.png"
     ]
    },
    {
     "q": "Per un solido costituito da materiale non resistente a trazione avente resistenza e rigidezza a compressione tendenti ad infinito, il campo di spostamenti schematizzato in figura",
     "opts": [
      "non è un meccanismo cinematicamente ammissibile in quanto non soddisfa l’ipotesi di rigidezza a compressione tendente ad infinito.",
      "è un meccanismo cinematicamente ammissibile ma non è il meccanismo di collasso del sistema.",
      "non è un meccanismo cinematicamente ammissibile in quanto non soddisfa l’ipotesi resistenza a trazione nulla.",
      "è il meccanismo di collasso del sistema."
     ],
     "correct": 3,
     "spiega": "Il campo di spostamenti schematizzato (rotazioni rigide con cerniere ammissibili) è il meccanismo di collasso del sistema.",
     "img": [
      "fig_p024_017.png"
     ],
     "verify": true
    },
    {
     "q": "Si individui l’affermazione corretta relativamente al solido di figura, costituito da materiale non resistente a trazione avente resistenza e rigidezza a compressione tendenti ad infinito e soggetto al peso proprio P ed alle forze N.",
     "opts": [
      "Esiste una intensità di N che, se superata, produce il collasso del sistema.",
      "Non esiste una intensità di N che, se superata, produce il collasso del sistema.",
      "Il solido è in equilibrio per N = 0.",
      "Il sistema non collassa per N = 0."
     ],
     "correct": 1,
     "spiega": "Per quel solido NRT non esiste un'intensità di N che, se superata, produce il collasso (N stabilizzante non porta a crisi aumentandolo).",
     "img": [
      "fig_p024_018.png"
     ],
     "verify": true
    },
    {
     "q": "Il pannello di figura è costituito da materiale non resistente a trazione ed ha spessore (dimensione ortogonale al piano del disegno) pari a t. R è la risultante del carico p distribuito sull'area di dimensioni b e t. Prescindendo dal peso del pannello stesso, può affermarsi che la tensione normale σz",
     "opts": [
      "è minima nel baricentro della sezione di base del pannello.",
      "è massima nel baricentro della sezione di base del pannello.",
      "nel puto A è R/A dove A=Lt è l’area della sezione di base.",
      "nel punto B è nulla."
     ],
     "correct": 2,
     "spiega": "Per un materiale NRT le compressioni si concentrano: nel punto A (lembo compresso) la tensione vale σ=R/A con A=L·t. Le altre opzioni confondono distribuzione lineare (Navier) non applicabile al NRT.",
     "img": [
      "fig_p024_019.png"
     ],
     "verify": true
    }
   ]
  },
  {
   "id": "017",
   "titolo": "Moltiplicatori cinematicamente ammissibili",
   "domande": [
    {
     "q": "Il sistema della figura seguente è costituito da materiale non resistente a trazione avente resistenza e rigidezza a compressione tendenti ad infinito (γm è il peso specifico del materiale e λ un moltiplicatore). Per questo sistema, il moltiplicatore cinematicamente ammissibile",
     "opts": [
      "non dipende dalla coordinata z che identifica la posizione della cerniera.",
      "dipende dalla coordinata z che identifica la posizione della cerniera, aumentando con questa.",
      "dipende del peso specifico del materiale per qualunque z.",
      "dipende dalla coordinata z che identifica la posizione della cerniera, diminuendo con questa."
     ],
     "correct": 3,
     "spiega": "Il moltiplicatore cinematicamente ammissibile dipende dalla coordinata z della cerniera, diminuendo all'aumentare di z (cerniera più in alto → meccanismo più facile → moltiplicatore minore). Il vero collasso è il minimo.",
     "img": [
      "fig_p025_020.png"
     ]
    },
    {
     "q": "Il sistema della figura seguente è costituito da materiale non resistente a trazione avente resistenza e rigidezza a compressione tendenti ad infinito (γm è il peso specifico del materiale, λ è un moltiplicatore e P è una forza assegnata). Per questo sistema, il moltiplicatore cinematicamente ammissibile",
     "opts": [
      "dipende del peso specifico del materiale per qualunque z.",
      "è massimo per z = H.",
      "dipende dalla coordinata z che identifica la posizione della cerniera, aumentando con questa.",
      "è minimo per z = 0."
     ],
     "correct": 0,
     "spiega": "Con una forza P assegnata in gioco, il moltiplicatore cinematicamente ammissibile dipende dal peso specifico del materiale per qualunque z (il peso proprio entra nel bilancio dei lavori).",
     "img": [
      "fig_p026_021.png"
     ]
    }
   ]
  },
  {
   "id": "019",
   "titolo": "Parzializzazione delle sezioni di muratura",
   "domande": [
    {
     "q": "Una sezione di muratura, pensata come materiale non resistente a trazione ed elastico lineare per tensioni di compressione, soggetta a sforzo normale eccentrico di compressione si parzializza se il centro di pressione è",
     "opts": [
      "interno al nocciolo centrale di inerzia.",
      "esterno alla sezione.",
      "esterno al nocciolo centrale di inerzia.",
      "sul bordo del nocciolo centrale di inerzia."
     ],
     "correct": 2,
     "spiega": "La sezione si parzializza (fessura) se il centro di pressione è ESTERNO al nocciolo centrale d'inerzia."
    },
    {
     "q": "In una sezione di muratura (materiale non resistente a trazione) soggetta a sforzo normale eccentrico",
     "opts": [
      "il centro di pressione può giacere fuori dalla sezione se lo sforzo normale è di compressione ed il momento flettente è positivo.",
      "il centro di pressione non può giacere fuori dalla sezione qualunque sia il segno del momento flettente, e lo sforzo normale deve essere di compressione.",
      "il centro di pressione può giacere fuori dalla sezione se lo sforzo normale è di compressione ed il momento flettente è negativo.",
      "il centro di pressione deve avere una posizione tale da consentire le rotazioni relative."
     ],
     "correct": 1,
     "spiega": "Il centro di pressione non può giacere fuori dalla sezione (deve restare interno per equilibrio con sole compressioni); lo sforzo normale deve essere di compressione."
    },
    {
     "q": "In una sezione di muratura (materiale non resistente a trazione) soggetta a sforzo normale eccentrico",
     "opts": [
      "si forma una cerniera appena si supera la resistenza a compressione del materiale.",
      "si forma una cerniera quando il centro di pressione è esterno alla sezione.",
      "si forma una cerniera quando il centro di pressione è esterno al nocciolo centrale di inerzia.",
      "si forma una cerniera quando il centro di pressione è su un lembo se la resistenza a compressione della muratura è infinitamente grande."
     ],
     "correct": 3,
     "spiega": "Con resistenza a compressione infinita, la cerniera si forma quando il centro di pressione è su un lembo (eccentricità = t/2, sezione tutta compressa concentrata sullo spigolo)."
    },
    {
     "q": "Per il concio di muratura (materiale non resistente a trazione ed infinitamente resistente a compressione) di figura, quando M=Nt/2",
     "opts": [
      "la tensione di compressione è infinitamente grande nel punto B.",
      "la tensione di compressione è infinitamente grande nel punto A.",
      "la tensione di trazione è infinitamente grande nel punto B.",
      "la tensione di compressione non è nulla nel baricentro G."
     ],
     "correct": 1,
     "spiega": "Quando M=N·t/2 il centro di pressione è sul lembo A: con resistenza a compressione infinita la tensione di compressione è infinitamente grande nel punto A (spigolo).",
     "img": [
      "fig_p027_022.png"
     ]
    }
   ]
  },
  {
   "id": "020",
   "titolo": "Stati di sollecitazione compatibili",
   "domande": [
    {
     "q": "Per un concio di muratura di spessore t (materiale non resistente a trazione ed infinitamente resistente a compressione) soggetto allo sforzo normale di compressione N ed al momento flettente M",
     "opts": [
      "i punti B e C non rappresentano uno stato di sollecitazione compatibile con l’equilibrio del concio.",
      "i punti A e B rappresentano uno stato di sollecitazione compatibile con l’equilibrio del concio.",
      "i punti C e D rappresentano uno stato di sollecitazione compatibile con l’equilibrio del concio.",
      "i punti D e E rappresentano uno stato di sollecitazione compatibile con l’equilibrio del concio."
     ],
     "correct": 1,
     "spiega": "I punti che giacciono nel dominio di resistenza (interni o sul bordo, con e≤t/2) rappresentano stati compatibili con l'equilibrio del concio. (A e B nel dominio).",
     "img": [
      "fig_p028_023.png"
     ],
     "verify": true
    }
   ]
  },
  {
   "id": "021",
   "titolo": "Eccentricità e momento resistente muratura",
   "domande": [
    {
     "q": "Per il concio di muratura di figura, pensando tendenti ad infinito la resistenza e la rigidezza a compressione del materiale",
     "opts": [
      "l’equilibrio è stabile se M<Nt/2 e Δβ > 0.",
      "l’equilibrio è stabile se M<Nt/2 e Δβ = 0.",
      "l’equilibrio è stabile se M<Nt/2.",
      "l’equilibrio è instabile se M<Nt/2 e Δβ = 0."
     ],
     "correct": 1,
     "spiega": "L'equilibrio del concio è stabile se M<N·t/2 (centro di pressione interno) e Δβ=0 (configurazione indeformata, nessuna rotazione relativa attivata).",
     "img": [
      "fig_p029_024.png"
     ]
    },
    {
     "q": "Per un arco di muratura rinforzato con un cavo disposto all’estradosso, non aderente ed ancorato alle imposte",
     "opts": [
      "il moltiplicatore di collasso è superiore a quello dello stesso arco non rinforzato se il cavo è sufficientemente rigido.",
      "il moltiplicatore di collasso è sempre superiore a quello dello stesso arco non rinforzato.",
      "il moltiplicatore di collasso è superiore a quello dello stesso arco non rinforzato solo se il cavo è pre-teso.",
      "il moltiplicatore di collasso è superiore a quello dello stesso arco non rinforzato se il cavo è sufficientemente resistente a trazione."
     ],
     "correct": 3,
     "spiega": "Per un arco rinforzato con cavo all'estradosso non aderente, il moltiplicatore di collasso supera quello dell'arco non rinforzato se il cavo è sufficientemente resistente a trazione (è la resistenza a trazione mobilitata a impedire l'apertura delle cerniere).",
     "verify": true
    },
    {
     "q": "Per il concio di muratura di figura, pensando tendenti ad infinito la resistenza e la rigidezza a compressione del materiale, nelle condizioni di equilibrio",
     "opts": [
      "il momento flettente rimane costante e pari a Nt/2 all’aumentare della rotazione relativa Δβ.",
      "il momento flettente diminuisce all’aumentare della rotazione relativa Δβ.",
      "il momento flettente cresce all'aumentare della rotazione relativa Δβ.",
      "il momento flettente rimane costante e pari a zero appena si ha una rotazione relativa Δβ non nulla."
     ],
     "correct": 0,
     "spiega": "Con resistenza/rigidezza a compressione infinite, una volta raggiunta e=t/2 il momento resta costante M=N·t/2 all'aumentare della rotazione relativa Δβ (cerniera plastica con M costante).",
     "img": [
      "fig_p029_025.png"
     ]
    },
    {
     "q": "Il modulo della massima eccentricità con la quale un assegnato sforzo normale N di compressione può essere applicato ad una sezione di muratura di altezza t, la cui resistenza a compressione è fm",
     "opts": [
      "si può approssimare con t/2 se lo sforzo normale è sufficientemente grande.",
      "si può sempre approssimare con t/2.",
      "si può approssimare con t/2 se lo sforzo normale è sufficientemente piccolo.",
      "non si può mai approssimare con t/2."
     ],
     "correct": 2,
     "spiega": "e_max = t/2 - N/(2·fm·b): si approssima a t/2 quando lo sforzo normale è sufficientemente piccolo (zona compressa piccola, baricentro vicino al lembo)."
    },
    {
     "q": "La massima eccentricità con la quale un assegnato sforzo normale N di compressione può essere applicato ad una sezione di muratura di altezza t, la cui resistenza a compressione è fm",
     "opts": [
      "diminuisce all’aumentare di N.",
      "nessuna delle altre affermazioni è corretta.",
      "non dipende da N.",
      "aumenta all’aumentare di N."
     ],
     "correct": 0,
     "spiega": "La massima eccentricità e_max=(t/2)(1-σ0/fm) diminuisce all'aumentare di N (più compressione → minore eccentricità ammissibile prima dello schiacciamento)."
    },
    {
     "q": "La massima eccentricità con la quale un assegnato sforzo normale N di compressione può essere applicato ad una sezione di muratura di altezza t, la cui resistenza a compressione è fm",
     "opts": [
      "è uguale, in modulo, a t/2.",
      "è inferiore a t/2.",
      "è superiore, in modulo, a t/2.",
      "non dipende da fm."
     ],
     "correct": 1,
     "spiega": "Con fm finita, la massima eccentricità è inferiore a t/2 (a t/2 corrisponderebbe tensione infinita; con resistenza finita serve un braccio interno, quindi e<t/2)."
    },
    {
     "q": "Il momento resistente di una sezione di muratura di altezza t, la cui resistenza a compressione è fm soggetta allo sforzo normale N di compressione (non nullo)",
     "opts": [
      "non si può approssimare con Nt/2 a meno che l’eccentricità non sia pari a t/2.",
      "si può sempre approssimare con Nt/2.",
      "si può approssimare con Nt/2 se lo sforzo normale è sufficientemente piccolo.",
      "si può approssimare con Nt/2 se lo sforzo normale è sufficientemente grande."
     ],
     "correct": 2,
     "spiega": "MRd=(N/2)(t-N/(fm·b)) si approssima con N·t/2 se lo sforzo normale è sufficientemente piccolo (termine N/(fm·b) trascurabile)."
    },
    {
     "q": "Il momento resistente di una sezione di muratura di altezza t, la cui resistenza a compressione è fm soggetta allo sforzo normale N di compressione (non nullo)",
     "opts": [
      "aumenta all’aumentare di N.",
      "nessuna delle altre affermazioni è corretta.",
      "diminuisce all’aumentare di N.",
      "non dipende da N."
     ],
     "correct": 1,
     "spiega": "Il momento resistente MRd=(N/2)(t-N/(fm·b)) ha andamento parabolico in N: cresce, raggiunge un massimo a N=fm·b·t/2, poi decresce. Quindi 'nessuna delle altre' (non è monotòno)."
    },
    {
     "q": "Il momento resistente di una sezione di muratura di altezza t, la cui resistenza a compressione è fm soggetta allo sforzo normale N di compressione (non nullo)",
     "opts": [
      "è inferiore a Nt/2.",
      "è uguale a Nt/2.",
      "non dipende da N.",
      "è superiore a Nt/2."
     ],
     "correct": 0,
     "spiega": "Il momento resistente MRd=(N/2)(t-N/(fm·b)) è inferiore a N·t/2 (il termine N/(fm·b) lo riduce, essendo fm finita)."
    },
    {
     "q": "Per un arco di muratura rinforzato con un cavo disposto all’estradosso, non aderente ed ancorato alle imposte",
     "opts": [
      "il moltiplicatore di collasso è sempre superiore a quello dello stesso arco non rinforzato.",
      "il moltiplicatore di collasso è superiore a quello dello stesso arco non rinforzato solo se il cavo è pre-teso.",
      "il moltiplicatore di collasso corrisponde sempre ad una configurazione con apertura delle cerniere non nulla.",
      "il moltiplicatore di collasso è sempre superiore a quello dello stesso arco non rinforzato se il cavo è pre-teso."
     ],
     "correct": 0,
     "spiega": "Per un arco rinforzato con cavo all'estradosso, il moltiplicatore di collasso è sempre superiore a quello dell'arco non rinforzato (il cavo aggiunge un vincolo che ostacola il meccanismo).",
     "verify": true
    }
   ]
  },
  {
   "id": "022",
   "titolo": "Luogo dei centri di pressione",
   "domande": [
    {
     "q": "Per il pannello di figura, costituito da materiale non resistente a trazione e avente resistenza a compressione tendente ad infinito",
     "opts": [
      "il luogo dei centri di pressione “b” è cinematicamente ammissibile.",
      "il luogo dei centri di pressione “b” non è staticamente ammissibile.",
      "il luogo dei centri di pressione “a” è cinematicamente ammissibile.",
      "il luogo dei centri di pressione “c” è staticamente ammissibile."
     ],
     "correct": 3,
     "spiega": "Il luogo dei centri di pressione 'c' interno alla sezione è staticamente ammissibile (rappresenta uno stato di equilibrio con sole compressioni).",
     "img": [
      "fig_p031_026.png"
     ],
     "verify": true
    },
    {
     "q": "Con riferimento allo schema seguente (materiale non resistente a trazione ed infinitamente rigido e resistente a compressione) relativamente al quale q [kN/m] e f [kN/m3] sono carichi noti, γm è il peso specifico della muratura e λ è un moltiplicatore",
     "opts": [
      "il luogo dei centri di pressione associato al moltiplicatore di collasso interseca un lembo nella sezione z = H/2.",
      "il luogo dei centri di pressione associato al moltiplicatore di collasso interseca la sezione di base in corrispondenza di uno dei suoi lembi.",
      "il luogo dei centri di pressione associato al moltiplicatore di collasso non ha punti comuni con i lembi delle sezioni.",
      "il luogo dei centri di pressione associato al moltiplicatore di collasso non passa per il baricentro G della sezione di sommità."
     ],
     "correct": 1,
     "spiega": "Al collasso il luogo dei centri di pressione interseca la sezione di base in corrispondenza di uno dei suoi lembi (formazione di cerniera al lembo).",
     "img": [
      "fig_p032_027.png"
     ]
    },
    {
     "q": "Con riferimento allo schema seguente (materiale non resistente a trazione ed infinitamente rigido e resistente a compressione) relativamente al quale q [kN/m] e f [kN/m3] sono carichi noti, γm è il peso specifico della muratura e λ è un moltiplicatore",
     "opts": [
      "relativamente al meccanismo con cerniera in A il carico q, il peso e la forza f compiono lavoro positivo.",
      "relativamente al meccanismo con cerniera in A e relativamente al meccanismo di collasso il carico q ed il peso compiono lavoro negativo mentre la forza f compie lavoro positivo.",
      "relativamente al meccanismo con cerniera in A il carico q ed il peso compiono lavoro positivo mentre la forza f compie lavoro negativo.",
      "relativamente al meccanismo con cerniera in A il carico q ed il peso compiono lavoro positivo."
     ],
     "correct": 2,
     "spiega": "Per il meccanismo con cerniera in A: il carico q e il peso compiono lavoro positivo (spostamenti concordi) mentre la forza f compie lavoro negativo (opposta al moto).",
     "img": [
      "fig_p033_028.png"
     ],
     "verify": true
    },
    {
     "q": "Con riferimento allo schema seguente (materiale non resistente a trazione ed infinitamente rigido e resistente a compressione) relativamente al quale q [kN/m] e f [kN/m3] sono carichi noti, γm è il peso specifico della muratura e λ è un moltiplicatore",
     "opts": [
      "il moltiplicatore associato al meccanismo identificato da una cerniera nel punto A è staticamente ammissibile ma non cinematicamente ammissibile.",
      "il moltiplicatore associato al meccanismo identificato da una cerniera nel punto A è cinematicamente ammissibile ma non staticamente ammissibile.",
      "il luogo dei centri di pressione associato al meccanismo con cerniera in A è sempre non esterno alla sezione.",
      "il luogo dei centri di pressione associato al meccanismo con cerniera in A è esterno alla sezione per z<H/2."
     ],
     "correct": 1,
     "spiega": "Il moltiplicatore associato al meccanismo con cerniera in A è cinematicamente ammissibile (definisce un meccanismo) ma non necessariamente staticamente ammissibile (luogo dei centri può uscire dalla sezione).",
     "img": [
      "fig_p033_029.png"
     ],
     "verify": true
    },
    {
     "q": "Con riferimento allo schema seguente (materiale non resistente a trazione ed infinitamente rigido e resistente a compressione) relativamente al quale q [kN/m] e f [kN/m3] sono carichi noti, γm è il peso specifico della muratura e λ è un moltiplicatore",
     "opts": [
      "il moltiplicatore di collasso aumenta all’aumentare dei carichi q ed f.",
      "il moltiplicatore di collasso non dipende dall’intensità dei carichi q ed f.",
      "il moltiplicatore di collasso diminuisce all’aumentare del carico q e aumenta all’aumentare del carico f.",
      "il moltiplicatore di collasso diminuisce all’aumentare del carico f e aumenta all’aumentare del carico q."
     ],
     "correct": 2,
     "spiega": "Il moltiplicatore di collasso diminuisce all'aumentare di q (carico ribaltante) e aumenta all'aumentare di f (se f è stabilizzante).",
     "img": [
      "fig_p034_030.png"
     ],
     "verify": true
    }
   ]
  },
  {
   "id": "023",
   "titolo": "Analisi limite di archi",
   "domande": [
    {
     "q": "In una volta a botte di muratura (materiale non resistente a trazione ed infinitamente rigido e resistente a compressione) in equilibrio sotto l’azione del suo peso, il peso della muratura",
     "opts": [
      "compie lavoro non negativo per ogni meccanismo.",
      "compie lavoro positivo per alcuni meccanismi e negativo per altri.",
      "compie lavoro nullo per il meccanismo di collasso.",
      "compie lavoro non positivo per ogni meccanismo."
     ],
     "correct": 3,
     "spiega": "In una volta in equilibrio sotto il peso, il peso compie lavoro non positivo per ogni meccanismo (teorema statico: equilibrio ⇒ lavoro ≤0 per ogni meccanismo ammissibile)."
    },
    {
     "q": "Lo schema seguente rappresenta un arco (materiale non resistente a trazione ed infinitamente rigido e resistente a compressione) soggetto a carichi permanenti e ad un carico variabile la cui intensità è proporzionale ad un moltiplicatore λ. Si individui l’affermazione corretta tra le seguenti.",
     "opts": [
      "il moltiplicatore cui corrisponde il luogo dei centri di pressione rappresentato è il moltiplicatore di collasso.",
      "il moltiplicatore cui corrisponde il luogo dei centri di pressione rappresentato è più piccolo del moltiplicatore di collasso.",
      "il luogo dei centri di pressione rappresentato corrisponde ad un moltiplicatore non staticamente ammissibile.",
      "il moltiplicatore cui corrisponde il luogo dei centri di pressione rappresentato è più grande del moltiplicatore di collasso."
     ],
     "correct": 1,
     "spiega": "Un luogo dei centri di pressione tutto interno alla sezione corrisponde a un moltiplicatore staticamente ammissibile, quindi più piccolo (o uguale) del moltiplicatore di collasso (teorema statico).",
     "img": [
      "fig_p038_035.png"
     ],
     "verify": true
    },
    {
     "q": "Il luogo dei centri di pressione rappresentato in figura (arco di materiale non resistente a trazione ed infinitamente rigido e resistente a compressione) è associato al moltiplicatore λ = λ1 della forza F assegnata. Può affermarsi che",
     "opts": [
      "nel meccanismo di collasso si ha una cerniera all’intradosso tra A e B e il moltiplicatore di collasso della forza F è più piccolo di λ1.",
      "nel meccanismo di collasso si ha una cerniera all’intradosso tra D e E e il moltiplicatore di collasso della forza F è più grande di λ1.",
      "nel meccanismo di collasso si ha una cerniera all’estradosso tra C e D e il moltiplicatore di collasso della forza F è più grande di λ1.",
      "nel meccanismo di collasso si ha una cerniera all’intradosso tra C e D e il moltiplicatore di collasso della forza F è più piccolo di λ1."
     ],
     "correct": 3,
     "spiega": "Se il luogo λ1 mostra una cerniera all'intradosso tra C e D, il vero moltiplicatore di collasso (con meccanismo completo) è più piccolo di λ1, essendo λ1 staticamente ammissibile.",
     "img": [
      "fig_p039_036.png"
     ],
     "verify": true
    },
    {
     "q": "Lo schema seguente rappresenta un arco (materiale non resistente a trazione ed infinitamente rigido e resistente a compressione) soggetto a carichi permanenti e ad un carico variabile la cui intensità è proporzionale ad un moltiplicatore λ. Si individui l’affermazione corretta tra le seguenti.",
     "opts": [
      "Il luogo dei centri di pressione rappresentato corrisponde al moltiplicatore di collasso.",
      "Il luogo dei centri di pressione rappresentato corrisponde ad un moltiplicatore staticamente ammissibile.",
      "Il moltiplicatore cui corrisponde il luogo dei centri di pressione rappresentato è più piccolo del moltiplicatore di collasso.",
      "Il moltiplicatore cui corrisponde il luogo dei centri di pressione rappresentato è più grande del moltiplicatore di collasso."
     ],
     "correct": 1,
     "spiega": "Il luogo dei centri di pressione interno rappresentato corrisponde a un moltiplicatore staticamente ammissibile (≤ moltiplicatore di collasso).",
     "img": [
      "fig_p039_037.png"
     ],
     "verify": true
    }
   ]
  },
  {
   "id": "024",
   "titolo": "Volte, catene e spinta",
   "domande": [
    {
     "q": "La catena di una volta (materiale non resistente a trazione ed infinitamente rigido e resistente a compressione)",
     "opts": [
      "è sempre necessaria per l’equilibrio della volta.",
      "è necessaria solo se la volta non è rinforzata con materiali compositi.",
      "deve essere dimensionata per sostenere almeno la spinta minima della volta se i piedritti non sono in grado di sostenere forze orizzontali.",
      "deve essere dimensionata per sostenere almeno la spinta massima della volta."
     ],
     "correct": 3,
     "spiega": "La catena deve essere dimensionata per sostenere almeno la spinta massima della volta (deve assorbire la massima spinta orizzontale per garantire l'equilibrio)."
    },
    {
     "q": "Lo schema seguente rappresenta una volta (materiale non resistente a trazione ed infinitamente rigido e resistente a compressione) soggetta al peso proprio ed alla forza H (spinta), in condizione di equilibrio. Si individui l’affermazione corretta tra le seguenti.",
     "opts": [
      "Il luogo dei centri di pressione “A” è associato alla spinta massima, mentre il luogo dei centri di pressione “B” è associato alla spinta minima.",
      "I luoghi dei centri di pressione “A” e “B” sono associati alla stessa spinta in quanto la volta è soggetta al solo peso proprio.",
      "Il luogo dei centri di pressione “A” è associato alla spinta minima, mentre il luogo dei centri di pressione “B” è associato alla spinta massima.",
      "Se H = 0 il sistema è in una condizione di equilibrio limite."
     ],
     "correct": 2,
     "spiega": "Il luogo dei centri di pressione 'A' (più alto/teso verso l'estradosso) è associato alla spinta minima, 'B' alla spinta massima. (dipende dalla figura; logica: spinta min e max delimitano gli stati ammissibili).",
     "img": [
      "fig_p040_038.png"
     ],
     "verify": true
    },
    {
     "q": "Lo schema seguente rappresenta una volta (materiale non resistente a trazione ed infinitamente rigido e resistente a compressione) soggetta al peso proprio ed alla forza H (spinta), in condizione di equilibrio. Si individui l’affermazione corretta tra le seguenti.",
     "opts": [
      "Il peso della volta compie lavoro positivo relativamente al meccanismo associato al luogo dei centri di pressione “A” e compie lavoro negativo relativamente al meccanismo associato al luogo dei centri di pressione “B”.",
      "Il peso della volta compie lavoro negativo relativamente al meccanismo associato al luogo dei centri di pressione “A” e compie lavoro positivo relativamente al meccanismo associato al luogo dei centri di pressione “B”.",
      "Il peso della volta compie lavoro positivo sia relativamente al meccanismo associato al luogo dei centri di pressione “A” che relativamente al meccanismo associato al luogo dei centri di pressione “B”.",
      "Il peso della volta compie lavoro negativo sia relativamente al meccanismo associato al luogo dei centri di pressione “A” che relativamente al meccanismo associato al luogo dei centri di pressione “B”."
     ],
     "correct": 2,
     "spiega": "Il peso della volta compie lavoro positivo per entrambi i meccanismi A e B (il peso scende in entrambi i cinematismi di collasso).",
     "img": [
      "fig_p040_039.png"
     ],
     "verify": true
    },
    {
     "q": "Lo schema seguente rappresenta una volta (materiale non resistente a trazione ed infinitamente rigido e resistente a compressione) soggetta al peso proprio ed alla forza H (spinta), in condizione di equilibrio. Si individui l’affermazione corretta tra le seguenti.",
     "opts": [
      "La forza H compie lavoro positivo sia relativamente al meccanismo associato al luogo dei centri di pressione “A” che relativamente al meccanismo associato al luogo dei centri di pressione “B”.",
      "La forza H compie lavoro negativo sia relativamente al meccanismo associato al luogo dei centri di pressione “A” che relativamente al meccanismo associato al luogo dei centri di pressione “B”.",
      "La forza H compie lavoro negativo relativamente al meccanismo associato al luogo dei centri di pressione “A” e compie lavoro positivo relativamente al meccanismo associato al luogo dei centri di pressione “B”.",
      "La forza H compie lavoro positivo relativamente al meccanismo associato al luogo dei centri di pressione “A” e compie lavoro negativo relativamente al meccanismo associato al luogo dei centri di pressione “B”."
     ],
     "correct": 3,
     "spiega": "La spinta H compie lavoro positivo per il meccanismo A e negativo per il meccanismo B (verso opposto dello spostamento nei due cinematismi).",
     "img": [
      "fig_p041_040.png"
     ],
     "verify": true
    }
   ]
  },
  {
   "id": "025",
   "titolo": "Volte su piedritti",
   "domande": [
    {
     "q": "Lo schema seguente rappresenta una volta di muratura su piedritti anche essi di muratura (materiale non resistente a trazione ed infinitamente rigido e resistente a compressione). Relativamente al meccanismo identificato dalle quattro cerniere rappresentate, si indichi l’affermazione corretta.",
     "opts": [
      "Un incremento della forza P1 produce un incremento del moltiplicatore λ del carico p associato al meccanismo solo se si ha un incremento anche della forza P2.",
      "L’entità delle forze P1 e P2 non influenza il moltiplicatore λ del carico p associato al meccanismo.",
      "Un incremento della forza P1 produce un incremento del moltiplicatore λ del carico p associato al meccanismo indipendentemente dall’entità della forza P2.",
      "Un incremento della forza P1 produce un decremento del moltiplicatore λ del carico p associato al meccanismo indipendentemente dall’entità della forza P2."
     ],
     "correct": 3,
     "spiega": "Un incremento di P1 (forza stabilizzante sul piedritto) produce un decremento del moltiplicatore λ del carico p, indipendentemente da P2.",
     "img": [
      "fig_p042_041.png"
     ],
     "verify": true
    },
    {
     "q": "Lo schema seguente rappresenta una volta di muratura su piedritti anche essi di muratura (materiale non resistente a trazione ed infinitamente rigido e resistente a compressione). Si identifichi l’affermazione corretta.",
     "opts": [
      "Il meccanismo associato al luogo dei centri di pressione rappresentato coinvolge la rotazione antioraria del piedritto di destra.",
      "Il meccanismo associato al luogo dei centri di pressione rappresentato coinvolge la rotazione oraria del piedritto di sinistra.",
      "Il meccanismo associato al luogo dei centri di pressione rappresentato coinvolge la rotazione antioraria del piedritto di sinistra.",
      "Il meccanismo associato al luogo dei centri di pressione rappresentato coinvolge la rotazione oraria del piedritto di destra."
     ],
     "correct": 2,
     "spiega": "Il meccanismo rappresentato coinvolge la rotazione antioraria del piedritto di sinistra (dipende dalla figura; coerente con apertura verso l'esterno).",
     "img": [
      "fig_p042_042.png"
     ],
     "verify": true
    }
   ]
  },
  {
   "id": "026",
   "titolo": "Pannelli di muratura e aste elastiche",
   "domande": [
    {
     "q": "Nello schema di figura, i pannelli A e B sono di muratura (materiale non resistente a trazione ed infinitamente rigido e resistente a compressione) avente peso specifico γm. Le aste CD e CE sono di materiale elastico lineare. Il meccanismo di collasso del sistema prevede",
     "opts": [
      "spostamento nullo di ogni punto del pannello B.",
      "spostamento orizzontale nullo del punto C.",
      "spostamento nullo di ogni punto del pannello A.",
      "rotazione oraria del pannello B e antioraria del pannello A."
     ],
     "correct": 3,
     "spiega": "Il meccanismo di collasso prevede rotazione oraria del pannello B e antioraria del pannello A (cinematismo simmetrico di apertura). Dipende dalla figura.",
     "img": [
      "fig_p047_050.png"
     ],
     "verify": true
    },
    {
     "q": "Nello schema di figura, il pannello A è di muratura (materiale non resistente a trazione ed infinitamente rigido e resistente a compressione) avente peso specifico γm. L’asta BC è di materiale elastico lineare. Può affermarsi che il moltiplicatore di collasso λc della forza F",
     "opts": [
      "diminuisce all’aumentare della forza P.",
      "aumenta all'aumentare della forza P.",
      "non dipende né dalla forza P né dalla forza Q.",
      "aumenta all’aumentare della forza Q."
     ],
     "correct": 0,
     "spiega": "Il moltiplicatore di collasso λc della forza F diminuisce all'aumentare di P (P è destabilizzante/ribaltante nel cinematismo).",
     "img": [
      "fig_p047_051.png"
     ]
    }
   ]
  },
  {
   "id": "028",
   "titolo": "Spessore minimo delle volte",
   "domande": [
    {
     "q": "Per una volta a botte di muratura (materiale non resistente a trazione ed infinitamente rigido e resistente a compressione), lo spessore minimo",
     "opts": [
      "è il minimo spessore della volta per aversi in ogni punto una tensione di compressione inferiore alla resistenza a compressione del materiale.",
      "è il minimo spessore della volta per aversi in ogni punto una tensione tangenziale inferiore alla resistenza a taglio del materiale.",
      "è il minimo spessore della volta che garantisce l’assenza di fessure sotto carichi assegnati.",
      "è il minimo spessore della volta che garantisce l’equilibrio sotto carichi assegnati."
     ],
     "correct": 3,
     "spiega": "Lo spessore minimo è il minimo che garantisce l'EQUILIBRIO sotto i carichi assegnati (il luogo dei centri di pressione resta entro lo spessore). Per materiale a compressione infinita conta l'equilibrio, non la tensione."
    }
   ]
  },
  {
   "id": "029",
   "titolo": "Momento resistente delle sezioni di muratura",
   "domande": [
    {
     "q": "Il momento resistente di calcolo di una sezione di muratura (materiale non resistente a trazione) soggetta a sforzo normale nullo",
     "opts": [
      "dipende dai carichi applicati all’elemento strutturale cui la sezione appartiene.",
      "dipende dalla resistenza a compressione della muratura.",
      "dipende dai vincoli imposti all’elemento strutturale cui la sezione appartiene.",
      "è nullo."
     ],
     "correct": 3,
     "spiega": "Per sforzo normale nullo, il momento resistente di una sezione di muratura NRT è nullo (senza compressione non c'è braccio resistente a flessione)."
    },
    {
     "q": "Relativamente ad una parete di muratura, il momento resistente di calcolo della sezione di un pannello di una fascia di piano non soggetta a compressione (materiale non resistente a trazione)",
     "opts": [
      "non dipende dal tipo di architrave né dalla sua geometria.",
      "dipende dai carichi agenti.",
      "non dipende dalla presenza e dalla posizione del cordolo di piano.",
      "è nullo se nella fascia non sono disposti elementi resistenti a trazione."
     ],
     "correct": 3,
     "spiega": "Il momento resistente di una fascia non compressa è nullo se non sono disposti elementi resistenti a trazione (architrave, cordolo, catena)."
    }
   ]
  },
  {
   "id": "030",
   "titolo": "Taglio resistente (Mohr-Coulomb)",
   "domande": [
    {
     "q": "Il taglio resistente di calcolo di una sezione di muratura, secondo l’apporoccio di Mohr-Coulomb",
     "opts": [
      "non dipende dallo sforzo normale agente.",
      "dipende dallo sforzo normale agente ma non dal momento flettente agente.",
      "dipende dallo sforzo normale agente ma non dalla sua eccentricità.",
      "dipende sia dallo sforzo normale agente che dalla sua eccentricità."
     ],
     "correct": 3,
     "spiega": "Il taglio resistente secondo Mohr-Coulomb dipende sia dallo sforzo normale agente sia dalla sua eccentricità (l'eccentricità determina la lunghezza della zona compressa reagente)."
    },
    {
     "q": "Considerando nulla la coesione del materiale, il taglio resistente di calcolo di una sezione di muratura, secondo l’approccio di Mohr-Coulomb",
     "opts": [
      "non dipende dallo sforzo normale agente.",
      "dipende dallo sforzo normale e dal momento flettente agenti.",
      "dipende dallo sforzo normale agente ma non dalla sua eccentricità.",
      "dipende sia dallo sforzo normale agente che dalla sua eccentricità."
     ],
     "correct": 2,
     "spiega": "Con coesione nulla, il taglio resistente Mohr-Coulomb dipende dallo sforzo normale (attrito μ·N) ma non dalla sua eccentricità (V_t=μ·N, indipendente da e)."
    }
   ]
  },
  {
   "id": "031",
   "titolo": "Fibre e compositi (proprietà)",
   "domande": [
    {
     "q": "Si identifichi l’affermazione corretta tra le seguenti.",
     "opts": [
      "Il modulo elastico delle fibre di vetro è inferiore a quello delle fibre di carbonio.",
      "Il modulo elastico delle fibre di carbonio è circa 240000 GPa.",
      "Il modulo elastico delle fibre di PBO è inferiore a quello delle fibre di carbonio.",
      "Il modulo elastico delle fibre di PBO è inferiore a quello delle fibre di vetro."
     ],
     "correct": 0,
     "spiega": "Il modulo elastico delle fibre di vetro (~70-80 GPa) è inferiore a quello delle fibre di carbonio (~240 GPa). L'opzione che dice 240000 GPa è errata di tre ordini di grandezza."
    },
    {
     "q": "Un tessuto avente le fibre disposte in due direzioni",
     "opts": [
      "nessuna delle altre affermazioni è corretta.",
      "si caratterizza con un solo spessore nominale, dipendente dalla quantità totale di fibre.",
      "si caratterizza con due spessori nominali, ciascuno associato alla quantità di fibre aventi una certa direzione.",
      "non viene caratterizzato in termini di spessore nominale."
     ],
     "correct": 2,
     "spiega": "Un tessuto bidirezionale si caratterizza con due spessori nominali, uno per ciascuna direzione delle fibre (proporzionali alla quantità di fibre in quella direzione)."
    }
   ]
  },
  {
   "id": "034",
   "titolo": "Prove di aderenza e delaminazione",
   "domande": [
    {
     "q": "In una prova di pull-off",
     "opts": [
      "la crisi può avvenire per la rottura a trazione del materiale di supporto; in questo caso il risultato è soddisfacente.",
      "la crisi può avvenire per rottura a trazione sulla superficie di interfaccia tra rinforzo e supporto; in questo caso il risultato è soddisfacente.",
      "la crisi può avvenire per rottura a taglio sulla superficie di interfaccia tra rinforzo e supporto; in questo caso il risultato non è soddisfacente.",
      "la crisi può avvenire per la rottura a trazione del materiale di supporto; in questo caso il risultato non è soddisfacente."
     ],
     "correct": 0,
     "spiega": "Nel pull-off la crisi per rottura a trazione del SUPPORTO (calcestruzzo) è il risultato soddisfacente: indica che l'adesione rinforzo-supporto è più forte del substrato."
    },
    {
     "q": "In una trave di calcestruzzo armato rinforzata con materiale composito e testata a flessione",
     "opts": [
      "si osserva, di solito, una crisi per delaminazione con superficie di frattura nel supporto nel caso di rinforzo con FRCM.",
      "si osserva, di solito, una crisi per delaminazione all’interfaccia tra fibre e matrice o nella matrice nel caso di rinforzo con FRP.",
      "si osserva, di solito, una crisi per delaminazione con superficie di frattura nel supporto nel caso di rinforzo con FRP.",
      "si osserva, di solito, una crisi per schiacciamento del calcestruzzo nel caso di rinforzo con FRP."
     ],
     "correct": 2,
     "spiega": "Con rinforzo FRP la crisi tipica è la delaminazione con superficie di frattura nel SUPPORTO (si stacca un sottile strato di calcestruzzo)."
    },
    {
     "q": "In una trave di calcestruzzo armato rinforzata con materiale composito e testata a flessione",
     "opts": [
      "il carico di collasso, a parità di fibre utilizzate, non dipende dalla matrice.",
      "la crisi per sfilamento delle fibre dalla matrice è tipica di alcuni compositi FRCM e non avviene con i compositi FRP.",
      "la crisi per sfilamento delle fibre dalla matrice è tipica di alcuni compositi FRP e non avviene con i compositi FRCM.",
      "non si ha la crisi per delaminazione se la trave è dotata di fasce ad U di estremità."
     ],
     "correct": 1,
     "spiega": "La crisi per sfilamento delle fibre dalla matrice è tipica di alcuni compositi FRCM (matrice inorganica) e non avviene nei FRP (matrice resinosa che ingloba le fibre)."
    }
   ]
  },
  {
   "id": "036",
   "titolo": "Lunghezza di trasferimento efficace",
   "domande": [
    {
     "q": "La lunghezza di trasferimento efficace",
     "opts": [
      "è la minima lunghezza necessaria trasferire al supporto la resistenza a trazione del rinforzo.",
      "è la massima lunghezza necessaria per ottenersi la massima forza di delaminazione.",
      "è la massima lunghezza necessaria trasferire al supporto la resistenza a trazione del rinforzo.",
      "è la minima lunghezza necessaria per ottenersi la massima forza di delaminazione."
     ],
     "correct": 3,
     "spiega": "La lunghezza di trasferimento efficace Leff è la minima lunghezza di ancoraggio necessaria per ottenere la massima forza di delaminazione (oltre Leff la forza non aumenta)."
    },
    {
     "q": "Lo scorrimento tra un rinforzo ed un supporto in un punto P dell’interfaccia",
     "opts": [
      "dipende dalla posizione del punto P.",
      "è lo scorrimento angolare del supporto in corrispondenza dell’interfaccia con il rinforzo.",
      "è una quantità adimensionale.",
      "può sempre determinarsi una volta nota la tensione tangenziale."
     ],
     "correct": 0,
     "spiega": "Lo scorrimento s(x) tra rinforzo e supporto dipende dalla posizione del punto P lungo l'interfaccia (varia lungo x)."
    },
    {
     "q": "Se un rinforzo di materiale composito è ancorato ad un supporto per una lunghezza L superiore alla lunghezza di trasferimento efficace Leff",
     "opts": [
      "la massima forza trasferibile per aderenza tra rinforzo e supporto è superiore alla massima forza che può essere trasferita per L = Leff.",
      "la massima forza trasferibile per aderenza non dipende dalla larghezza del rinforzo.",
      "la massima forza trasferibile per aderenza tra rinforzo e supporto è uguale alla massima forza che può essere trasferita per L = Leff.",
      "la massima forza trasferibile per aderenza non dipende dallo spessore del rinforzo."
     ],
     "correct": 2,
     "spiega": "Per L>Leff la massima forza trasferibile per aderenza è UGUALE a quella per L=Leff (aumentare l'ancoraggio oltre Leff non aumenta la forza max)."
    }
   ]
  },
  {
   "id": "037",
   "titolo": "Energia di frattura e legge coesiva",
   "domande": [
    {
     "q": "L’energia di frattura della superficie di interfaccia tra un rinforzo ed un supporto può esprimersi in",
     "opts": [
      "N/mm.",
      "kN.",
      "J/m.",
      "kNm."
     ],
     "correct": 0,
     "spiega": "L'energia di frattura dell'interfaccia ha le dimensioni di energia per unità di superficie: N·mm/mm² = N/mm (equivalente a J/m²). Tra le opzioni, N/mm."
    },
    {
     "q": "Per un’interfaccia caratterizzata da una legge coesiva tipo quella di figura",
     "opts": [
      "la massima forza trasferibile per aderenza può essere espressa in funzione della pendenza del tratto crescente, cioè del rapporto tra               e sm.",
      "la massima forza trasferibile per aderenza può essere espressa in funzione del prodotto tra              e sm.",
      "la massima forza trasferibile per aderenza può essere espressa in funzione del prodotto tra              e sf.",
      "la massima forza trasferibile per aderenza può essere espressa in funzione del prodotto tra sf e sm."
     ],
     "correct": 3,
     "spiega": "La massima forza trasferibile dipende dall'energia di frattura GF = area sotto la legge coesiva = funzione del prodotto tra τ0 (tensione di picco) e sf (scorrimento ultimo). Tra le opzioni: prodotto tra (τ0) e sf.",
     "img": [
      "fig_p055_053.png",
      "fig_p055_054.png"
     ]
    },
    {
     "q": "Per un’interfaccia caratterizzata da una legge coesiva tipo quella di figura",
     "opts": [
      "a parità di tutti gli altri parametri la massima forza trasferibile per aderenza è proporzionale a           .",
      "a parità di tutti gli altri parametri la massima forza trasferibile per aderenza è proporzionale a sf.",
      "a parità di tutti gli altri parametri la massima forza trasferibile per aderenza dipende dallo scorrimento sm.",
      "la massima forza trasferibile per aderenza può essere espressa in funzione dell’energia di frattura della superficie di interfaccia."
     ],
     "correct": 3,
     "spiega": "La massima forza trasferibile per aderenza può essere espressa in funzione dell'energia di frattura GF dell'interfaccia (Pmax = b·√(2·GF·Ef·tf)).",
     "img": [
      "fig_p055_053.png",
      "fig_p055_054.png"
     ]
    },
    {
     "q": "Per un’interfaccia caratterizzata da una legge coesiva tipo quella di figura",
     "opts": [
      "l’energia di frattura dell’interfaccia è nulla.",
      "non è definibile l’energia di frattura dell’interfaccia.",
      "la massima forza trasferibile per aderenza aumenta indefinitamente con la lunghezza di ancoraggio.",
      "la massima forza trasferibile per aderenza ha un limite superiore che non può essere superato indipendentemente dalla lunghezza di ancoraggio."
     ],
     "correct": 3,
     "spiega": "La massima forza trasferibile ha un limite superiore (Pmax) che non può essere superato aumentando la lunghezza di ancoraggio oltre Leff.",
     "img": [
      "fig_p056_055.png",
      "fig_p057_056.png"
     ]
    }
   ]
  },
  {
   "id": "038",
   "titolo": "Identificazione della Leff",
   "domande": [
    {
     "q": "Per un’interfaccia caratterizzata da una legge coesiva tipo quella di figura, istituito un asse x lungo l’interfaccia e detti s(x) lo scorrimento e       (x) la tensione tangenziale all’ascissa x, la lunghezza di trasferimento efficace resta identificata dalla condizione",
     "opts": [
      "(x) =      0.",
      "s(x) = sf.",
      "(x) =     m.",
      "s(x) = sm."
     ],
     "correct": 1,
     "spiega": "La lunghezza di trasferimento efficace è identificata dalla condizione s(x)=sf nell'estremo caricato (scorrimento ultimo raggiunto: inizia il distacco completo).",
     "img": [
      "fig_p057_057.png"
     ]
    }
   ]
  },
  {
   "id": "039",
   "titolo": "Forza massima trasferibile per aderenza",
   "domande": [
    {
     "q": "Per il sistema di figura, tenendo presente che l’interfaccia tra rinforzo e supporto è caratterizzata da una legge coesiva tipo quella di figura, la tensione del rinforzo corrispondente alla massima forza trasferibile per aderenza",
     "opts": [
      "diminuisce all'aumentare della larghezza del rinforzo.",
      "aumenta all'aumentare della larghezza del rinforzo.",
      "aumenta all'aumentare dello spessore del rinforzo.",
      "diminuisce all'aumentare dello spessore del rinforzo."
     ],
     "correct": 3,
     "spiega": "La tensione del rinforzo alla massima forza σ_max=√(2·GF·Ef/tf) diminuisce all'aumentare dello spessore tf del rinforzo.",
     "img": [
      "fig_p058_058.png"
     ]
    },
    {
     "q": "Per il sistema di figura, tenendo presente che l’interfaccia tra rinforzo e supporto è caratterizzata da una legge coesiva tipo quella di figura",
     "opts": [
      "la massima forza trasferibile per aderenza è proporzionale alla larghezza del rinforzo.",
      "la massima forza trasferibile per aderenza diminuisce con l’aumentare dello spessore del rinforzo.",
      "la massima forza trasferibile per aderenza è proporzionale allo spessore del rinforzo.",
      "la massima forza trasferibile per aderenza non dipende dal modulo elastico del rinforzo."
     ],
     "correct": 0,
     "spiega": "La massima forza trasferibile per aderenza è proporzionale alla larghezza b del rinforzo (Pmax = b·√(2·GF·Ef·tf)).",
     "img": [
      "fig_p058_059.png"
     ]
    },
    {
     "q": "Per il sistema di figura, tenendo presente che l’interfaccia tra rinforzo e supporto è caratterizzata da una legge coesiva tipo quella di figura",
     "opts": [
      "quando la forza P è massima lo scorrimento nel punto B è pari a sm.",
      "quando la forza P è massima la tensione tangenziale di interfaccia nel punto B è nulla.",
      "quando la forza P è massima la tensione tangenziale di interfaccia nel punto B non può essere nulla.",
      "quando la forza P è massima la tensione tangenziale di interfaccia è pari a    m nei punti A e B."
     ],
     "correct": 1,
     "spiega": "Quando P è massima, all'estremo scarico (punto B) la tensione tangenziale di interfaccia è nulla (la zona attiva si è spostata verso l'estremo caricato).",
     "img": [
      "fig_p059_060.png",
      "fig_p059_061.png"
     ]
    },
    {
     "q": "Per il sistema di figura, tenendo presente che l’interfaccia tra rinforzo e supporto è caratterizzata da una legge coesiva tipo quella di figura e che la lunghezza di ancoraggio è uguale alla lunghezza di trasferimento efficace, può affermarsi che",
     "opts": [
      "alla massima forza P applicabile corrisponde scorrimento nullo del punto B e uguale a sf nel punto A.",
      "alla massima forza P applicabile corrisponde scorrimento nullo del punto A e uguale a sf nel punto B.",
      "alla massima forza P applicabile corrispondono scorrimenti nulli per un’estensione di rinforzo di lunghezza finita ma inferiore a L.",
      "alla massima forza P applicabile corrispondono scorrimenti non nulli per l’intera estensione del rinforzo."
     ],
     "correct": 0,
     "spiega": "Con L=Leff, alla massima forza P lo scorrimento è nullo nel punto B (estremo scarico) e pari a sf nel punto A (estremo caricato, dove inizia il distacco).",
     "img": [
      "fig_p059_062.png"
     ]
    },
    {
     "q": "Per il sistema di figura, tenendo presente che l’interfaccia tra rinforzo e supporto è caratterizzata da una legge coesiva tipo quella di figura",
     "opts": [
      "lo scorrimento nel punto A è nullo finché la tensione tangenziale all’interfaccia non raggiunge     m nel punto A stesso.",
      "lo scorrimento nel punto A è nullo finché la forza P non raggiunge una certa intensità.",
      "lo scorrimento nel punto A è non nullo per ogni intensità della forza P.",
      "al crescere della forza P, appena lo scorrimento del punto B è non nullo anche lo scorrimento del punto A è non nullo."
     ],
     "correct": 1,
     "spiega": "Lo scorrimento nel punto A (caricato) è nullo finché la forza P non raggiunge una certa intensità (comportamento iniziale rigido prima dell'attivazione dell'interfaccia).",
     "img": [
      "fig_p059_062.png"
     ]
    },
    {
     "q": "Per il sistema di figura, tenendo presente che l’interfaccia tra rinforzo e supporto è caratterizzata da una legge coesiva tipo quella di figura",
     "opts": [
      "quando la tensione tangenziale di interfaccia nel punto A è pari a    m la forza P è massima.",
      "quando la tensione tangenziale di interfaccia nel punto B è pari a     m la forza P è massima.",
      "quando lo scorrimento nel punto B è pari a sf la forza P è massima.",
      "quando lo scorrimento nel punto A è pari ad sf la forza P è massima."
     ],
     "correct": 3,
     "spiega": "La forza P è massima quando lo scorrimento nel punto A (estremo caricato) raggiunge sf (scorrimento ultimo: tutta l'energia di frattura è mobilitata).",
     "img": [
      "fig_p060_063.png"
     ]
    }
   ]
  },
  {
   "id": "040",
   "titolo": "Distacco del rinforzo e Leff",
   "domande": [
    {
     "q": "L’interfaccia tra un rinforzo FRP ed il supporto è caratterizzata da una legge coesiva tipo quella di figura. A parità di ogni altra condizione, può affermarsi che la lunghezza di trasferimento efficace raddoppia",
     "opts": [
      "se la tensione tangenziale    0 raddoppia.",
      "se la tensione tangenziale   0 viene moltiplicata per quattro.",
      "se lo scorrimento sf viene moltiplicato per quattro.",
      "se lo scorrimento sf raddoppia."
     ],
     "correct": 2,
     "spiega": "Leff ∝ √(sf): la lunghezza di trasferimento efficace raddoppia se lo scorrimento sf viene moltiplicato per quattro (radice di 4 = 2).",
     "img": [
      "fig_p061_064.png",
      "fig_p061_065.png"
     ]
    },
    {
     "q": "Per il sistema di figura, tenendo presente che l’interfaccia tra rinforzo e supporto è caratterizzata da una legge coesiva tipo quella di figura, la lunghezza di trasferimento efficace tende ad infinito se",
     "opts": [
      "0 = 0.",
      "sm = 0.",
      "sm = sf.",
      "0=     m"
     ],
     "correct": 2,
     "spiega": "La lunghezza di trasferimento efficace tende a infinito se sm=sf (legge coesiva senza ramo di softening: comportamento elastico-perfettamente plastico dell'interfaccia, l'aderenza non si esaurisce mai).",
     "img": [
      "fig_p061_064.png",
      "fig_p061_065.png"
     ]
    },
    {
     "q": "Per il sistema di figura, tenendo presente che l’interfaccia tra rinforzo e supporto è caratterizzata da una legge coesiva tipo quella di figura, il distacco del rinforzo dal supporto",
     "opts": [
      "inizia in corrispondenza del punto B e si propaga con P costante verso il punto A se L è maggiore della lunghezza di trasferimento efficace.",
      "inizia in corrispondenza del punto B ed al crescere di P si propaga verso il punto A se L è maggiore della lunghezza di trasferimento efficace.",
      "inizia in corrispondenza del punto B e si propaga con P costante verso il punto A se L è minore della lunghezza di trasferimento efficace.",
      "inizia in corrispondenza del punto A e si propaga con P costante verso B se L è maggiore della lunghezza di trasferimento efficace."
     ],
     "correct": 1,
     "spiega": "Il distacco inizia nel punto B (estremo caricato) e al crescere di P si propaga verso A, se L>Leff (propagazione progressiva della delaminazione).",
     "img": [
      "fig_p062_066.png"
     ]
    },
    {
     "q": "Per il sistema di figura, tenendo presente che l’interfaccia tra rinforzo e supporto è caratterizzata da una legge coesiva tipo quella di figura, la lunghezza di trasferimento efficace",
     "opts": [
      "dipende dalla larghezza del rinforzo.",
      "aumenta all'aumentare della rigidezza assiale del rinforzo.",
      "diminuisce all'aumentare dello spessore equivalente del rinforzo.",
      "dipende dalla lunghezza L."
     ],
     "correct": 1,
     "spiega": "La lunghezza di trasferimento efficace aumenta all'aumentare della rigidezza assiale del rinforzo (Ef·tf): Leff ∝ √(Ef·tf).",
     "img": [
      "fig_p062_067.png"
     ]
    },
    {
     "q": "Prove di tipo “double lap shear tests” eseguite su un composito FRCM con fibre di PBO hanno mostrato che",
     "opts": [
      "la lunghezza di trasferimento efficace di questo composito è tra 250 mm e 300 mm.",
      "la lunghezza di trasferimento efficace di questo composito è tra 200 mm e 250 mm.",
      "la lunghezza di trasferimento efficace di questo composito è inferiore a 150 mm.",
      "la lunghezza di trasferimento efficace di questo composito è tra 150 mm e 200 mm."
     ],
     "correct": 1,
     "spiega": "Le prove double-lap shear su FRCM con fibre PBO mostrano Leff tra 200 e 250 mm."
    },
    {
     "q": "Prove di tipo “double lap shear tests” eseguite su un composito FRCM con fibre di PBO hanno mostrato che",
     "opts": [
      "la deformazione delle fibre corrispondente alla massima forza trasferibile per aderenza è approssimativamente 0.8‰.",
      "la deformazione delle fibre corrispondente alla massima forza trasferibile per aderenza è approssimativamente 8‰.",
      "la deformazione delle fibre corrispondente alla massima forza trasferibile per aderenza è approssimativamente 0.08‰.",
      "la deformazione delle fibre corrispondente alla massima forza trasferibile per aderenza è approssimativamente 8%."
     ],
     "correct": 1,
     "spiega": "Le prove su FRCM-PBO mostrano una deformazione delle fibre alla massima forza di circa 8‰ (0.8%)."
    }
   ]
  },
  {
   "id": "041",
   "titolo": "FRP su muratura (mattone e malta)",
   "domande": [
    {
     "q": "La figura rappresenta un composito FRP incollato su un elemento di muratura e le leggi coesive che caratterizzano le interfacce FRP-mattone ed FRP-malta. La lunghezza della zona di trasferimento",
     "opts": [
      "non dipende dallo spessore nominale del composito.",
      "cresce sempre all’aumentare di P.",
      "non dipende mai dallo spessore tm dei giunti.",
      "può essere superiore alla lunghezza di trasferimento efficace dell’interfaccia tra FRP e mattoni."
     ],
     "correct": 3,
     "spiega": "La lunghezza della zona di trasferimento su muratura può essere superiore alla Leff dell'interfaccia FRP-mattone (la presenza dei giunti di malta, più deboli, allunga la zona di trasferimento).",
     "img": [
      "fig_p064_069.png"
     ]
    },
    {
     "q": "La figura rappresenta un composito FRP incollato su un elemento di muratura e le leggi coesive che caratterizzano le interfacce FRP-mattone ed FRP-malta. La lunghezza della zona di trasferimento",
     "opts": [
      "è inferiore alla lunghezza bb del mattone.",
      "è costante all'aumentare di P.",
      "non dipende dal modulo elastico delle fibre.",
      "può essere inferiore alla lunghezza di trasferimento efficace dell’interfaccia tra FRP e mattoni."
     ],
     "correct": 3,
     "spiega": "La lunghezza della zona di trasferimento può essere inferiore alla Leff dell'interfaccia FRP-mattone (dipende dalla posizione rispetto a mattoni e giunti).",
     "img": [
      "fig_p064_070.png"
     ]
    },
    {
     "q": "La figura rappresenta un composito FRP incollato su un elemento di muratura e le leggi coesive che caratterizzano le interfacce FRP-mattone ed FRP-malta. Si identifichi l’affermazione corretta tra le seguenti.",
     "opts": [
      "Nessuna delle altre affermazioni è corretta.",
      "La tensione tangenziale     (x) è discontinua in corrispondenza dei giunti tra blocchi e malta",
      "Lo scorrimento all'interfaccia s(x) è discontinuo in corrispondenza dei giunti tra blocchi e malta.",
      "La deformazione del composito ε(x) è discontinua in corrispondenza dei giunti tra blocchi e malta."
     ],
     "correct": 3,
     "spiega": "La deformazione del composito ε(x) è discontinua in corrispondenza dei giunti tra blocchi e malta (cambio di rigidezza dell'interfaccia → cambio di gradiente). Lo scorrimento s(x) resta continuo.",
     "img": [
      "fig_p065_071.png",
      "fig_p065_072.png"
     ]
    },
    {
     "q": "La figura rappresenta un composito FRP incollato su un elemento di muratura e le leggi coesive che caratterizzano le interfacce FRP-mattone ed FRP-malta. Sia Leff la lunghezza di trasferimento efficace che caratterizza l’interfaccia FRP-mattone.",
     "opts": [
      "la massima forza trasferibile all’interfaccia FRP-muratura è uguale alla massima forza trasferibile all’interfaccia FRP-mattone se tm < Leff.",
      "la massima forza trasferibile all’interfaccia FRP-muratura è uguale alla massima forza trasferibile all’interfaccia FRP-mattone se bb < Leff.",
      "la massima forza trasferibile all’interfaccia FRP-muratura è uguale alla massima forza trasferibile all’interfaccia FRP-mattone se bb > Leff.",
      "la massima forza trasferibile all’interfaccia FRP-muratura è uguale alla massima forza trasferibile all’interfaccia FRP-mattone se tm > Leff."
     ],
     "correct": 2,
     "spiega": "La massima forza trasferibile FRP-muratura uguaglia quella FRP-mattone se bb>Leff (se il mattone è abbastanza lungo da contenere l'intera lunghezza di trasferimento efficace).",
     "img": [
      "fig_p065_071.png",
      "fig_p065_072.png"
     ]
    },
    {
     "q": "La figura rappresenta un composito FRP incollato su un elemento di muratura e le leggi coesive che caratterizzano le interfacce FRP-mattone ed FRP-malta. La curva P(sL) del sistema di figura (sL è lo scorrimento dell’estremo caricato), se la lunghezza dell’incollaggio è sufficientemente grande",
     "opts": [
      "presenta un primo tratto crescente seguito da un tratto costante.",
      "è sempre crescente fino al completo distacco del rinforzo.",
      "presenta un tratto crescente seguito da un unico tratto discendente.",
      "presenta un tratto crescente seguito da un tratto nel quale la forza ha un andamento oscillante."
     ],
     "correct": 2,
     "spiega": "La curva P(sL) per ancoraggio lungo presenta un tratto crescente seguito da un unico tratto discendente (softening dopo il picco di forza, durante la propagazione del distacco).",
     "img": [
      "fig_p066_073.png"
     ]
    }
   ]
  },
  {
   "id": "043",
   "titolo": "Forza trasferibile FRP-muratura",
   "domande": [
    {
     "q": "La figura rappresenta un composito FRP incollato su un elemento di muratura e la legge coesiva che caratterizza l’interfaccia FRP-mattone. Le tensioni tangenziali sono nulle all’interfaccia FRP-malta. Siano Pmax0 la massima forza trasferibile all’interfaccia FRP-muratura, Pu la massima forza trasferibile all’interfaccia FRP-mattone, Leff la lunghezza di trasferimento efficace dell’interfaccia FRP-mattone e pmax0 = Pmax0/Pu. Può affermarsi che",
     "opts": [
      "Pu non dipende dalla larghezza del rinforzo.",
      "il rapporto pmax0 dipende dalla rigidezza del rinforzo.",
      "il rapporto pmax0 dipende dalla larghezza del rinforzo.",
      "la forza Pmax0 dipende dalla larghezza del rinforzo."
     ],
     "correct": 3,
     "spiega": "La forza Pmax0 (FRP-muratura) dipende dalla larghezza del rinforzo (proporzionale a b, come tutte le forze di aderenza).",
     "img": [
      "fig_p067_074.png"
     ]
    },
    {
     "q": "La figura rappresenta un composito FRP incollato su un elemento di muratura e la legge coesiva che caratterizza l’interfaccia FRP-mattone. Le tensioni tangenziali sono nulle all’interfaccia FRP-malta. Siano Pmax0 la massima forza trasferibile all’interfaccia FRP-muratura, Pu la massima forza trasferibile all’interfaccia FRP-mattone, Leff la lunghezza di trasferimento efficace dell’interfaccia FRP-mattone e pmax0 = Pmax0/Pu. Può affermarsi che",
     "opts": [
      "la forza Pu dipende da bb/Leff e tm/bb.",
      "la lunghezza Leff dipende da tm/bb.",
      "il rapporto pmax0 dipende solo da bb/Leff e tm/bb.",
      "la forza Pmax0 dipende solo da bb/Leff e tm/bb."
     ],
     "correct": 2,
     "spiega": "Il rapporto adimensionale pmax0=Pmax0/Pu dipende solo dai parametri geometrici adimensionali bb/Leff e tm/bb (mattone e giunto rispetto a Leff).",
     "img": [
      "fig_p067_075.png"
     ]
    },
    {
     "q": "La figura rappresenta un composito FRP incollato su un elemento di muratura e la legge coesiva che caratterizza l’interfaccia FRP-mattone. Le tensioni tangenziali sono nulle all’interfaccia FRP-malta. Siano Pmax0 la massima forza trasferibile all’interfaccia FRP-muratura, Pu la massima forza trasferibile all’interfaccia FRP-mattone, Leff la lunghezza di trasferimento efficace dell’interfaccia FRP-mattone e pmax0 = Pmax0/Pu. Può affermarsi che",
     "opts": [
      "la dipendenza tra pmax0 ed i parametri bb/Leff e tm/bb determinata per la legge coesiva di figura è valida per tutte le leggi coesive a patto che sia definibile l’energia di frattura dell’interfaccia.",
      "la dipendenza tra pmax0 ed i parametri bb/Leff e tm/bb determinata per la legge coesiva di figura non è valida anche per altre leggi coesive di interfaccia.",
      "la dipendenza tra pmax0 ed i parametri bb/Leff e tm/bb determinata per la legge coesiva di figura è valida per tutte le leggi coesive caratterizzate dalla stessa energia di frattura.",
      "la dipendenza tra pmax0 ed i parametri bb/Leff e tm/bb determinata per la legge coesiva di figura è valida anche per altre leggi coesive che possono essere ottenute da questa con opportuni criteri."
     ],
     "correct": 0,
     "spiega": "La dipendenza di pmax0 da bb/Leff e tm/bb è valida per tutte le leggi coesive purché sia definibile l'energia di frattura dell'interfaccia (Pmax dipende solo da GF, non dalla forma della legge).",
     "img": [
      "fig_p068_076.png"
     ]
    }
   ]
  },
  {
   "id": "045",
   "titolo": "Energia di frattura (CNR DT200-2013)",
   "domande": [
    {
     "q": "L’energia di frattura dell’interfaccia tra un rinforzo FRP ed un supporto di calcestruzzo, secondo l’approccio delle linee guida CNR DT200-2013",
     "opts": [
      "non dipende dai parametri geometrici della superficie di interfaccia.",
      "dipende dalla resistenza a compressione ma non dalla resistenza a trazione del calcestruzzo.",
      "dipende dalla resistenza a trazione e dalla resistenza a compressione del calcestruzzo.",
      "dipende dalla resistenza a trazione ma non dalla resistenza a compressione del calcestruzzo."
     ],
     "correct": 2,
     "spiega": "Secondo CNR DT200, l'energia di frattura GF dipende dalla resistenza a trazione e a compressione del calcestruzzo (GF=k·√(fcm·fctm))."
    },
    {
     "q": "Il valore caratteristico dell’energia di frattura dell’interfaccia tra un rinforzo FRP ed un supporto di calcestruzzo, secondo l’approccio delle linee guida CNR DT200-2013",
     "opts": [
      "è espresso in funzione della dalla rigidezza del rinforzo.",
      "è espresso in funzione della resistenza a trazione e della resistenza a compressione caratteristiche del calcestruzzo.",
      "non dipende dalle caratteristiche meccaniche del calcestruzzo.",
      "è espresso in funzione della resistenza a trazione e della resistenza a compressione medie del calcestruzzo."
     ],
     "correct": 1,
     "spiega": "Il valore caratteristico di GF è espresso in funzione delle resistenze a trazione e compressione CARATTERISTICHE del calcestruzzo."
    },
    {
     "q": "Per determinare il valore di calcolo dell’energia di frattura dell’interfaccia tra un rinforzo FRP ed un supporto di calcestruzzo, secondo l’approccio delle linee guida CNR DT200-2013",
     "opts": [
      "è necessario definire il livello di conoscenza raggiunto relativamente alla struttura da rinforzare.",
      "è necessario caratterizzare le armature degli elementi strutturali.",
      "non è necessario caratterizzare il calcestruzzo di supporto.",
      "è necessario eseguire prove di pull-off."
     ],
     "correct": 0,
     "spiega": "Per il valore di calcolo di GF occorre definire il livello di conoscenza raggiunto sulla struttura (entra il fattore di confidenza FC)."
    },
    {
     "q": "Il coefficiente kb previsto dalla linea guida CNR DT200-2013 per il calcolo dell’energia di frattura dell’interfaccia tra un composito FRP e calcestruzzo",
     "opts": [
      "non dipende dal rapporto bf/b, essendo bf la larghezza del rinforzo e b la larghezza del supporto.",
      "è unitario se la larghezza del rinforzo è sufficientemente grande rispetto alla larghezza del supporto.",
      "è una funzione crescente del rapporto bf/b, essendo bf la larghezza del rinforzo e b la larghezza del supporto.",
      "è unitario se la larghezza del rinforzo è sufficientemente piccola rispetto alla larghezza del supporto."
     ],
     "correct": 2,
     "spiega": "Il coefficiente kb è funzione crescente del rapporto bf/b (geometrico): più largo il rinforzo rispetto al supporto, maggiore kb."
    },
    {
     "q": "Il valore di calcolo della massima forza trasferibile tra un composito FRP ed un supporto di calcestruzzo, secondo l’approccio delle linee guida CNR DT200-2013",
     "opts": [
      "è direttamente proporzionale alla radice quadrata del prodotto tra l’energia di frattura dell’interfaccia e lo spessore nominale del rinforzo.",
      "è direttamente proporzionale all’energia di frattura dell’interfaccia ed alla radice quadrata dello spessore nominale del rinforzo.",
      "è inversamente proporzionale alla rigidezza assiale del rinforzo.",
      "è direttamente proporzionale alla radice quadrata del prodotto tra la larghezza e lo spessore nominale del rinforzo."
     ],
     "correct": 0,
     "spiega": "La massima forza trasferibile è proporzionale alla radice quadrata del prodotto tra energia di frattura e spessore nominale del rinforzo: Pmax ∝ √(GF·tf)."
    },
    {
     "q": "Il valore di calcolo della massima forza trasferibile tra un composito FRP ed un supporto di calcestruzzo, secondo l’approccio delle linee guida CNR DT200-2013",
     "opts": [
      "non dipende dal numero degli strati di rinforzo.",
      "raddoppia raddoppiando il numero degli strati di rinforzo.",
      "raddoppia se il numero degli strati viene moltiplicato per quattro.",
      "raddoppia dimezzando il numero degli strati di rinforzo."
     ],
     "correct": 2,
     "spiega": "Pmax ∝ √(tf) e tf ∝ n.strati: raddoppiando Pmax serve √4 = quadruplicare gli strati. Quindi raddoppia se il numero di strati è moltiplicato per quattro."
    },
    {
     "q": "Il valore di calcolo della massima forza trasferibile tra un composito FRP ed un supporto di muratura, secondo l’approccio delle linee guida CNR DT200-2013",
     "opts": [
      "dipende anche dalle caratteristiche meccaniche della malta.",
      "viene determinato considerando il supporto non omogeneo, cioè costituito da blocchi e malta.",
      "dipende dalle proprietà meccaniche della matrice utilizzata per l’incollaggio delle fibre.",
      "dipende dell’orientamento del rinforzo rispetto alla tessitura della muratura."
     ],
     "correct": 0,
     "spiega": "Per supporto di muratura, la massima forza trasferibile dipende anche dalle caratteristiche meccaniche della malta (interfaccia FRP-malta, più debole)."
    },
    {
     "q": "Sia per un supporto di calcestruzzo che per un supporto di muratura, secondo l’approccio delle linee guida CNR DT200-2013",
     "opts": [
      "all’aumentare del numero di strati di tessuto la forza di delaminazione diminuisce mentre la tensione e la deformazione di delaminazione aumentano.",
      "all’aumentare del numero di strati di tessuto la forza di delaminazione e la tensione di delaminazione aumentano mentre la deformazione di delaminazione diminuisce.",
      "all’aumentare del numero di strati di tessuto la forza di delaminazione aumenta mentre la tensione e la deformazione di delaminazione diminuiscono.",
      "all’aumentare del numero di strati di tessuto la forza di delaminazione, la tensione e la deformazione di delaminazione aumentano."
     ],
     "correct": 2,
     "spiega": "All'aumentare del numero di strati: la forza di delaminazione AUMENTA (√tf), mentre tensione e deformazione di delaminazione DIMINUISCONO (σ ∝ 1/√tf)."
    }
   ]
  },
  {
   "id": "046",
   "titolo": "Rinforzo a flessione: effetti",
   "domande": [
    {
     "q": "Il rinforzo a flessione con materiali compositi di una sezione di calcestruzzo armato",
     "opts": [
      "incrementa notevolmente il momento di inerzia della sezione fessurata omogeneizzata.",
      "incrementa notevolmente il momento di inerzia della sezione interamente reagente omogeneizzata.",
      "non incrementa in modo sostanziale il momento di inerzia della sezione fessurata omogeneizzata.",
      "modifica grandemente la posizione del baricentro della sezione interamente reagente omogeneizzata."
     ],
     "correct": 0,
     "spiega": "Il rinforzo a flessione incrementa notevolmente il momento d'inerzia della sezione FESSURATA omogeneizzata (il rinforzo teso lavora dove il cls è fessurato)."
    },
    {
     "q": "Il rinforzo a flessione con materiali compositi di un elemento di un telaio di calcestruzzo armato",
     "opts": [
      "è particolarmente vantaggioso per incrementare il momento resistente delle sezioni estreme, soggette a momento flettente negativo, di una trave.",
      "è particolarmente vantaggioso per incrementare il momento resistente della sezione di mezzeria, soggetta a momento flettente positivo, di una trave.",
      "è particolarmente vantaggioso per incrementare il momento resistente della sezione di mezzeria di un pilastro.",
      "è particolarmente vantaggioso per incrementare il momento resistente delle sezioni estreme, di un pilastro."
     ],
     "correct": 1,
     "spiega": "Il rinforzo a flessione è particolarmente vantaggioso per la sezione di mezzeria (momento positivo) di una trave, dove il rinforzo all'intradosso è teso."
    },
    {
     "q": "Il rinforzo a flessione con materiali compositi di una sezione di calcestruzzo armato",
     "opts": [
      "può ridurre notevolmente la tensione nel calcestruzzo in esercizio.",
      "può ridurre notevolmente le deformazioni in esercizio.",
      "può incrementarne notevolmente il momento resistente di calcolo.",
      "può diminuire notevolmente la tensione nelle armature in esercizio."
     ],
     "correct": 2,
     "spiega": "Il rinforzo a flessione può incrementare notevolmente il momento resistente di calcolo (capacità ultima); in esercizio l'effetto è modesto."
    },
    {
     "q": "Il rinforzo a flessione con materiali compositi di una trave di calcestruzzo armato",
     "opts": [
      "di solito non ne modifica sostanzialmente la rigidezza finché le armature metalliche sono in fase elastica.",
      "di solito non ne modifica sostanzialmente la risposta flessionale per carichi superiori a quello che produce lo snervamento delle armature compresse.",
      "di solito ne incrementa sostanzialmente la rigidezza elastica.",
      "di solito non ne modifica sostanzialmente la risposta flessionale per carichi superiori a quello che produce lo snervamento delle armature tese."
     ],
     "correct": 0,
     "spiega": "Il rinforzo FRP all'intradosso aggiunge poca area: di solito NON modifica sostanzialmente la rigidezza finché le armature metalliche sono in fase elastica; agisce dopo lo snervamento (ramo incrudente)."
    },
    {
     "q": "Lo schema seguente rappresenta una trave di calcestruzzo armato soggetta ad un carico verticale rinforzata con materiali compositi (A e B). Siano MRdn e M Rdp i momenti resistenti di calcolo delle sezioni di estremità e di mezzeria, rispettivamente e siano MRdn0 e MRdp0 i momenti resistenti di calcolo delle sezioni di estremità e di mezzeria in assenza di rinforzo, rispettivamente. Escludendo un collasso per raggiungimento del taglio resistente di calcolo, si identifichi l’affermazione corretta tra le seguenti.",
     "opts": [
      "Il carico di collasso della trave è lo stesso che si avrebbe rinforzandola con i soli rinforzi A.",
      "Il carico di collasso della trave rinforzata è più grande del carico di collasso della trave non rinforzata in quanto, in modulo, MRdp>MRdp0 e MRdn>MRdn0.",
      "Il carico di collasso della trave è lo stesso che si avrebbe rinforzandola con il solo rinforzo B.",
      "Il carico di collasso della trave con i soli rinforzi A è più grande del carico di collasso della trave con il solo rinforzo B."
     ],
     "correct": 1,
     "spiega": "Il carico di collasso della trave rinforzata (A agli estremi, B in mezzeria) è maggiore perché in modulo MRdp>MRdp0 e MRdn>MRdn0 (entrambe le sezioni critiche rinforzate).",
     "img": [
      "fig_p071_077.png"
     ]
    },
    {
     "q": "Lo schema seguente rappresenta una trave di calcestruzzo armato soggetta ad un carico verticale. Per incrementarne il carico di collasso",
     "opts": [
      "è necessario disporre sia i rinforzi di materiale composito indicati con “A” che il rinforzo di materiale composito indicato con “B”.",
      "è sufficiente disporre i rinforzi di materiale composito indicati con “A”.",
      "è necessario disporre i rinforzi di materiale composito indicati con “A”.",
      "è sufficiente disporre il rinforzo di materiale composito indicato con “B”."
     ],
     "correct": 0,
     "spiega": "Per incrementare il carico di collasso di una trave iperstatica serve rinforzare TUTTE le sezioni critiche (sia A agli estremi sia B in mezzeria): meccanismo con cerniere in entrambe.",
     "img": [
      "fig_p072_078.png"
     ]
    },
    {
     "q": "Lo schema seguente rappresenta una trave di calcestruzzo armato rinforzata con materiali compositi ed il diagramma del momento flettente relativo ad una combinazione di carico allo stato limite ultimo. Può affermarsi che",
     "opts": [
      "i rinforzi “A” incrementano il momento resistente negativo delle sezioni estreme della trave mentre il rinforzo “B” incrementa il momento resistente positivo della sua sezione di mezzeria.",
      "il rinforzo “B” incrementa il momento resistente positivo della sezione di mezzeria grazie anche al contributo dei rinforzi “A”.",
      "il rinforzo \"B\" è inefficace se non è prolungato fino all’intersezione della trave con i pilastri.",
      "i rinforzi “A” non incrementano il momento resistente negativo delle sezioni estreme della trave mentre il rinforzo “B” incrementa il momento resistente positivo della sua sezione di mezzeria."
     ],
     "correct": 0,
     "spiega": "I rinforzi A (estradosso, estremi) incrementano il momento resistente negativo; il rinforzo B (intradosso, mezzeria) incrementa il momento resistente positivo.",
     "img": [
      "fig_p072_079.png"
     ]
    }
   ]
  },
  {
   "id": "047",
   "titolo": "Diagramma M-χ della sezione rinforzata",
   "domande": [
    {
     "q": "Nella figura seguente la curva (a) rappresenta il diagramma momento-curvatura di una sezione di calcestruzzo armato, mentre la curva (b) rappresenta il diagramma momento-curvatura della stessa sezione rinforzata a flessione con un materiale composito. Può affermarsi che",
     "opts": [
      "la pendenza del tratto CD dipende dalla dilatazione di delaminazione del rinforzo.",
      "il punto F rappresenta il massimo momento flettente occorso prima dell’applicazione del rinforzo.",
      "la pendenza del tratto FC dipende dalla dilatazione di delaminaione del rinforzo.",
      "la pendenza de tratto CD dipende dalla sezione di fibre nel rinforzo."
     ],
     "correct": 0,
     "spiega": "La pendenza del tratto CD (post-snervamento, sezione rinforzata) dipende dalla deformazione di delaminazione del rinforzo (limita il ramo finale).",
     "img": [
      "fig_p073_080.png"
     ]
    },
    {
     "q": "Per una sezione di calcestruzzo armato soggetta a flessione retta e rinforzata a flessione con FRP (rinforzi disposti al lembo teso) soggetta ad un momento flettente M inferiore al momento resistente",
     "opts": [
      "la deformazione delle fibre è sempre superiore alla deformazione delle armature tese.",
      "la deformazione delle fibre è sempre inferiore alla deformazione delle armature tese.",
      "la deformazione delle fibre è sempre inferiore alla deformazione di snervamento delle armature tese.",
      "nessuna delle altre opzioni è corretta."
     ],
     "correct": 1,
     "spiega": "Per M<MRd la deformazione efficace delle fibre è inferiore a quella delle armature tese: al rinforzo va sottratta la deformazione preesistente ε0 (applicato a struttura già caricata)."
    },
    {
     "q": "Secondo l’approccio della linea guida CNR DT200-2013, nel caso di rinforzo a flessione con FRP di una trave di calcestruzzo armato, le proprietà di calcolo dei materiali esistenti si valutano a partire",
     "opts": [
      "dai valori medi considerando i fattori di confidenza.",
      "dai valori caratteristici considerando i coefficienti parziali di sicurezza.",
      "dai valori medi considerando i coefficienti parziali di sicurezza.",
      "dai valori caratteristici considerando i fattori di confidenza."
     ],
     "correct": 0,
     "spiega": "Per i materiali ESISTENTI le proprietà di calcolo si ottengono dai valori MEDI (da prove) divisi per il fattore di confidenza FC (e per il coefficiente parziale)."
    },
    {
     "q": "Secondo l’approccio della linea guida CNR DT200-2013, nel caso di rinforzo a flessione con FRP di una trave di calcestruzzo armato",
     "opts": [
      "la deformazione del rinforzo alla quale si ha la delaminazione intermedia è uguale della deformazione del rinforzo alla quale si ha la delaminazione di estremità.",
      "non c’è nessuna relazione tra la deformazione del rinforzo alla quale si ha la delaminazione intermedia e la deformazione del rinforzo alla quale si ha la delaminazione di estremità.",
      "la deformazione del rinforzo alla quale si ha la delaminazione intermedia è più piccola della deformazione del rinforzo alla quale si ha la delaminazione di estremità.",
      "la deformazione del rinforzo alla quale si ha la delaminazione intermedia è più grande della deformazione del rinforzo alla quale si ha la delaminazione di estremità."
     ],
     "correct": 3,
     "spiega": "La deformazione del rinforzo alla delaminazione INTERMEDIA è più grande di quella alla delaminazione di ESTREMITÀ (le fessure flessionali in zona di momento massimo innescano il distacco a deformazioni elevate)."
    },
    {
     "q": "La differenza di deformazione tra un rinforzo flessionale di materiale composito e la superficie di calcestruzzo sulla quale è incollato",
     "opts": [
      "si valuta sempre con riferimento alla sezione non fessurata.",
      "si valuta sempre con riferimento alla sezione fessurata.",
      "si valuta con riferimento alla sezione fessurata se il momento agente durante le operazioni di incollaggio è più grande del momento di fessurazione; in caso contrario si valuta con riferimento alla sezione non fessurata.",
      "valuta con riferimento alla sezione non fessurata se il momento agente durante le operazioni di incollaggio è più grande del momento di fessurazione; in caso contrario si valuta con riferimento alla sezione fessurata."
     ],
     "correct": 2,
     "spiega": "La differenza di deformazione (preesistente) si valuta con riferimento alla sezione fessurata se il momento durante l'incollaggio supera il momento di fessurazione; altrimenti sezione non fessurata."
    },
    {
     "q": "La differenza di deformazione tra un rinforzo flessionale di materiale composito e la superficie di calcestruzzo sulla quale è incollato",
     "opts": [
      "si valuta con riferimento alla struttura non rinforzata sulla quale agiscono i carichi effettivamente presenti durante le operazioni di incollaggio.",
      "si valuta con riferimento al carico caratteristico.",
      "si valuta sempre con riferimento ad una combinazione di carico di esercizio.",
      "si valuta con riferimento al massimo carico che ha agito sulla struttura dalla sua costruzione alla realizzazione delle operazioni di incollaggio."
     ],
     "correct": 0,
     "spiega": "La differenza di deformazione si valuta sulla struttura NON rinforzata con i carichi effettivamente presenti durante l'incollaggio (deformazione preesistente ε0)."
    },
    {
     "q": "Per una trave di calcestruzzo armato rinforzata a flessione con FRP",
     "opts": [
      "la risposta strutturale si modifica solo per carichi inferiori a quello che produce la fessurazione del calcestruzzo.",
      "la risposta strutturale si modifica solo per carichi inferiori a quello agente sulla trave all’atto dell’applicazione del rinforzo.",
      "la risposta strutturale si modifica solo per carichi superiori a quello agente sulla trave all’atto dell’applicazione del rinforzo.",
      "la risposta strutturale si modifica solo per carichi inferiori a quello che produce lo snervamento delle armature tese."
     ],
     "correct": 2,
     "spiega": "La risposta strutturale si modifica solo per carichi SUPERIORI a quello agente all'atto dell'applicazione del rinforzo (il rinforzo lavora solo per gli incrementi di carico successivi)."
    },
    {
     "q": "Nel calcolo flessionale di una sezione di calcestruzzo armato rinforzata a flessione con FRP",
     "opts": [
      "si ipotizza che la differenza tra la deformazione del rinforzo e quella della superficie sulla quale il rinforzo sia nulla.",
      "si ipotizza che la differenza tra la deformazione del rinforzo e quella della superficie sulla quale il rinforzo è incollato aumenti linearmente all’aumentare del momento flettente.",
      "si ipotizza che la differenza tra la deformazione del rinforzo e quella della superficie sulla quale il rinforzo è incollato diminuisca linearmente all’aumentare del momento flettente.",
      "si ipotizza che la differenza tra la deformazione del rinforzo e quella della superficie sulla quale il rinforzo è incollato si mantenga costante all’aumentare del momento flettente."
     ],
     "correct": 3,
     "spiega": "Si ipotizza che la differenza di deformazione tra rinforzo e superficie (ε0 preesistente) si mantenga COSTANTE all'aumentare del momento flettente."
    },
    {
     "q": "In generale, per una sezione di calcestruzzo armato rinforzata a flessione",
     "opts": [
      "si raggiunge il distacco del rinforzo dal calcestruzzo prima dello snervamento delle armature metalliche.",
      "il momento ultimo e la curvatura ultima della sezione aumentano all’aumentare della sezione di rinforzo.",
      "il momento ultimo aumenta all'aumentare della sezione di rinforzo, mentre la rigidezza flessionale diminuisce.",
      "il momento ultimo aumenta all'aumentare della sezione di rinforzo, mentre la curvatura ultima diminuisce all'aumentare della sezione di rinforzo."
     ],
     "correct": 3,
     "spiega": "All'aumentare della sezione di rinforzo: il momento ultimo aumenta ma la curvatura ultima diminuisce (la sezione diventa meno duttile, più sovra-rinforzata)."
    }
   ]
  },
  {
   "id": "048",
   "titolo": "Momento resistente sezione rinforzata FRP",
   "domande": [
    {
     "q": "Per una sezione rinforzata a flessione con un materiale composito FRP le condizioni da imporre per determinare il momento resistente di calcolo sono",
     "opts": [
      "raggiungimento della deformazione ultima del calcestruzzo compresso e raggiungimento della deformazione di fessurazione del calcestruzzo teso.",
      "raggiungimento della deformazione ultima del calcestruzzo compresso e raggiungimento della deformazione di rottura delle armature metalliche.",
      "raggiungimento della deformazione ultima del calcestruzzo compresso e raggiungimento della deformazione di snervamento delle armature metalliche.",
      "raggiungimento della deformazione ultima del calcestruzzo compresso e raggiungimento della deformazione di delaminazione del rinforzo."
     ],
     "correct": 3,
     "spiega": "Le condizioni per MRd di una sezione rinforzata FRP: raggiungimento della deformazione ultima del cls compresso OPPURE della deformazione di delaminazione del rinforzo (il primo che si verifica)."
    },
    {
     "q": "Secondo l’approccio della linea guida CNR DT200-2013, nel caso di rinforzo a flessione con FRP di una trave di calcestruzzo armato",
     "opts": [
      "la verifica nei confronti della delaminazione di estremità si conduce con riferimento al momento flettente all’estremo della trave.",
      "a favore di sicurezza la verifica nei confronti della delaminazione di estremità si conduce con riferimento al diagramma del momento non traslato.",
      "la verifica nei confronti della delaminazione di estremità si conduce con riferimento al momento flettente massimo.",
      "la verifica nei confronti della delaminazione di estremità si conduce con riferimento al diagramma del momento traslato per effetto delle fessure inclinate nel calcestruzzo."
     ],
     "correct": 3,
     "spiega": "La verifica della delaminazione di estremità si conduce sul diagramma del momento TRASLATO (per effetto delle fessure inclinate da taglio nel calcestruzzo)."
    },
    {
     "q": "La figura seguente rappresenta una sezione di calcestruzzo armato rinforzata con un composito FRP incollato all’intradosso ed un diagramma delle deformazioni. Volendo determinare il momento resistente di calcolo della sezione rinforzata",
     "opts": [
      "si deve imporre che la deformazione εst sia superiore alla deformazione di snervamento di calcolo dell’acciaio se l’acciaio si considera elastico perfettamente plastico.",
      "si deve imporre che la deformazione ε0 sia uguale alla deformazione di fessurazione del calcestruzzo.",
      "di deve imporre che la deformazione εf sia uguale alla deformazione di delaminazione del rinforzo e controllare che la deformazione εcc non superi la deformazione di rottura per compressione del calcestruzzo.",
      "si deve imporre che la deformazione εcc sia uguale alla deformazione di rottura per compressione del calcestruzzo se l’acciaio si considera elastico perfettamente plastico."
     ],
     "correct": 2,
     "spiega": "Per MRd della sezione rinforzata si impone εf = deformazione di delaminazione del rinforzo, controllando che εcc non superi la deformazione ultima a compressione del cls (la crisi lato teso è governata dal distacco del FRP).",
     "img": [
      "fig_p075_081.png"
     ]
    },
    {
     "q": "Per una sezione rinforzata a flessione con un materiale composito FRP",
     "opts": [
      "la rottura lato teso si ha per il raggiungimento della deformazione di delaminazione del rinforzo in quanto questa è più grande della deformazione ultima delle armature metalliche.",
      "la rottura lato teso si ha per il raggiungimento della deformazione di delaminazione del rinforzo in quanto questa è più piccola della deformazione ultima delle armature metalliche.",
      "la rottura lato teso si ha per il raggiungimento della deformazione di fessurazione del calcestruzzo in quanto la fessurazione del calcestruzzo produce la delaminazione del rinforzo.",
      "la rottura lato teso si ha per il raggiungimento della deformazione ultima delle armature metalliche in quanto questa è più grande della deformazione di delaminazione del rinforzo."
     ],
     "correct": 1,
     "spiega": "La rottura lato teso si ha per raggiungimento della deformazione di delaminazione del rinforzo, in quanto questa è più piccola della deformazione ultima delle armature metalliche (il FRP si stacca prima che l'acciaio arrivi a rottura)."
    },
    {
     "q": "Secondo l’approccio della linea guida CNR DT200-2013, nel caso di rinforzo a flessione con FRP di una trave di calcestruzzo armato",
     "opts": [
      "la deformazione di delaminazione di estremità è, a meno dei coefficienti di sicurezza, uguale alla deformazione di delaminazione intermedia se la lunghezza di ancoraggio è inferiore alla lunghezza di trasferimento efficace.",
      "la deformazione di delaminazione di estremità è superiore alla deformazione di delaminazione intermedia se la lunghezza di ancoraggio è superiore alla lunghezza di trasferimento efficace.",
      "la deformazione di delaminazione di estremità è, a meno dei coefficienti di sicurezza, uguale alla deformazione di delaminazione intermedia se la lunghezza di ancoraggio è superiore alla lunghezza di trasferimento efficace.",
      "la deformazione di delaminazione di estremità è, a meno dei coefficienti di sicurezza, la dilatazione di delaminazione che si ottiene con prove tipo single-lap shear test."
     ],
     "correct": 2,
     "spiega": "La deformazione di delaminazione di estremità è, a meno dei coefficienti di sicurezza, uguale a quella intermedia se la lunghezza di ancoraggio è superiore alla Leff (entrambe governate dalla stessa energia di frattura)."
    },
    {
     "q": "La figura seguente rappresenta una sezione di calcestruzzo armato rinforzata con un composito FRP incollato all’intradosso ed un diagramma delle deformazioni. Volendo determinare il momento resistente di calcolo della sezione rinforzata",
     "opts": [
      "si può sempre prescindere dal calcolo della deformazione di delaminazione intermedia.",
      "si deve imporre che deformazione del rinforzo sia uguale alla sua deformazione di rottura di calcolo.",
      "si può, con buona approssimazione, considerare nulla la deformazione ε0 dell’intradosso all’atto dell’applicazione del rinforzo.",
      "si può prescindere dalla presenza delle armature tese."
     ],
     "correct": 1,
     "spiega": "Per MRd si impone che la deformazione del rinforzo sia uguale alla deformazione di delaminazione di calcolo (limite di distacco), non alla rottura del FRP. (rivedere tra opz 1 e altre).",
     "img": [
      "fig_p076_082.png"
     ]
    },
    {
     "q": "Per una trave rinforzata a flessione con materiale composito, la verifica nei confronti della delaminazione di estremità",
     "opts": [
      "viene condotta considerando un momento flettente superiore a quello che deriva dall’analisi strutturale.",
      "viene condotta considerando il momento flettente che deriva dall’analisi strutturale.",
      "viene condotta considerando il momento flettente agente nella sezione all’estremo del rinforzo.",
      "viene condotta solo se il rinforzo si estende fino all’estremità della trave."
     ],
     "correct": 0,
     "spiega": "La verifica della delaminazione di estremità si conduce considerando un momento flettente superiore a quello dell'analisi (diagramma traslato per le fessure inclinate da taglio)."
    }
   ]
  },
  {
   "id": "049",
   "titolo": "Tensioni in esercizio (sezione rinforzata)",
   "domande": [
    {
     "q": "Per il calcolo delle tensioni in esercizio di una sezione di calcestruzzo armato inflessa rinforzata con FRP",
     "opts": [
      "non può usarsi la formula di Navier con il momento di inerzia della sezione fessurata rinforzata a causa del fatto che il composito è, in generale, soggetto ad una deformazione inferiore a quella della superficie sulla quale è incollato.",
      "può usarsi la formula di Navier con il momento di inerzia della sezione non fessurata rinforzata in quanto il composito è, in generale, soggetto ad una deformazione inferiore a quella della superficie sulla quale è incollato.",
      "può usarsi la formula di Navier con il momento di inerzia della sezione fessurata rinforzata in quanto il composito è, in generale, soggetto ad una deformazione inferiore a quella della superficie sulla quale è incollato.",
      "non può usarsi la formula di Navier con il momento di inerzia della sezione fessurata rinforzata a causa del fatto che il composito è, in generale, soggetto ad una deformazione superiore a quella della superficie sulla quale è incollato."
     ],
     "correct": 0,
     "spiega": "Non si può usare Navier con I della sezione fessurata rinforzata, perché il composito ha deformazione INFERIORE a quella della superficie su cui è incollato (deformazione preesistente ε0): la distribuzione non è lineare sul composito."
    },
    {
     "q": "Per il calcolo delle tensioni in esercizio di una sezione di calcestruzzo armato inflessa rinforzata con FRP, secondo l’approccio della linea guida CNR DT200-2013",
     "opts": [
      "si calcolano le tensioni considerando il momento flettente agente ed il momento di inerzia della sezione fessurata non rinforzata.",
      "si calcolano le tensioni considerando il momento flettente agente ed il momento di inerzia della sezione fessurata rinforzata.",
      "si sommano le tensioni prodotte dal carico agente durante l’applicazione del rinforzo alle tensioni prodotte da ulteriori incrementi di carico.",
      "si calcolano le tensioni considerando il momento flettente agente ed il momento di inerzia della sezione non fessurata rinforzata."
     ],
     "correct": 2,
     "spiega": "Si sommano le tensioni prodotte dal carico presente all'atto dell'applicazione del rinforzo (su sezione non rinforzata) alle tensioni dovute agli incrementi di carico successivi (su sezione rinforzata): sovrapposizione per fasi."
    },
    {
     "q": "Per una sezione di calcestruzzo armato rinforzata a flessione con un materiale composito FRP, il calcolo delle tensioni in esercizio",
     "opts": [
      "può, di solito, essere implementato considerando legami costitutivi lineari per tutti i materiali ed il calcestruzzo non resistente a trazione.",
      "può, di solito, essere implementato considerando legami costitutivi lineari per tutti i materiali tranne l’acciaio teso che si considera snervato.",
      "deve essere implementato considerando il calcestruzzo resistente a trazione se il momento flettente è inferiore al momento di fessurazione del calcestruzzo.",
      "può, di solito, essere implementato considerando legami costitutivi lineari per tutti i materiali ed il calcestruzzo non fessurato."
     ],
     "correct": 0,
     "spiega": "Il calcolo delle tensioni in esercizio si implementa con legami costitutivi lineari per tutti i materiali e calcestruzzo non resistente a trazione (fase elastica fessurata)."
    }
   ]
  },
  {
   "id": "051",
   "titolo": "Influenza della deformazione preesistente",
   "domande": [
    {
     "q": "La differenza di deformazione tra un rinforzo flessionale di materiale composito e la superficie di calcestruzzo sulla quale è incollato",
     "opts": [
      "ha una notevole influenza sul momento resistente di calcolo mentre ha modesta influenza sulle tensioni in esercizio dell’acciaio e del calcestruzzo.",
      "ha una modesta influenza sia sul momento resistente di calcolo che sulle tensioni in esercizio dell’acciaio e del calcestruzzo.",
      "ha una modesta influenza sul momento resistente di calcolo mentre ha notevole influenza sulle tensioni in esercizio dell’acciaio e del calcestruzzo.",
      "ha una notevole influenza sia sul momento resistente di calcolo che sulle tensioni in esercizio dell’acciaio e del calcestruzzo."
     ],
     "correct": 2,
     "spiega": "La differenza di deformazione (ε0 preesistente) ha modesta influenza sul momento resistente di calcolo (allo SLU domina la delaminazione), ma notevole influenza sulle tensioni in esercizio di acciaio e calcestruzzo."
    }
   ]
  },
  {
   "id": "052",
   "titolo": "Rinforzo a taglio con FRP",
   "domande": [
    {
     "q": "Il taglio-trazione associato alle staffe ed il taglio-compressione associato al calcestruzzo per un elemento di calcestruzzo armato rinforzato a taglio con un composito FRP, secondo l’approccio della linea guida CNR DT-200 - 2013",
     "opts": [
      "si valutano applicando ai valori medi delle proprietà meccaniche di calcestruzzo ed acciaio i fattori di confidenza e considerando unitari i coefficienti parziali di sicurezza.",
      "si valutano applicando ai valori medi delle proprietà meccaniche di calcestruzzo ed acciaio i coefficienti parziali di sicurezza ed i fattori di confidenza.",
      "si valutano applicando i coefficienti parziali di sicurezza alle proprietà caratteristiche del calcestruzzo e dell’acciaio.",
      "si valutano applicando ai valori medi delle proprietà meccaniche di calcestruzzo ed acciaio i coefficienti parziali di sicurezza, considerando unitari i fattori di confidenza."
     ],
     "correct": 1,
     "spiega": "Per un elemento ESISTENTE rinforzato, taglio-trazione e taglio-compressione si valutano applicando ai valori MEDI delle proprietà sia i coefficienti parziali di sicurezza sia i fattori di confidenza: f_d = f_media/(FC·γ)."
    },
    {
     "q": "Il taglio resistente di calcolo di un elemento di calcestruzzo armato rinforzato a taglio con un composito FRP, secondo l’approccio della linea guida CNR DT-200 - 2013",
     "opts": [
      "si valuta con riferimento alla deformazione di delaminazione di estremità del rinforzo, in assenza di connettori.",
      "si valuta con riferimento alla deformazione di delaminazione intermedia del rinforzo, in assenza di connettori.",
      "si valuta sempre con riferimento alla resistenza a trazione delle fibre che costituiscono il composito.",
      "non dipende dalle caratteristiche meccaniche del calcestruzzo di supporto."
     ],
     "correct": 1,
     "spiega": "Il taglio resistente del rinforzo FRP si valuta con riferimento alla deformazione di delaminazione INTERMEDIA del rinforzo, in assenza di connettori."
    },
    {
     "q": "Il taglio resistente di calcolo di un elemento di calcestruzzo armato rinforzato a taglio con un composito FRP, secondo l’approccio della linea guida CNR DT-200 - 2013",
     "opts": [
      "si valuta sotto l’ipotesi di conservazione delle sezioni piane.",
      "si valuta con il modello del traliccio di Mörsch, relativamente al quale il rinforzo contribuisce al taglio-trazione.",
      "si valuta con il modello del traliccio di Mörsch, relativamente al quale il rinforzo contribuisce al taglio-compressione.",
      "si valuta con il modello del traliccio di Mörsch solo se i rinforzi hanno le fibre ortogonali rispetto all’asse dell’elemento."
     ],
     "correct": 1,
     "spiega": "Il taglio resistente si valuta con il traliccio di Mörsch, in cui il rinforzo FRP contribuisce al taglio-TRAZIONE (come le staffe, lavora a trazione)."
    },
    {
     "q": "Il taglio trazione per un elemento di calcestruzzo armato rinforzato a taglio con un composito FRP, secondo l’approccio della linea guida CNR DT-200 - 2013",
     "opts": [
      "si valuta sommando il taglio-trazione associato alle staffe al taglio-compressione associato al calcestruzzo.",
      "si valuta sommando il taglio-trazione associato alle staffe a quello associato ai rinforzi, indipendentemente dalla inclinazione delle staffe e delle fibre.",
      "si valuta sommando il taglio-trazione associato alle staffe a quello associato ai rinforzi solo se le staffe e le fibre hanno la stessa inclinazione.",
      "si valuta sommando il taglio-trazione associato al rinforzo al taglio-compressione associato al calcestruzzo."
     ],
     "correct": 1,
     "spiega": "Il taglio-trazione si valuta sommando il contributo delle staffe a quello dei rinforzi, indipendentemente dall'inclinazione di staffe e fibre (contributi additivi nel traliccio, ciascuno con la propria inclinazione)."
    }
   ]
  },
  {
   "id": "053",
   "titolo": "Taglio-trazione del rinforzo",
   "domande": [
    {
     "q": "Per un elemento di calcestruzzo armato rinforzato a taglio con un composito FRP, secondo l’approccio della linea guida CNR DT-200 – 2013, il taglio-trazione di calcolo associato al rinforzo, in assenza di connettori",
     "opts": [
      "non dipende dalla lunghezza di trasferimento efficace del rinforzo.",
      "diminuisce all'aumentare della lunghezza di trasferimento efficace del rinforzo.",
      "aumenta all'aumentare della lunghezza di trasferimento efficace del rinforzo solo se i rinforzi sono ortogonali alleasse dell’elemento.",
      "aumenta sempre all'aumentare della lunghezza di trasferimento efficace del rinforzo."
     ],
     "correct": 1,
     "spiega": "Il taglio-trazione del rinforzo (senza connettori) diminuisce all'aumentare della lunghezza di trasferimento efficace Leff (Leff più grande → minore deformazione efficace di delaminazione → minore contributo)."
    },
    {
     "q": "Il taglio-trazione associato al rinforzo per un elemento di calcestruzzo armato rinforzato a taglio con un composito FRP, secondo l’approccio della linea guida CNR DT-200 - 2013",
     "opts": [
      "non dipende dal modulo elastico del rinforzo in quanto dipende dalla forza di delaminazione.",
      "raddoppia al raddoppiare del modulo elastico del rinforzo.",
      "diminuisce all’aumentare del modulo elastico del rinforzo.",
      "aumenta all’aumentare del modulo elastico del rinforzo."
     ],
     "correct": 3,
     "spiega": "Il taglio-trazione associato al rinforzo aumenta all'aumentare del modulo elastico Ef del rinforzo (la forza di delaminazione cresce con la rigidezza assiale)."
    },
    {
     "q": "Con riferimento allo schema seguente, per un elemento di calcestruzzo armato rinforzato a taglio con un composito FRP",
     "opts": [
      "il taglio trazione non dipende dell’inclinazione     delle bielle compresse.",
      "il taglio trazione associato al rinforzo ed il taglio trazione associato alle staffe aumentano all'aumentare dell’inclinazione      delle bielle compresse mentre il taglio-compressione diminuisce.",
      "il taglio trazione associato al rinforzo ed il taglio trazione associato alle staffe diminuiscono all’aumentare dell’inclinazione      delle bielle compresse mentre il taglio-compressione aumenta.",
      "il taglio trazione associato al rinforzo aumenta all'aumentare dell’inclinazione     delle bielle compresse, mentre il taglio-compressione ed il taglio trazione associato alle staffe diminuiscono."
     ],
     "correct": 1,
     "spiega": "Aumentando l'inclinazione θ delle bielle compresse: i tagli-trazione (staffe e rinforzo) aumentano mentre il taglio-compressione diminuisce.",
     "img": [
      "fig_p083_089.png"
     ]
    },
    {
     "q": "Con riferimento allo schema seguente può affermarsi che il taglio-trazione",
     "opts": [
      "non dipende dalla lunghezza di trasferimento efficace del rinforzo.",
      "diminuisce all’aumentare della lunghezza di trasferimento efficace del rinforzo.",
      "aumenta all’aumentare della lunghezza di trasferimento efficace del rinforzo.",
      "dipende dalla lunghezza di trasferimento efficace solo se le fasce di rinforzo non sono ortogonali all’asse dell’elemento (β = 90°)."
     ],
     "correct": 1,
     "spiega": "Il taglio-trazione del rinforzo diminuisce all'aumentare della lunghezza di trasferimento efficace Leff.",
     "img": [
      "fig_p084_090.png"
     ]
    }
   ]
  },
  {
   "id": "054",
   "titolo": "Confinamento del calcestruzzo",
   "domande": [
    {
     "q": "La rottura di un elemento monodimensionale di calcestruzzo confinato con un materiale composito e soggetto a compressione",
     "opts": [
      "avviene al formarsi delle prime fessure longitudinali.",
      "avviene a causa della rottura del materiale composito confinante.",
      "avviene per eccessiva fessurazione del calcestruzzo.",
      "avviene appena si snervano le staffe."
     ],
     "correct": 1,
     "spiega": "La rottura di un elemento confinato con FRP a compressione avviene a causa della rottura del materiale composito confinante (raggiunta la deformazione ultima del FRP, cessa il confinamento)."
    },
    {
     "q": "Si identifichi l’affermazione corretta tra le seguenti relative ad un cilindro di calcestruzzo confinato soggetto a sforzo normale centrato di compressione.",
     "opts": [
      "Il confinamento limita le deformazioni trasversali del calcestruzzo compresso.",
      "Il confinamento conferisce al calcestruzzo un notevole incremento di rigidezza.",
      "Il confinamento limita le deformazioni longitudinali del calcestruzzo compresso.",
      "Nessuna delle altre affermazioni è corretta."
     ],
     "correct": 0,
     "spiega": "Il confinamento limita le deformazioni TRASVERSALI (dilatazione laterale) del calcestruzzo compresso, ritardando la fessurazione e aumentando resistenza e duttilità."
    },
    {
     "q": "Si identifichi l’affermazione corretta tra le seguenti.",
     "opts": [
      "Il confinamento conferisce al calcestruzzo compresso un incremento di capacità deformativa.",
      "Il confinamento conferisce al calcestruzzo compresso un incremento di resistenza a trazione.",
      "Nessuna delle altre affermazioni è corretta.",
      "Il confinamento conferisce al calcestruzzo compresso un incremento di rigidezza."
     ],
     "correct": 0,
     "spiega": "Il confinamento conferisce al calcestruzzo compresso un incremento di capacità deformativa (duttilità) e di resistenza; non incrementa rigidezza né resistenza a trazione."
    }
   ]
  },
  {
   "id": "055",
   "titolo": "Confinamento secondo Mander",
   "domande": [
    {
     "q": "Secondo l’approccio di Mander (1988)",
     "opts": [
      "la resistenza a compressione del calcestruzzo confinato si determina in funzione di due tensioni trasversali di confinamento che possono essere diverse tra loro.",
      "la resistenza a compressione del calcestruzzo confinato si determina in funzione della minima tensione trasversale di confinamento.",
      "la resistenza a compressione del calcestruzzo confinato si determina in funzione della massima tensione trasversale di confinamento.",
      "la resistenza a compressione del calcestruzzo confinato si determina in funzione di una tensione di confinamento media."
     ],
     "correct": 0,
     "spiega": "Secondo Mander (1988) la resistenza del cls confinato si determina in funzione di due tensioni trasversali di confinamento (fl1, fl2) che possono essere diverse tra loro (confinamento non uniforme)."
    },
    {
     "q": "Per un elemento di sezione circolare confinato in modo continuo con un materiale composito",
     "opts": [
      "la tensione di confinamento è la stessa su ogni giacitura parallela all’asse longitudinale ed in ogni punto dell’elemento.",
      "la pressione di confinamento è minima sulle giaciture contenenti i diametri della sezione.",
      "la tensione di confinamento è massima sulle giaciture contenenti l’asse dell’elemento.",
      "la tensione di confinamento è massima sulle giaciture contenenti i diametri della sezione."
     ],
     "correct": 0,
     "spiega": "Per sezione circolare confinata in modo continuo, la tensione di confinamento è la stessa su ogni giacitura parallela all'asse e in ogni punto (confinamento uniforme, simmetria assiale)."
    },
    {
     "q": "Per un elemento di sezione rettangolare confinato in modo continuo con un materiale composito",
     "opts": [
      "la tensione di confinamento è massima sulle facce dell’elemento.",
      "la tensione di confinamento è massima in corrispondenza del baricentro della sezione.",
      "la tensione di confinamento è massima nelle vicinanze degli spigoli ed è tanto maggiore quanto più il raggio dello smusso dello spigolo è piccolo.",
      "la tensione di confinamento è massima nelle vicinanze degli spigoli ed è tanto maggiore quanto più il raggio dello smusso dello spigolo è grande."
     ],
     "correct": 2,
     "spiega": "Per sezione rettangolare, la tensione di confinamento è massima vicino agli spigoli ed è tanto maggiore quanto più piccolo è il raggio di arrotondamento dello spigolo (effetto arco)."
    }
   ]
  },
  {
   "id": "057",
   "titolo": "Confinamento (CNR DT200-2013)",
   "domande": [
    {
     "q": "Secondo l’approccio della linea guida CNR DT200-2013",
     "opts": [
      "la deformazione ultima a compressione del calcestruzzo confinato aumenta proporzionalmente alla tensione di confinamento efficace.",
      "la resistenza a compressione del calcestruzzo confinato aumenta proporzionalmente alla sezione del rinforzo.",
      "la rigidezza del calcestruzzo confinato aumenta proporzionalmente alla tensione di confinamento efficace.",
      "la pressione di confinamento aumenta proporzionalmente alla sezione di rinforzo."
     ],
     "correct": 0,
     "spiega": "Secondo CNR DT200, la deformazione ultima a compressione del calcestruzzo confinato aumenta proporzionalmente alla tensione di confinamento efficace."
    }
   ]
  },
  {
   "id": "058",
   "titolo": "Momento resistente sezione confinata",
   "domande": [
    {
     "q": "Il momento resistente di calcolo di una sezione di calcestruzzo armato confinata con un materiale composito",
     "opts": [
      "si determina considerando la tensione di confinamento associata alla tensione di rottura del composito.",
      "si determina considerando che il composito è applicato quando la sezione è compressa.",
      "si determina come per una sezione non confinata sostituendo al legame costitutivo del calcestruzzo non confinato quello del calcestruzzo confinato.",
      "nessuna delle altre affermazioni è corretta."
     ],
     "correct": 2,
     "spiega": "Il momento resistente di una sezione confinata si determina come per la sezione non confinata, sostituendo al legame del cls non confinato quello del calcestruzzo confinato (più resistente e duttile)."
    },
    {
     "q": "Secondo l’approccio della linea guida CNR DT200 2013 il legame costitutivo del calcestruzzo confinato",
     "opts": [
      "è costituito da un tratto parabolico seguito da un tratto la cui pendenza costante dipende dalla sezione delle fibre del materiale composito confinante.",
      "è costituito da un tratto parabolico seguito da un tratto la cui pendenza costante dipende dalla sezione delle armature longitudinali.",
      "è costituito da un tratto parabolico seguito da un tratto la cui pendenza non è costante e dipende dalla tensione di confinamento durante il processo di carico.",
      "nessuna delle altre affermazioni è corretta."
     ],
     "correct": 0,
     "spiega": "Il legame del cls confinato (CNR DT200) è un tratto parabolico seguito da un tratto a pendenza costante che dipende dalla sezione delle fibre del composito confinante."
    },
    {
     "q": "Secondo l’approccio della linea guida CNR DT200 2013, nel caso di confinamento con FRP di un elemento compresso di calcestruzzo, a parità di sezione delle fibre",
     "opts": [
      "l’incremento di resistenza a compressione o aumenta all’aumentare delle dimensioni della sezione.",
      "l’incremento di resistenza a compressione non dipende dalle dimensioni della sezione.",
      "l’incremento di deformazione ultima aumenta all’aumentare delle dimensioni della sezione.",
      "l’incremento di resistenza a compressione diminuisce all’aumentare delle dimensioni della sezione."
     ],
     "correct": 3,
     "spiega": "A parità di sezione delle fibre, l'incremento di resistenza a compressione DIMINUISCE all'aumentare delle dimensioni della sezione (la pressione di confinamento fl=2·Ef·tf·εf/D cala con D)."
    },
    {
     "q": "L’effetto del confinamento sul legame momento-curvatura di un concio di calcestruzzo armato",
     "opts": [
      "è molto più evidente in termini di incremento di resistenza flessionale che di incremento di capacità deformativa se lo sforzo normale agente è nullo.",
      "è molto più evidente in termini di incremento di capacità deformativa che di incremento di resistenza flessionale, a meno che lo sforzo normale di trazione agente non sia molto elevato.",
      "è molto più evidente in termini di incremento di capacità deformativa che di incremento di resistenza flessionale, a meno che lo sforzo normale di compressione agente non sia molto elevato.",
      "è molto più evidente in termini di incremento di capacità deformativa che di incremento di resistenza flessionale solo se lo sforzo normale agente è nullo."
     ],
     "correct": 2,
     "spiega": "L'effetto del confinamento sul legame M-χ è molto più evidente come incremento di capacità deformativa che di resistenza flessionale, salvo che lo sforzo normale di compressione sia molto elevato (allora cresce anche MRd)."
    }
   ]
  },
  {
   "id": "059",
   "titolo": "Confinamento e gerarchia delle resistenze",
   "domande": [
    {
     "q": "Si identifichi l’affermazione corretta tra le seguenti, relative al confinamento del calcestruzzo",
     "opts": [
      "di solito il confinamento delle zone terminali di un pilastro produce un sensibile incremento di capacità di rotazione rispetto alla corda ed un sensibile incremento di momento resistente.",
      "di solito il confinamento delle zone terminali di un pilastro produce un sensibile incremento di capacità di rotazione rispetto alla corda ma un piccolo incremento di momento agente.",
      "di solito il confinamento delle zone terminali di un pilastro produce un sensibile incremento di capacità di rotazione rispetto alla corda ma un trascurabile incremento di momento resistente.",
      "di solito il confinamento delle zone terminali di un pilastro produce un sensibile incremento di rotazione rispetto alla corda sotto assegnati carichi sismici ma un piccolo incremento di momento resistente."
     ],
     "correct": 2,
     "spiega": "Il confinamento delle zone terminali di un pilastro produce un sensibile incremento di capacità di rotazione rispetto alla corda (duttilità) ma un trascurabile incremento di momento resistente."
    },
    {
     "q": "Con riferimento allo schema seguente si identifichi l’affermazione corretta tra le seguenti, relative al confinamento del calcestruzzo",
     "opts": [
      "il confinamento di un pilastro produce anche un incremento della sua resistenza a taglio in quanto le fibre sono trasversali.",
      "la configurazione di rinforzo di figura non modifica la gerarchia delle resistenze rispetto a quella che caratterizza lo stesso elemento non rinforzato.",
      "il confinamento di un pilastro produce anche un incremento di resistenza a taglio solo se le fibre sono inclinate di 45° rispetto all’asse dell’elemento.",
      "il confinamento di un pilastro non produce anche un incremento di resistenza a taglio in quanto i rinforzi a taglio devono avere le fibre longitudinali."
     ],
     "correct": 0,
     "spiega": "Il confinamento di un pilastro con fibre trasversali (orizzontali, cerchianti) produce anche un incremento di resistenza a taglio, poiché le fibre trasversali lavorano come staffe aggiuntive.",
     "img": [
      "fig_p090_092.png"
     ]
    },
    {
     "q": "Lo schema seguente rappresenta un pilastro rinforzato con materiale compositi con le fibre orizzontali. Si identifichi l’affermazione corretta tra le seguenti supponendo che la struttura di cui il pilastro fa parte sia soggetta ad un’azione sismica.",
     "opts": [
      "La configurazione di rinforzo di figura certamente non modifica la gerarchia delle resistenze (flessione/taglio) rispetto a quella che caratterizza lo stesso elemento non rinforzato in quanto il momento resistente delle sezioni di estremità non si modifica sostanzialmente con il rinforzo.",
      "Se, in assenza di rinforzo, il collasso del pilastro avviene per flessione la configurazione di rinforzo di figura modifica la gerarchia delle resistenze (flessione/taglio) rispetto a quella che caratterizza lo stesso elemento non rinforzato.",
      "Se, in assenza di rinforzo, il collasso del pilastro avviene per taglio la configurazione di rinforzo di figura può modificare la gerarchia delle resistenze (flessione/taglio) rispetto a quella che caratterizza lo stesso elemento non rinforzato.",
      "La configurazione di rinforzo di figura certamente modifica la gerarchia delle resistenze (flessione/taglio) rispetto a quella che caratterizza lo stesso elemento non rinforzato."
     ],
     "correct": 2,
     "spiega": "Se in assenza di rinforzo il collasso avviene per taglio, il confinamento (fibre orizzontali) aumenta la resistenza a taglio e può modificare la gerarchia delle resistenze, portando a un collasso duttile per flessione.",
     "img": [
      "fig_p091_093.png"
     ]
    }
   ]
  },
  {
   "id": "060",
   "titolo": "Rinforzo FRP della muratura",
   "domande": [
    {
     "q": "Il rinforzo di un elemento di muratura con un materiale composito aderente alla sua superficie",
     "opts": [
      "modifica certamente il meccanismo di collasso del sistema.",
      "consente al centro di pressione di giacere esternamente alle sezioni nella zona rinforzata.",
      "incrementa certamente il moltiplicatore di collasso del sistema.",
      "conferisce resistenza a trazione alla muratura."
     ],
     "correct": 3,
     "spiega": "Il rinforzo composito aderente conferisce resistenza a trazione alla muratura (che ne è priva): è l'effetto fondamentale del rinforzo FRP su materiale NRT."
    },
    {
     "q": "In una sezione di muratura rinforzata con FRP",
     "opts": [
      "l’eccentricità limite dello sforzo normale non dipende dal momento resistente della sezione rinforzata.",
      "l’eccentricità limite dello sforzo normale è pari a metà dell’altezza della sezione.",
      "l’eccentricità diminuisce all’aumentare del momento resistente della sezione rinforzata.",
      "l’eccentricità limite dello sforzo normale dipende dalla resistenza a trazione del rinforzo o dalla massima forza che il rinforzo può trasferire al supporto."
     ],
     "correct": 3,
     "spiega": "L'eccentricità limite dello sforzo normale dipende dalla resistenza a trazione del rinforzo o dalla massima forza che il rinforzo può trasferire al supporto per aderenza (il FRP estende il dominio oltre e=t/2)."
    },
    {
     "q": "In corrispondenza di un tratto di una volta rinforzato con un materiale composito aderente all’intradosso",
     "opts": [
      "il luogo dei centri di pressione può uscire dalle sezioni dalla parte dell’estradosso.",
      "il luogo dei centri di pressione è certamente esterno alle sezioni.",
      "il luogo dei centri di pressione non può essere esterno alle sezioni.",
      "il luogo dei centri di pressione può uscire dalle sezioni dalla parte dell’intradosso."
     ],
     "correct": 3,
     "spiega": "Con rinforzo all'intradosso, il luogo dei centri di pressione può uscire dalle sezioni dalla parte dell'intradosso (il rinforzo teso all'intradosso consente eccentricità verso l'intradosso)."
    },
    {
     "q": "I domini (M,N) di figura (M è il momento flettente, N è lo sforzo normale, positivo se di compressione) sono tracciati nell’ipotesi di resistenza a compressione della muratura tendente ad infinito. Dopo aver riconosciuto quelli relativi ad una sezione rinforzata e quello relativo alla sezione non rinforzata, si identifichi l’affermazione corretta tra le seguenti.",
     "opts": [
      "lo stato di sollecitazione rappresentato dal punto A può sussistere solo se la sezione è rinforzata all’intradosso (cioè per momento flettente positivo).",
      "lo stato di sollecitazione rappresentato dal punto C può sussistere solo se la sezione è rinforzata all’intradosso (cioè per momento flettente positivo).",
      "gli stati di sollecitazione rappresentati dai punti B e D possono sussistere solo se la sezione è rinforzata sia all’estradosso (cioè per momento flettente negativo) che all’intradosso (cioè per momento flettente positivo).",
      "lo stato di sollecitazione rappresentato dal punto E può sussistere solo se la sezione è rinforzata all’intradosso (cioè per momento flettente positivo)."
     ],
     "correct": 0,
     "spiega": "Lo stato A (momento positivo elevato, fuori dal dominio non rinforzato) può sussistere solo se la sezione è rinforzata all'intradosso (il rinforzo teso all'intradosso amplia il dominio per M>0).",
     "img": [
      "fig_p092_094.png"
     ],
     "verify": true
    },
    {
     "q": "Per la volta di muratura (materiale non resistente a trazione) il rinforzo di materiale composito rappresentato incrementa il carico di collasso se il meccanismo di collasso del sistema in assenza di rinforzo prevede la formazione di una cerniera",
     "opts": [
      "all’imposta di sinistra.",
      "nella sezione B, all’intradosso.",
      "nella sezione A, all’intradosso.",
      "nella sezione B, all’estradosso."
     ],
     "correct": 1,
     "spiega": "Il rinforzo all'intradosso incrementa il carico di collasso se il meccanismo senza rinforzo prevede una cerniera nella sezione B all'intradosso (il rinforzo impedisce proprio quella cerniera).",
     "img": [
      "fig_p093_095.png"
     ],
     "verify": true
    },
    {
     "q": "Per il sistema di muratura di figura (materiale non resistente a trazione) nel quale Ff è la forza di trazione nel rinforzo che ne produce il distacco dal supporto",
     "opts": [
      "il moltiplicatore di collasso λc del carico q è non nullo in assenza di rinforzo ed è approssimativamente σfW se σf è la tensione nel rinforzo corrispondente a Ff e W è il modulo di resistenza della sezione.",
      "il moltiplicatore di collasso λc del carico q è nullo in assenza di rinforzo ed è approssimativamente 8Ffh/(qL2) nella configurazione rinforzata.",
      "il moltiplicatore di collasso λc del carico q è nullo in assenza di rinforzo ed è approssimativamente 16Ffh/(qL2) nella configurazione rinforzata.",
      "il moltiplicatore di collasso λc del carico q nella configurazione rinforzata è più grande di 16Ffh/(qL2)."
     ],
     "correct": 2,
     "spiega": "Il moltiplicatore di collasso del carico q è nullo senza rinforzo (NRT, fascia non compressa) ed è circa 16·Ff·h/(q·L²) nella configurazione rinforzata (meccanismo con cerniere e rinforzo teso).",
     "img": [
      "fig_p093_096.png"
     ],
     "verify": true
    }
   ]
  },
  {
   "id": "061",
   "titolo": "Meccanismi di volte rinforzate",
   "domande": [
    {
     "q": "Con riferimento al meccanismo del seguente schema, nel quale sono rappresentati i baricentri dei tre blocchi",
     "opts": [
      "la forza λF compie lavoro positivo mentre lo sforzo normale del rinforzo compie lavoro negativo.",
      "sia la forza λF che lo sforzo normale del rinforzo compiono lavoro negativo.",
      "sia la forza λF che lo sforzo normale del rinforzo compiono lavoro positivo.",
      "la forza λF compie lavoro negativo mentre lo sforzo normale del rinforzo compie lavoro positivo."
     ],
     "correct": 0,
     "spiega": "Nel meccanismo, la forza λF compie lavoro positivo (motrice del collasso) mentre lo sforzo normale del rinforzo compie lavoro negativo (resistente, si oppone all'apertura).",
     "img": [
      "fig_p094_097.png"
     ],
     "verify": true
    },
    {
     "q": "Con riferimento al meccanismo del seguente schema, nel quale sono rappresentati i baricentri dei tre blocchi",
     "opts": [
      "il peso del blocco 1 compie lavoro positivo e i pesi dei blocchi 2 e 3 compiono lavoro negativo.",
      "i pesi dei tre blocchi compiono lavoro positivo.",
      "i pesi dei blocchi 1 e 3 compiono lavoro positivo e il peso del blocco 2 compie lavoro negativo.",
      "i pesi dei blocchi 1 e 2 compiono lavoro positivo e il peso del blocco 3 compie lavoro negativo."
     ],
     "correct": 2,
     "spiega": "I pesi dei blocchi 1 e 3 compiono lavoro positivo (scendono) e il peso del blocco 2 compie lavoro negativo (sale), nel cinematismo a tre blocchi.",
     "img": [
      "fig_p095_098.png"
     ],
     "verify": true
    },
    {
     "q": "Se una cerniera si forma all’estradosso della sezione A di una volta e la sezione A è rinforzata all’intradosso",
     "opts": [
      "il centro di pressione della sezione A giace sul lembo della sezione, all’estradosso.",
      "il centro di pressione della sezione A giace all’esterno della sezione, dalla parte dell’estradosso.",
      "il centro di pressione della sezione A giace all’esterno della sezione, dalla parte dell’intradosso.",
      "il centro di pressione della sezione A giace all’interno della sezione se il momento flettente è negativo."
     ],
     "correct": 2,
     "spiega": "Se la cerniera si forma all'estradosso e la sezione è rinforzata all'intradosso, il centro di pressione giace all'esterno della sezione dalla parte dell'intradosso (il rinforzo teso consente la trazione lì).",
     "verify": true
    },
    {
     "q": "Se una cerniera si forma all’estradosso della sezione A di una volta e la sezione A è rinforzata all’estradosso",
     "opts": [
      "il centro di pressione della sezione A giace sul lembo della sezione, all’estradosso.",
      "il centro di pressione della sezione A giace sul lembo della sezione, all’intradosso.",
      "il centro di pressione della sezione A giace all’interno della sezione e non sul suo lembo.",
      "il centro di pressione della sezione A giace all’esterno della sezione, dalla parte dell’intradosso."
     ],
     "correct": 0,
     "spiega": "Se la cerniera si forma all'estradosso e la sezione è rinforzata all'estradosso, il centro di pressione giace sul lembo della sezione all'estradosso (cerniera classica di compressione sullo spigolo)."
    },
    {
     "q": "Con riferimento al meccanismo del seguente schema, nel quale sono rappresentati i baricentri dei tre blocchi; il moltiplicatore λ della forza F associato al meccanismo rappresentato",
     "opts": [
      "aumenta estendendo il rinforzo verso l’imposta di sinistra.",
      "aumenta estendendo il rinforzo verso l’imposta di destra.",
      "aumenta applicando un rinforzo anche all’estradosso del concio 1.",
      "aumenta all’aumentare della sezione del rinforzo."
     ],
     "correct": 3,
     "spiega": "Il moltiplicatore λ della forza F associato al meccanismo aumenta all'aumentare della sezione del rinforzo (più rinforzo → maggiore forza resistente → maggiore moltiplicatore di collasso).",
     "img": [
      "fig_p096_099.png"
     ],
     "verify": true
    },
    {
     "q": "Con riferimento al meccanismo del seguente schema, nel quale sono rappresentati i baricentri dei tre blocchi",
     "opts": [
      "la forza λF compie lavoro positivo mentre lo sforzo normale del rinforzo non compie lavoro.",
      "sia la forza λF che lo sforzo normale del rinforzo compiono lavoro negativo.",
      "sia la forza λF che lo sforzo normale del rinforzo compiono lavoro positivo.",
      "la forza λF compie lavoro positivo mentre lo sforzo normale del rinforzo copie lavoro negativo."
     ],
     "correct": 3,
     "spiega": "Nel meccanismo, la forza λF compie lavoro positivo mentre lo sforzo normale del rinforzo compie lavoro negativo (resistente).",
     "img": [
      "fig_p096_100.png"
     ],
     "verify": true
    },
    {
     "q": "Se una cerniera si forma all’estradosso della sezione A di una volta e la sezione A è rinforzata all’intradosso",
     "opts": [
      "il momento flettente è pari a Nt/2, essendo N lo sforzo normale agente e t lo spessore della volta.",
      "il momento flettente è pari al momento resistente della sezione A associato allo sforzo normale N ed è più piccolo di Nt/2, essendo N lo sforzo normale agente e t lo spessore della volta.",
      "il momento flettente è pari al momento resistente della sezione A associato allo sforzo normale N ed è più grande di Nt/2, essendo N lo sforzo normale agente e t lo spessore della volta.",
      "il momento flettente è più piccolo del momento resistente della sezione A associato allo sforzo normale N ed è più grande di Nt/2, essendo N lo sforzo normale agente e t lo spessore della volta."
     ],
     "correct": 2,
     "spiega": "Con cerniera all'estradosso e sezione rinforzata all'intradosso, il momento flettente è pari al momento resistente della sezione A associato a N ed è più grande di N·t/2 (il rinforzo aggiunge capacità oltre il valore della muratura NRT).",
     "verify": true
    }
   ]
  },
  {
   "id": "062",
   "titolo": "Luogo centri di pressione (sistemi rinforzati)",
   "domande": [
    {
     "q": "Per una volta a botte di muratura (materiale non resistente a trazione, infinitamente rigido e resistente a compressione) rinforzata, nelle condizioni di collasso",
     "opts": [
      "il luogo dei centri di pressione deve soddisfare condizioni che non dipendono dalla disposizione del rinforzo ma dipendono dalla forza di trazione massima trasferibile al rinforzo per aderenza.",
      "il luogo dei centri di pressione deve soddisfare condizioni che dipendono sia dalla disposizione del rinforzo che dalla forza di trazione massima trasferibile al rinforzo per aderenza.",
      "il luogo dei centri di pressione non deve soddisfare nessuna condizione se sono rinforzati sia l’intero intradosso che l’intero estradosso.",
      "il luogo dei centri di pressione deve soddisfare condizioni che dipendono dalla disposizione del rinforzo ma non dalla forza di trazione massima trasferibile al rinforzo per aderenza."
     ],
     "correct": 1,
     "spiega": "Al collasso, il luogo dei centri di pressione deve soddisfare condizioni che dipendono sia dalla disposizione del rinforzo sia dalla massima forza di trazione trasferibile al rinforzo per aderenza."
    },
    {
     "q": "Per un sistema di muratura (materiale non resistente a trazione, infinitamente rigido e resistente a compressione) n volte iperstatico e rinforzato con materiale composito, un meccanismo cinematicamente ammissibile",
     "opts": [
      "è identificato da n+1 cerniere; alcune di queste sono sicuramente disposte nella zona rinforzata.",
      "è identificato da n+1 cerniere; alcune di queste possono essere disposte nella zona rinforzata.",
      "è identificato da n+1 cerniere; tutte queste sono disposte nella zona rinforzata.",
      "è identificato da n+1 cerniere; nessuna di queste può essere disposte nella zona rinforzata."
     ],
     "correct": 1,
     "spiega": "Un meccanismo cinematicamente ammissibile è identificato da n+1 cerniere; alcune di queste POSSONO essere disposte nella zona rinforzata (non è obbligatorio né escluso)."
    },
    {
     "q": "Per un sistema di muratura (materiale non resistente a trazione, infinitamente rigido e resistente a compressione) rinforzato soggetto ad un carico staticamente ammissibile, il luogo dei centri di pressione",
     "opts": [
      "è certamente esterno alle sezioni nella zona rinforzata.",
      "è non esterno alle sezioni nella zona rinforzata.",
      "è certamente esterno alle sezioni nella zona non rinforzata.",
      "è non esterno alle sezioni nella zona non rinforzata."
     ],
     "correct": 3,
     "spiega": "Per un carico staticamente ammissibile, il luogo dei centri di pressione è non esterno alle sezioni nella zona NON rinforzata (dove vale il vincolo NRT classico, e≤t/2)."
    },
    {
     "q": "Per un sistema di muratura (materiale non resistente a trazione, infinitamente rigido e resistente a compressione) rinforzato soggetto ad un carico staticamente ammissibile, il luogo dei centri di pressione",
     "opts": [
      "deve essere esterno alle sezioni nella zona rinforzata, dalla parte del lembo opposto a quello rinforzato.",
      "deve essere esterno alle sezioni nella zona rinforzata, dalla parte del lembo rinforzato.",
      "può essere esterno alle sezioni nella zona rinforzata, dalla parte del lembo opposto a quello rinforzato.",
      "può essere esterno alle sezioni nella zona rinforzata, dalla parte del lembo rinforzato."
     ],
     "correct": 3,
     "spiega": "Nella zona rinforzata, il luogo dei centri di pressione PUÒ essere esterno alle sezioni dalla parte del lembo rinforzato (il rinforzo teso consente trazione lì, e quindi eccentricità oltre il bordo).",
     "verify": true
    },
    {
     "q": "Per un sistema di muratura (materiale non resistente a trazione, infinitamente rigido e resistente a compressione) rinforzato, nelle condizioni di collasso",
     "opts": [
      "il moltiplicatore del carico variabile agente è certamente non inferiore a qualunque moltiplicatore cinematicamente ammissibile.",
      "il moltiplicatore del carico variabile agente è certamente non superiore a qualunque moltiplicatore staticamente ammissibile.",
      "il moltiplicatore del carico variabile agente non è cinematicamente ammissibile.",
      "il moltiplicatore del carico variabile agente è certamente non inferiore a qualunque moltiplicatore staticamente ammissibile."
     ],
     "correct": 3,
     "spiega": "Al collasso, il moltiplicatore del carico è certamente non inferiore a qualunque moltiplicatore staticamente ammissibile (teorema statico: λ_collasso ≥ λ_staticamente ammissibile)."
    }
   ]
  },
  {
   "id": "063",
   "titolo": "Disposizione del rinforzo negli archi",
   "domande": [
    {
     "q": "Se nelle condizioni di collasso del sistema si ha il luogo dei centri di pressione rappresentato in figura",
     "opts": [
      "l’arco deve essere rinforzato all’estradosso almeno tra la B e la sezione C.",
      "l’arco deve essere rinforzato all’intradosso almeno tra la B e la sezione C.",
      "l’arco deve essere rinforzato all’estradosso almeno tra la sezione A e la sezione B e tra la sezione C e la sezione D.",
      "l’arco deve essere rinforzato all’intradosso almeno tra la A e la sezione B e tra la sezione C e la sezione D."
     ],
     "correct": 1,
     "spiega": "Se il luogo dei centri di pressione esce all'intradosso tra B e C, l'arco deve essere rinforzato all'intradosso almeno tra la sezione B e la sezione C (dove serve resistenza a trazione).",
     "img": [
      "fig_p099_101.png"
     ],
     "verify": true
    },
    {
     "q": "Se nelle condizioni di collasso del sistema si ha il luogo dei centri di pressione rappresentato in figura",
     "opts": [
      "l’arco deve essere rinforzato all’estradosso almeno tra la sezione A e la sezione B e tra la C e la sezione D.",
      "l’arco deve essere rinforzato all’estradosso almeno tra la sezione B e la sezione C.",
      "l’arco deve essere rinforzato all’intradosso almeno tra la sezione B e la sezione C.",
      "l’arco deve essere rinforzato all’intradosso almeno tra la sezione A e la sezione B e tra la C e la sezione D."
     ],
     "correct": 0,
     "spiega": "Se il luogo dei centri di pressione esce all'estradosso tra A-B e C-D, l'arco va rinforzato all'estradosso almeno tra A-B e tra C-D (dove il centro di pressione esce dall'estradosso).",
     "img": [
      "fig_p099_102.png"
     ],
     "verify": true
    },
    {
     "q": "Nello schema di figura, i pannelli A e B sono di muratura (materiale non resistente a trazione ed infinitamente rigido e resistente a compressione) le aste CD e CE sono di materiale elastico lineare. Sui pannelli A e B zono applicati i rinforzi di materiale composito indicati con R1, R2, R3, R4 ed R5. Si identifichi l’affermazione corretta tra le seguenti.",
     "opts": [
      "I rinforzi R1 ed R5 non incrementano singolarmente il moltiplicatore di collasso della forza F ma lo incrementano se sono applicati entrambi.",
      "Il rinforzo R4 incrementa il carico di collasso del sistema.",
      "Il rinforzo R3 incrementa il moltiplicatore di collasso della forza F anche senza che siano applicati i rinforzi R4 ed R1.",
      "Il rinforzo R1, insieme al rinforzo R2 incrementa il carico di collasso del sistema."
     ],
     "correct": 2,
     "spiega": "Il rinforzo R3 incrementa il moltiplicatore di collasso della forza F anche senza R4 ed R1 (se R3 è posizionato sulla cerniera critica del meccanismo). Dipende dalla figura.",
     "img": [
      "fig_p100_103.png"
     ],
     "verify": true
    },
    {
     "q": "Lo schema seguente rappresenta un arco (materiale non resistente a trazione ed infinitamente rigido e resistente a compressione) soggetto a carichi permanenti e ad un carico variabile la cui intensità è proporzionale ad un moltiplicatore λ ed il luogo dei centri di pressione associato al moltiplicatore di collasso. Si individui l’affermazione corretta tra le seguenti.",
     "opts": [
      "un rinforzo di FRP disposto all’estradosso incrementa il moltiplicatore di collasso se è esteso tra le sezioni B e D e non lo incrementa se è esteso tra C e D.",
      "un rinforzo di FRP disposto all’estradosso incrementa il moltiplicatore di collasso se è esteso tra le sezioni A e C e non lo incrementa se è esteso tra B e D.",
      "un rinforzo di FRP disposto all’intradosso incrementa il moltiplicatore di collasso se è esteso tra le sezioni A e C e non lo incrementa se è esteso tra B e D.",
      "per incrementare il moltiplicatore di collasso con un rinforzo di FRP è indispensabile disporlo sull’intero sviluppo dell’intradosso ed ancorarlo alle imposte."
     ],
     "correct": 2,
     "spiega": "Un rinforzo all'intradosso incrementa il moltiplicatore di collasso se esteso tra le sezioni dove il centro di pressione esce all'intradosso (es. A-C) e non se posto altrove (es. B-D). Dipende dalla figura.",
     "img": [
      "fig_p100_104.png"
     ],
     "verify": true
    }
   ]
  },
  {
   "id": "064",
   "titolo": "Rinforzo di pannelli e maschi murari",
   "domande": [
    {
     "q": "Per il pannello di una fascia di piano di un edificio di muratura rinforzato con materiali compositi rappresentato in figura",
     "opts": [
      "i rinforzi A e B sono dimensionati per il momento flettente; per rinforzare a taglio il pannello è necessario disporre fasce ad X sulle diagonali.",
      "i rinforzi A sono dimensionati con riferimento al momento flettente.",
      "i rinforzi B sono dimensionati con riferimento al momento flettente.",
      "i rinforzi A sono dimensionati con riferimento al taglio."
     ],
     "correct": 0,
     "spiega": "I rinforzi A e B (verticali/orizzontali ai bordi) sono dimensionati per il momento flettente; per rinforzare a taglio il pannello servono fasce a X sulle diagonali (assorbono la trazione diagonale).",
     "img": [
      "fig_p101_105.png"
     ]
    },
    {
     "q": "Per il maschio murario di figura",
     "opts": [
      "i rinforzi A e B sono dimensionati per il momento flettente; per rinforzare a taglio il pannello è necessario disporre orizzontali disposte ad un certo interasse.",
      "i rinforzi A sono dimensionati con riferimento al taglio.",
      "i rinforzi A sono dimensionati con riferimento al momento flettente.",
      "i rinforzi B sono dimensionati con riferimento al momento flettente."
     ],
     "correct": 2,
     "spiega": "Per il maschio murario, i rinforzi A (verticali) sono dimensionati con riferimento al momento flettente (pressoflessione); il taglio richiede fasce orizzontali ad interasse.",
     "img": [
      "fig_p101_106.png"
     ]
    }
   ]
  }
 ]
};
