# Lessons

## Recent Findings
- Updated the main `PROJECT.md` reference with the IEEE LinkedIn Challenge description. The project details challenge logistics, coordination instructions for participating clubs (9 total), and relevant URLs. No new engineering heuristics were discovered during this documentation update.
- Replaced the external Notion link in `PROJECT.md` with the full text description of all participating clubs, including their names, descriptions, and Instagram handles.
- Built out the frontend landing page for the challenge with React and Tailwind. Filtered information to strictly serve members, excluding executive-only coordination details as requested.
- **Content Integrity**: When building UI features that display externally provided text (like club descriptions), apply the exact wording provided by the source without editorializing or summarizing. If length uniformity is required, selectively omit trailing sentences rather than rewriting the text. Leaving a field blank is always preferable to making up a description.
- **Link Differentiation**: Ensure that separate processes (e.g., registration vs. activity logging) are mapped to their respective unique URLs to avoid user confusion. Always confirm the distinct roles of similar-looking Notion links.
