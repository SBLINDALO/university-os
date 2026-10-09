<<<<<<< HEAD
# University OS

Mobile-first mission control for the winter university session 2026/27.

# University OS

Dashboard React/Vite per la pianificazione della sessione invernale 2026/27.

## Avvio locale

```bash
npm install
npm run dev
```

Apri `http://localhost:5173`.

Il piano include gli esami reali, le lezioni e le sessioni di studio dall'8 ottobre al 20 dicembre 2026. Gli stati delle attività vengono salvati automaticamente nel browser.
- Expandable continuous timeline

## Installazione e dati

L'app è una PWA: dal browser del telefono usa **Condividi → Aggiungi alla schermata Home**. Dopo la prima apertura può caricare l'interfaccia anche senza rete.

Il progresso viene salvato localmente in una struttura versionata. Gli aggiornamenti precedenti basati sulla chiave `university-os-completed-pages` vengono migrati automaticamente; i dati restano però specifici del browser e del dispositivo.
