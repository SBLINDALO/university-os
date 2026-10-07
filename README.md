# University OS

Mobile-first mission control for the winter university session 2026/27.

## Run locally

This is a zero-build static web app. From the repository root, run:

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

## Included

- Monthly calendar for October–December 2026
- University classes and study tasks in the same day cells
- Expandable continuous timeline
- Winter-session exam readiness
- Recovery mode, page totals, checkpoints, and goal state
- Responsive mobile/desktop UI
- Correct separation between exam subjects and class-only courses

Class-only courses (`Critical Thinking`, `Processi, Soggetti e Poteri`, and `Laboratorio di Giornalismo Televisivo`) are represented only as lessons. They are excluded from study tasks, page totals, recovery, and exam readiness.
