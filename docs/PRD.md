# PRD — University OS

**Stato:** bozza iniziale  
**Ultimo aggiornamento:** 7 ottobre 2026  
**Repository:** `SBLINDALO/university-os`

## 1. Contesto

`university-os` è concepito come sistema personale di organizzazione dello studio. Il README descrive l'obiettivo iniziale come una **tabella di marcia di studio per la sessione invernale 2026/2027**.

Il repository è attualmente in fase iniziale: oltre a questo documento e agli altri documenti di pianificazione, non risultano ancora codice applicativo, struttura dati, configurazioni tecniche o automazioni documentate.

## 2. Problema

Uno studente deve poter trasformare gli obiettivi della sessione d'esami in un piano operativo: materie, scadenze, attività di studio, priorità e avanzamento. Senza una struttura unica, il piano rischia di essere frammentato, difficile da aggiornare e privo di criteri per capire se la preparazione procede correttamente.

## 3. Obiettivi

### Obiettivi iniziali

- Definire un piano di studio chiaro per la sessione invernale 2026/2027.
- Rendere visibili esami, scadenze, attività e priorità.
- Suddividere il lavoro in attività concrete e verificabili.
- Registrare l'avanzamento e facilitare la revisione periodica del piano.
- Mantenere il sistema semplice da aggiornare e utilizzabile da una sola persona.

### Fuori ambito iniziale

- Gestione multiutente o social features.
- Integrazione obbligatoria con calendari, LMS o servizi esterni.
- Automazioni avanzate, notifiche push o applicazioni mobili native.
- Sostituzione dei materiali didattici o dei sistemi ufficiali dell'università.

## 4. Utente e persona principale

**Studente universitario singolo** che prepara una o più prove nella sessione invernale 2026/2027 e vuole pianificare il tempo disponibile, monitorare la preparazione e riconoscere tempestivamente i ritardi.

## 5. Casi d'uso

1. Definire gli esami della sessione e le relative date.
2. Per ogni esame, elencare argomenti, materiali e attività necessarie.
3. Ordinare le attività per priorità e scadenza.
4. Consultare cosa fare oggi o nella settimana corrente.
5. Contrassegnare un'attività come iniziata, completata o bloccata.
6. Verificare l'avanzamento per materia e ricalibrare il piano.
7. Annotare rischi, dubbi e decisioni di pianificazione.

## 6. Requisiti funzionali desiderati

> Questi sono requisiti di prodotto; non implicano che siano già implementati.

- **RF-01 — Anagrafe degli esami:** creare e modificare esami con nome, data, periodo e stato.
- **RF-02 — Piano per materia:** associare a ogni esame argomenti, materiali e attività.
- **RF-03 — Attività pianificabili:** definire titolo, descrizione, priorità, stima, scadenza e stato.
- **RF-04 — Vista temporale:** consultare il piano per giorno, settimana o fase di preparazione.
- **RF-05 — Avanzamento:** visualizzare attività completate e lavoro rimanente.
- **RF-06 — Revisione:** registrare note e modificare il piano in base ai risultati reali.
- **RF-07 — Persistenza:** conservare i dati in un formato affidabile e facilmente esportabile.
- **RF-08 — Tracciabilità:** distinguere chiaramente attività pianificate, in corso, completate e bloccate.

## 7. Requisiti non funzionali

- **Semplicità:** il piano deve poter essere aggiornato rapidamente senza manutenzione complessa.
- **Affidabilità:** le modifiche non devono causare perdita del piano.
- **Portabilità:** i dati e la documentazione devono rimanere leggibili anche senza uno specifico strumento proprietario.
- **Manutenibilità:** la struttura deve poter crescere senza duplicazioni inutili.
- **Privacy:** il progetto deve evitare di richiedere dati personali o integrazioni esterne non necessarie.
- **Accessibilità:** le informazioni essenziali devono essere consultabili in formato testuale e con una gerarchia chiara.

## 8. Flusso principale

1. Inserire gli esami della sessione.
2. Definire per ogni esame gli argomenti e le attività.
3. Stimare il lavoro e assegnare priorità e scadenze.
4. Consultare il lavoro previsto per il periodo corrente.
5. Aggiornare lo stato dopo ogni sessione di studio.
6. Eseguire una revisione settimanale.
7. Ricalibrare attività e scadenze quando il piano reale diverge da quello previsto.

## 9. Modello dati concettuale

Il modello minimo previsto comprende:

- **Esame:** nome, data, stato, priorità e note.
- **Argomento:** nome, esame associato, livello di preparazione e note.
- **Attività:** descrizione, argomento/esame, stato, priorità, stima e scadenza.
- **Sessione di studio:** data, durata, attività svolte e osservazioni.
- **Revisione:** periodo, risultati, ostacoli e azioni correttive.

Il formato e la tecnologia di persistenza non sono ancora definiti nel repository.

## 10. Criteri di successo

- Tutti gli esami della sessione hanno un piano associato.
- Le attività del periodo corrente sono identificabili senza ambiguità.
- L'avanzamento può essere aggiornato con un'operazione semplice.
- La revisione settimanale produce decisioni o azioni concrete.
- Il piano rimane utilizzabile anche se cambiano date, priorità o disponibilità di tempo.

## 11. Rischi e assunzioni

- **Rischio:** pianificazione troppo dettagliata e difficile da mantenere.  
  **Mitigazione:** partire da attività piccole ma non eccessivamente granulari.
- **Rischio:** stime irrealistiche.  
  **Mitigazione:** confrontare regolarmente stima e tempo effettivo.
- **Rischio:** il progetto resta solo documentale.  
  **Mitigazione:** definire presto un formato operativo minimo e usarlo per una settimana reale.
- **Assunzione:** l'utente principale è una sola persona.
- **Assunzione:** la sessione di riferimento è quella invernale 2026/2027.

## 12. Domande aperte

- Il sistema resterà basato su Markdown/CSV oppure evolverà in un'applicazione?
- Quali sono gli esami, le date e i vincoli reali della sessione?
- Quale granularità deve avere una singola attività?
- È necessaria un'integrazione con calendario o piattaforme universitarie?
- Quale metrica rappresenta meglio la preparazione: attività completate, ore, argomenti verificati o una combinazione?
