# English Tutor — Grammar Reinforcement (v10)

A daily English grammar lesson system based on **"Essential Grammar in Use"** by Raymond Murphy (4th edition, 145 units).

Runs daily as a [Claude Code routine](https://code.claude.com/docs/en/routines). Each run reads previous lessons from this repo, generates the next one, commits it back, and publishes it as a Notion page — so the repo doubles as the spine of continuity and a permanent archive, while Notion is the reading surface.

**Role of the daily lesson:** read-only grammar *reinforcement* (~10 minutes). Speaking/writing practice happens with a private tutor — the lessons focus on explaining **why and when** to use each structure, not on exercises.

## How it works

Each day at the scheduled time, the routine:

1. Calculates today's unit from the start date (**July 13, 2026 = Unit 1**) modulo 145.
2. Reads yesterday's lesson from `lessons/` for the warm-up, plus two older lessons (~1 week and ~1 month back) for spaced review.
3. Generates a complete, self-contained lesson, commits it to `lessons/`, and creates a Notion page under **English Lessons**.
4. Every 7 days, generates a **Review Week** instead — consolidation through contrast, based on the actual content of the week's lesson files.

## Lesson anatomy (v10)

- **Warm-up + spaced review** — 5 retrieval questions (yesterday, ~1 week ago, ~1 month ago); answers only in the Gabarito at the end.
- **Mini-context** — notice the structure in a realistic tech-leadership dialogue before any explanation.
- **A regra** — the form, clearly and simply.
- **Quando usar — e quando não** — the core section: why the structure exists, the decision rule vs its rival structure (minimal pairs), PT→EN mapping, and typical Brazilian-speaker errors.
- **8 annotated examples** — each with a one-line note on why this structure fits (≥4 in tech/engineering contexts).
- **Recognition drill** — 4 items, at least one forcing a choice between the structure and its rival.
- **Para levar para a aula** — concrete suggestions of what to practice with the private tutor.
- **Gabarito** — all answers, each with a one-line explanation.
- **Resumo em português.**

## Repo structure

```
.
├── README.md
├── english_tutor_grammar_v10_notion.md   # the routine prompt (current)
├── lessons/
│   └── YYYY-MM-DD-unit-NNN.md            # one file per daily lesson
├── reviews/
│   └── YYYY-MM-DD-week-NNN.md            # one file per Review Week
└── archive/
    └── cycle-v9/                         # previous cycle (May–July 2026, APA format)
```

The `lessons/` and `reviews/` folders are created by the routine on first run. The `archive/` folder holds earlier cycles and is never read by the routine.

## Setup

1. Open [claude.ai/code/routines](https://claude.ai/code/routines) → edit the existing routine (or create a new one).
2. **Prompt**: paste the contents of [`english_tutor_grammar_v10_notion.md`](english_tutor_grammar_v10_notion.md).
3. **Repository**: select `LeviBertolino/English`.
4. **Trigger**: Scheduled, daily, at the time of your choice (e.g. 7:00).
5. **Connectors**: add **Notion** (required — reconnect/reauthorize if it shows as disconnected).
6. Save.

The routine is headless — lessons are generated, committed, and published to Notion, waiting for you to read.

## Profile

Designed for **Levi**, a Brazilian Portuguese speaker working as an executive leader in AI, technology strategy, and innovation — structured thinking, future visions, direct interaction with the C-Level. Examples and interference tips are calibrated to that context (strategy discussions, board presentations, AI investment decisions), not operational engineering routine.

- **Level**: A2–B1 grammar explanations, C1+ vocabulary in tech/work examples
- **Duration**: ~10 minutes per daily lesson, up to 15 for Review Week
- **Cycle length**: 145 days, then loops
