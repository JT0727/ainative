# AI Native Learning Program

A practical, self-paced curriculum that teaches business individual contributors how to work effectively with AI: mental models, tool judgment, prompting habits, verification discipline, agent workflows, and AI strategy.

**Live site:** https://ai-native-site.vercel.app

## What's inside

- **21 modules in 5 phases** — AI Foundations, Productivity Acceleration, Business Operations, Advanced AI Workflows, and AI Strategy & Leadership.
- **Bonus section: Agents In Practice** (8 lessons) — a practical endcap on OpenClaw and other agent tools: what they do, where they help, where they add risk, how to evaluate them, the 2026 proactive-agent wave (Muse, Grok Bot, Dots, Duet, Hermes), and agent harnesses.
- **Bonus section: The 2026 Model Landscape** (3 lessons) — the GPT-6, Claude, and Gemini families and their tiers, open-weight versus closed models, and how to read a model release without the hype.
- **Bonus section: GitHub For Non-Engineers** (3 lessons) — how GitHub works, how engineers use it every day (issues, pull requests, reviews, checks, releases), and how non-engineers participate.
- **Reference pages** — a plain-English glossary, a prompt library, and a curated tools & resources page.

## Repository layout

| Path | What it is |
| --- | --- |
| `ai-native-site/` | The static site (HTML/CSS/JS), deployed on Vercel. This is the source of truth. |
| `ai-native-site/content/` | Curriculum source files: `program.json`, per-module JSON in `content/modules/`, the bonus section in `content/bonus/`, plus editorial docs and the content changelog. |
| `ai-native-site/js/courses.js` | Generated runtime artifact. Do not edit by hand — rebuild it from the content sources. |
| `AI_Native_Learning_Program.html` | Legacy standalone export; now just a redirect stub to the maintained site. |

## Working on content

Content is maintained as split JSON source files and built into the runtime artifact with validation:

```bash
cd ai-native-site
npm run build:content     # builds js/courses.js and validates lesson metadata, ids, slugs, and resource links
npm run validate:content  # same validation pass
```

Editorial rules live in `ai-native-site/content/`:

- `CONTENT_MODEL.md` — the content schema and field expectations
- `EDITORIAL_WORKFLOW.md` and `EDITORIAL_CHECKLIST.md` — how lessons are written and reviewed
- `RELEASE_CHECKLIST.md` — what to check before publishing
- `CHANGELOG.md` — content change history

Key expectations: keep lessons practical and tied to a real business task with a verification step; prefer durable workflow guidance over brittle tool trivia; refresh a lesson's `lastReviewed` date whenever a tool-specific lesson changes.

## Deployment

The site deploys on Vercel from `ai-native-site/` (`vercel.json` runs `npm run build:content` at build time). Pushing to `main` publishes the update.

## License

Free to use and share freely, as noted on the site.
