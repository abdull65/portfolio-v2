# Codebase issue tasks

## 1) Typo fix task
**Task:** Correct the typo "desinged" to "designed" in the Bomes project description.

- **Why:** User-facing copy currently contains a spelling mistake.
- **Acceptance criteria:** `src/data/projects.json` uses "designed" in the description and the portfolio card displays the corrected text.
- **Reference:** `src/data/projects.json` (Bomes Digital description).

## 2) Bug fix task
**Task:** Fix `PortfolioSection` project-loading fallback to handle JSON shape consistently.

- **Why:** The fallback currently uses `setProjects(data.project || data)` while the local JSON shape is `{ "projects": [...] }`; this can set state to a non-array and break `.slice()`/`.map()` paths.
- **Acceptance criteria:**
  1. Replace fallback parsing with an array-safe branch (e.g., `Array.isArray(data?.projects) ? data.projects : []`).
  2. Ensure the component always keeps `projects` as an array.
  3. Add a small guard UI for empty project lists.
- **Reference:** `src/components/Portfolio.tsx` and `src/data/projects.json`.

## 3) Comment/documentation discrepancy task
**Task:** Update inaccurate inline comments in `BackButton`.

- **Why:** Comment says "Navigate back" but implementation does `router.push("/")`, which goes home instead of browser back.
- **Acceptance criteria:**
  1. Comment is updated to describe the actual behavior (navigate to home/portfolio landing page), **or**
  2. Behavior is changed to real back navigation (`router.back()`) and comment remains accurate.
- **Reference:** `src/components/backButton.tsx`.

## 4) Test improvement task
**Task:** Add tests for `PortfolioSection` data fallback and rendering safety.

- **Why:** Current logic relies on network fetch fallback and untyped JSON shape assumptions; no test prevents regressions.
- **Acceptance criteria:**
  1. Test that component renders initial cards from static data.
  2. Test fallback parsing when fetch returns `{ projects: [...] }`.
  3. Test resilience when fetch returns invalid shape (component does not crash and shows empty state).
- **Suggested stack:** React Testing Library + Vitest/Jest for component tests.
- **Reference:** `src/components/Portfolio.tsx`.
