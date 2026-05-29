# English Tutor — APA Cycle

A daily English grammar lesson system based on **"Essential Grammar in Use"** by Raymond Murphy (4th edition, 145 units), structured around the **APA learning cycle** (Adquirir → Praticar → Ajustar).

Runs daily as a [Claude Code routine](https://code.claude.com/docs/en/routines). Each run reads the previous lesson from this repo, generates the next one, and commits it back — so the repo doubles as the spine of continuity and a permanent archive of every lesson.

## How it works

Each day at the scheduled time, the routine:

1. Calculates today's unit from the start date (April 18, 2026 = Unit 1) modulo 145.
2. Reads yesterday's lesson file from `lessons/` to ground the warm-up in real, specific examples.
3. Generates a complete, self-contained lesson and commits it to `lessons/`.
4. Every 7 days, instead of a normal lesson, generates a **Review Week** that consolidates the previous 7 units, drawing on the actual content of those lesson files.

Because the repo is read on every run, the warm-up section of each lesson references things you genuinely saw the day before — not generic recall.

## Lesson anatomy (APA cycle)

Each daily lesson is one full cycle of APA:

- **Adquirir** — mini-context (3–5 line dialogue/paragraph) → grammar rule → 8 example sentences (≥4 anchored in tech leadership, software engineering, AI, code review)
- **Praticar** — 3 recognition exercises + 1 short writing task + 1 speaking task + a real-world Production Challenge for the day
- **Ajustar** — Warm-up recall of yesterday's unit, private self-check, and the weekly Review Week consolidation

Plus: 3 common mistakes (❌ → ✅), memory tip, IPA pronunciation guide with tips for Brazilian Portuguese speakers, and a Portuguese summary.

## Repo structure

```
.
├── README.md
├── english_tutor_apa_routines_v7_email.md  # the routine prompt (current)
├── lessons/
│   └── YYYY-MM-DD-unit-NNN.md              # one file per daily lesson
└── reviews/
    └── YYYY-MM-DD-week-NNN.md              # one file per Review Week
```

The `lessons/` and `reviews/` folders are created by the routine on first run.

## Setup

1. Open [claude.ai/code/routines](https://claude.ai/code/routines) → **New routine** (or edit the existing one).
2. **Prompt**: paste the contents of [`english_tutor_apa_routines_v7_email.md`](english_tutor_apa_routines_v7_email.md).
3. **Repository**: select `LeviBertolino/English`.
4. **Trigger**: Scheduled, daily, at the time of your choice (e.g. 7:00).
5. **Connectors**: add **Slack** and **Gmail** — both are required for v7.
6. Save.

> Auto-send Gmail drafts: copy [`gmail-auto-send.gs`](gmail-auto-send.gs) into [script.google.com](https://script.google.com), run once to grant permissions, then add a time-driven trigger (every hour).

The routine is headless — there's no live back-and-forth. Lessons are generated, committed, and waiting for you to read on GitHub or in the Claude Code session.

## Profile

Designed for **Levi**, a Brazilian Portuguese speaker working as a technology leader (software engineering, AI, Staff+ tracks). Examples and pronunciation tips are calibrated to that context.

- **Level**: A2–B1 grammar, C1+ vocabulary in tech/work examples
- **Duration**: ~15 minutes per daily lesson, up to 25 for Review Week
- **Cycle length**: 145 days, then loops
