# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

One university student preparing one or more winter-session exams in 2026/27.

## Product Purpose

University OS turns the student's exam goals into a daily study plan with lessons, tasks, milestones, and visible progress. Success means knowing what matters today and whether preparation is on track without maintaining a complex system.

## Positioning

It combines the student's university timetable with exam preparation and degree progress in one personal operating view, separating immediate actions from longer-term graduation context.

## Operating Context

The student checks the app on a phone throughout the day, marks study tasks complete after working, reviews past days, and checks upcoming exams and graduation requirements during weekly planning.

## Capabilities and Constraints

- The current product is a zero-build static web app.
- The winter session runs from 8 October through 20 December 2026.
- The interface must use five top-level areas: Today, Calendar, Exams, Degree, and Settings.
- Critical information must be visible within one screen per area; avoid long vertical dashboard scrolling.
- Preserve the existing distinction between lessons and study tasks, including class-only courses.
- No external integrations or multi-user features are required.

## Brand Commitments

The product name is University OS. The interface should feel like a calm, readable personal operating system rather than a dense administrative dashboard.

## Evidence on Hand

- `docs/PRD.md` contains the product requirements and conceptual data model.
- `app.js` contains the current sample timetable, study tasks, exam subjects, and winter-session dates.

## Product Principles

- Show the next useful action first.
- Keep daily decisions separate from long-term planning.
- Make progress legible without overwhelming the student.
- Prefer quick, reversible updates over complex workflows.

## Accessibility & Inclusion

Essential information must remain readable with clear hierarchy, sufficient contrast, keyboard-accessible controls, visible focus states, and touch targets suitable for mobile use.
