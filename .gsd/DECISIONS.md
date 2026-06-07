# DECISIONS.md — Architecture Decision Records

> **Purpose**: Log significant technical decisions and their rationale.

---

## Decisions

## [DECISION-001] Branding Color System and Layout Alignment Overhaul

**Date**: 2026-06-07
**Status**: Accepted

### Context
The website's original secondary colors (dark navy `#293645` and teals) were perceived as dull, generic, and unappealing. In addition, section typography, line heights, and container alignments were inconsistent, causing the platform to feel "AI-generated" rather than premium.

### Decision
1. Establish **Terracotta Orange** (`#d95f43`) as the Primary Brand Color.
2. Select **Deep Forest Emerald** (`#113f27`) as the Secondary Brand Color to reflect the Green Ahom Federation's ecological and wetland restoration mission.
3. Standardize layouts using alternating structured section containers (e.g. solid white surfaces, soft off-white/sage backdrops) with consistent typography scaling, line heights (`1.7` for body, `1.2` for headings), and aligned blocks.

### Rationale
An environmental and heritage NPO in Assam is best represented by natural, high-contrast colors (terracotta representing the historic Ahom brickworks/soil, and emerald representing the forest canopy/wetlands). Enforcing consistent container constraints and alignment rules corrects structural imbalance.

### Consequences
- Requires updating global CSS variables (`--primary`, `--primary-light`, `--teal`, `--sand`, etc.) in `index.css`.
- Requires auditing all page sections (`Home.jsx`, `AboutUs.jsx`, `OurWork.jsx`, `Impact.jsx`, etc.) to enforce proper container boxes, backgrounds, alignments, and high-contrast text layers.

---

*Last updated: 2026-06-07*
