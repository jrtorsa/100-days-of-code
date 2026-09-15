# Notes

- Teaching language: **English** (switched 2026-09-11, was Spanish — user asked to move to English). All lessons and reference docs going forward are in English; lesson 1 and the domain map were rewritten in English.
- Starting level (declared 2026-09-11): total beginner in both AWS and AI/ML.
- Target timeline (declared 2026-09-11): 1 to 3 months to sit the exam.
- Motivation: explicit job requirement, not exploratory personal interest — keep lessons concrete and exam-focused, avoid drifting into untested theory.
- **Technical decision (2026-09-15):** lessons/reference docs must be fully self-contained (CSS and JS inlined in the `<head>`/`<body>`, not linked to `../assets/style.css` / `../assets/quiz.js`). The user opens each lesson as a standalone file (sent one at a time), so relative links to sibling asset files silently fail — the quiz "Check" button did nothing because `quiz.js` never loaded. `assets/style.css` and `assets/quiz.js` stay in the repo as the canonical source to copy from when authoring a new lesson, but every shipped lesson/reference file must paste the CSS/JS inline. Lessons 1–3 and their reference sheets were retrofitted; keep this pattern for all future lessons.
- User feedback (2026-09-15): wants exam-style scenario questions ("A company wants to...") instead of abstract "this is ___" quizzes, and deeper explanations with the jargon spelled out plainly. Applied from lesson 3 onward; lessons 1–2 retrofitted too.
