# FlexPrice Component Library — Storybook

> **A fully documented, interactive component library** extracted from the [FlexPrice](https://flexprice.io) billing platform. Built as part of the FlexPrice Frontend Intern Assignment.

<br/>

## 🔗 Links

| | |
|---|---|
| 📖 **Live Storybook** | *(Add Vercel URL after deployment)* |
| 🐙 **GitHub** | https://github.com/vaibahvverma/FlexPrice |
| 🏢 **FlexPrice App** | https://admin.flexprice.io |

<br/>

---

## 📋 Table of Contents

1. [Overview](#overview)
2. [Tech Stack](#tech-stack)
3. [Getting Started](#getting-started)
4. [Component Library](#component-library)
5. [Advanced Features Implemented](#advanced-features-implemented)
6. [Running Tests](#running-tests)
7. [Building & Deploying](#building--deploying)
8. [Project Structure](#project-structure)

---

## Overview

FlexPrice is an open-source usage-based billing and pricing infrastructure platform. This repository contains a **Storybook component library** — the design system and interactive documentation for the FlexPrice UI.

**What's inside:**
- **16 fully documented UI components** across atoms, molecules, and organisms
- **Interactive Controls** — tweak any prop live in the browser
- **Interaction tests** using `@storybook/test` play functions
- **3 Advanced challenges** — filter persistence, virtualised lists, query caching
- **101 unit + component tests** with Vitest and @testing-library/react

---

## Tech Stack

| Technology | Purpose |
|-----------|---------|
| **React 18** + **TypeScript 5** | UI framework + type safety |
| **Vite 6** | Bundler & dev server |
| **Storybook 8** | Component docs + interaction tests |
| **TailwindCSS 3** | Utility-first styling |
| **shadcn/ui** | Radix UI primitive components |
| **@tanstack/react-virtual** | Virtualised list rendering |
| **Zustand 5** | Client state + filter persistence |
| **@tanstack/react-query v5** | Server state + caching |
| **Vitest 3** | Unit + component testing |
| **@testing-library/react** | DOM-based component tests |

---

## Getting Started

### Prerequisites

- Node.js ≥ 18
- npm ≥ 9

### Step 1 — Clone the repository

```bash
git clone https://github.com/vaibahvverma/FlexPrice.git
cd FlexPrice
```

### Step 2 — Install dependencies

```bash
npm install
```

### Step 3 — Run Storybook (development)

```bash
npm run storybook
```

Storybook will start at **http://localhost:6006** and open automatically in your browser.

### Step 4 — Run tests

```bash
npm run test
```

All 101 unit and component tests will run. You should see `13 test files passed`.

### Step 5 — Build Storybook (production)

```bash
npm run build-storybook
```

Output is placed in `storybook-static/`. Deploy this folder to any static host.

---

## Component Library

All 16 components are documented with:
- ✅ Default story (happy-path)
- ✅ Variant stories (all visual states)
- ✅ Live Controls (tweak props in Storybook's Controls panel)
- ✅ JSDoc documentation on every component
- ✅ Interaction tests (play functions) for interactive components

---

### 🔵 Atoms — Basic Building Blocks

#### `Button`
> `src/components/atoms/Button/Button.stories.tsx`

A versatile button with multiple variants and sizes.

**Stories:**
| Story | What it shows |
|-------|--------------|
| Default | Primary dark button |
| Loading | Spinner + disabled state during async action |
| Disabled | Non-interactive, grayed-out |
| Destructive | Red danger button for delete actions |
| Outline | Ghost border style |
| With Icon | Button with a leading Lucide icon |

**Controls:** `children`, `variant`, `size`, `isLoading`, `disabled`, `prefixIcon`

**Interaction tests:** Verifies click fires, loading state disables the button

---

#### `Chip` / `StatusChip`
> `src/components/atoms/Chip/Chip.stories.tsx`

Coloured inline badge for status labels (plan status, subscription state, etc.)

**Stories:** Default, Success, Warning, Failed, Info

**Controls:** `label`, `variant`, `icon`, `disabled`

---

#### `Input`
> `src/components/atoms/Input/Input.stories.tsx`

Advanced text/number input with formatting, validation, and currency prefix support.

**Stories:**
| Story | What it shows |
|-------|--------------|
| Default | Basic text input |
| With Label | Label + helper text |
| With Error | Red border + error message |
| Disabled | Non-interactive state |
| Formatted Currency | Number with `$` prefix and thousands separator |

**Interaction tests:** Types into field, verifies value updates

---

#### `Select` / `Dropdown`
> `src/components/atoms/Select/Select.stories.tsx`

Accessible dropdown powered by Radix UI Select primitive.

**Stories:** Default, With Error, Disabled, Radio Style (single-select with radio indicators)

---

#### `Tooltip`
> `src/components/atoms/Tooltip/Tooltip.stories.tsx`

Informational hover overlay with configurable delay and placement.

**Stories:** Default, With Button trigger, Info Icon With Delay (300ms), Right Side

---

#### `Spinner`
> `src/components/atoms/Spinner/Spinner.stories.tsx`

Animated SVG loading indicator.

**Stories:** Default, Large, Custom Color

---

#### `UsageBar` / `Progress`
> `src/components/atoms/Progress/Progress.stories.tsx`

Labelled progress bar for usage metering (e.g. API calls used vs. entitled).

**Stories:**
| Story | % | Color |
|-------|---|-------|
| Default | 45% | Blue |
| Near Limit | 85% | Orange/Red |
| Healthy | 20% | Green |

---

#### `DateRangePicker`
> `src/components/atoms/DateRangePicker/DateRangePicker.stories.tsx`

Calendar popover for selecting a start + end date range (used for analytics filters).

**Stories:** Default, Pre-Selected (Jan 1–31 2023), Disabled

---

### 🟡 Molecules — Composed UI Units

#### `MetricCard`
> `src/components/molecules/MetricCard.stories.tsx`

KPI dashboard card showing a metric label, formatted value, and optional trend indicator.

**Stories:**
| Story | Value | Format |
|-------|-------|--------|
| Default | 125,000 | Plain number |
| With Currency | $89,430.00 | USD formatted |
| Percentage Positive Trend | 23.5% | % + green ↑ arrow |
| Currency Negative Trend | $1,200.00 | USD + red ↓ arrow |

**Controls:** `title`, `value`, `currency`, `isPercent`, `showChangeIndicator`, `isNegative`

---

#### `DataTable`
> `src/components/molecules/Table/DataTable.stories.tsx`

Sortable, virtualised data table supporting tens of thousands of rows without performance degradation.

**Stories:**
| Story | Description |
|-------|-------------|
| Default | 3 rows, basic sortable columns |
| Empty | Empty state with "No data found" message |
| Virtualized 10K Rows | **10,000 rows** rendered via virtual scroll — only viewport rows in DOM |
| With Filter Persistence | Search box wired to Zustand store, filters persist in sessionStorage |

**Interaction tests:** Confirms table renders with correct row count

---

#### `InvoiceStatusBadge`
> `src/components/molecules/InvoiceStatusBadge.stories.tsx`

Maps an invoice status string to a colour-coded chip with icon.

| Status | Color | Icon |
|--------|-------|------|
| `paid` | Green | ✓ |
| `open` | Blue | 🕐 |
| `draft` | Gray | — |
| `void` | Red | ✗ |
| `uncollectible` | Orange | ⚠ |

---

#### `SearchBar`
> `src/components/molecules/SearchBar.stories.tsx`

Debounced search input with a clear (×) button. Uses `use-debounce` internally.

**Features:**
- 300ms debounce by default (configurable)
- Leading search icon
- Clear button appears when field has content
- `onSearch(value)` callback after debounce

---

#### `SidebarNav`
> `src/components/molecules/Sidebar/Sidebar.stories.tsx`

Collapsible navigation sidebar matching the FlexPrice app layout.

**Features:**
- Collapse / expand with chevron button
- Active route highlighting (FlexPrice brand colour `#092E44`)
- Nested group expansion (Product Catalog → Features, Plans, Coupons…)
- Icons for each top-level section via Lucide

---

### 🔴 Organisms — Feature-Level Sections

#### `EmptyState`
> `src/components/organisms/EmptyState.stories.tsx`

Full-page empty state for when a list or table has no data.

**Stories:**
| Story | Config |
|-------|--------|
| Default | Inbox icon + headline + description + CTA button |
| Without Action | No CTA button |

**Interaction tests:** Verifies CTA button click fires `onAction`

---

#### `PricingTierTable`
> `src/components/organisms/PricingTierTable.stories.tsx`

Displays graduated/tiered pricing in a structured table — used on plan detail pages.

**Example output:**

| Tier Volume | Flat Fee | Per Unit |
|-------------|---------|---------|
| 1 – 1,000 | — | $0.0500 |
| 1,001 – 5,000 | $50.00 | $0.0400 |
| 5,001 – 10,000 | $200.00 | $0.0300 |
| 10,001 – ∞ | $400.00 | $0.0200 |

**Controls:** `title`, `description`, `currency`, `tiers`

---

## Advanced Features Implemented

### Challenge A — Filter Persistence (Zustand + sessionStorage)

> `src/hooks/useFilterStore.ts`

A factory hook that creates per-route filter stores with sessionStorage persistence.

```typescript
// Create a store for a specific page
const useInvoicesFilter = createFilterStore('invoices');

// Inside a component:
const { filters, setFilter, resetFilters } = useInvoicesFilter();

setFilter('status', 'paid');   // persists to sessionStorage['filters:invoices']
resetFilters();                  // clears state + removes ?f= from URL
```

**How it works:**
1. Each filter store is keyed by route name (e.g. `filters:invoices`)
2. State is persisted to `sessionStorage` via Zustand's `persist` middleware
3. A shallow fingerprint (`?f=<count>`) is synced to the URL — the page is bookmarkable without URL bloat
4. Full filter state is retrieved from sessionStorage on page reload

**Live demo:** `DataTable → With Filter Persistence` story

---

### Challenge B — Virtualised List (@tanstack/react-virtual)

> `src/components/molecules/Table/DataTable.tsx`

The `DataTable` component uses `useVirtualizer` to only render rows in the viewport.

```typescript
const rowVirtualizer = useVirtualizer({
  count: sortedData.length,       // total row count (e.g. 10,000)
  getScrollElement: () => parentRef.current,
  estimateSize: () => 40,          // estimated row height in px
  overscan: 5,                     // extra rows above/below viewport
});
```

**Performance:** With 10,000 rows, only ~12 `<div>` elements are in the DOM at any time. Scroll is buttery smooth with no jank.

**Live demo:** `DataTable → Virtualized 10K Rows` story

---

### Challenge C — Configurable TanStack Query Caching

> `src/utils/createQueryConfig.ts`

A utility that standardises `@tanstack/react-query` cache settings across the app.

```typescript
import { createQueryConfig, createGlobalQueryConfig } from '@/utils/createQueryConfig';

// Global QueryClient setup (in App.tsx)
const queryClient = new QueryClient(createGlobalQueryConfig());

// Per-query overrides at call sites:
useQuery({
  queryKey: ['invoices'],
  queryFn: fetchInvoices,
  ...createQueryConfig({ preset: 'REALTIME' }),  // staleTime: 0 → always fresh
});

useQuery({
  queryKey: ['plans'],
  queryFn: fetchPlans,
  ...createQueryConfig({ preset: 'STATIC' }),    // staleTime: 30min → rarely changes
});
```

**Presets:**

| Preset | `staleTime` | `gcTime` | Use case |
|--------|-------------|---------|----------|
| `REALTIME` | 0 ms | 5 min | Live dashboards, event streams |
| `DEFAULT` | 5 min | 10 min | Standard pages |
| `STATIC` | 30 min | 60 min | Plan definitions, price units |

---

## Running Tests

```bash
# Run all tests once
npm run test

# Watch mode (re-runs on file change)
npx vitest
```

### Test coverage

| Test File | What's tested | Tests |
|-----------|--------------|-------|
| `Button/Button.test.tsx` | Render, loading spinner, disabled state | 3 |
| `Chip/Chip.test.tsx` | Render, click handler, disabled, icon | 4 |
| `utils/formatAmount.test.ts` | Thousands formatting, decimal handling, negatives | 5 |
| `utils/createQueryConfig.test.ts` | All 3 presets, staleTime override, gcTime override | 6 |
| `utils/invoiceStatus.test.ts` | All 5 invoice status → label mappings | 5 |
| `utils/tierCalculation.test.ts` | Single tier, multi-tier span, zero usage | 3 |

**Total: 101 tests passing** (13 files pass, 1 pre-existing file fails due to missing Supabase env vars — unrelated to this library)


---

## Project Structure

```
src/
├── components/
│   ├── atoms/                     # Basic building blocks
│   │   ├── Button/
│   │   │   ├── Button.tsx         # Component
│   │   │   ├── Button.stories.tsx # Storybook stories
│   │   │   └── Button.test.tsx    # Unit tests
│   │   ├── Chip/
│   │   ├── Input/
│   │   ├── Select/
│   │   ├── Tooltip/
│   │   ├── Spinner/
│   │   ├── Progress/              # UsageBar
│   │   └── DateRangePicker/
│   │
│   ├── molecules/                 # Composed UI units
│   │   ├── MetricCard.tsx
│   │   ├── MetricCard.stories.tsx
│   │   ├── InvoiceStatusBadge.tsx
│   │   ├── InvoiceStatusBadge.stories.tsx
│   │   ├── SearchBar.tsx
│   │   ├── SearchBar.stories.tsx
│   │   ├── Sidebar/
│   │   │   └── Sidebar.stories.tsx
│   │   └── Table/
│   │       ├── DataTable.tsx      # Virtualised table
│   │       └── DataTable.stories.tsx
│   │
│   └── organisms/                 # Feature-level sections
│       ├── EmptyState.tsx
│       ├── EmptyState.stories.tsx
│       ├── PricingTierTable.tsx
│       └── PricingTierTable.stories.tsx
│
├── hooks/
│   └── useFilterStore.ts          # Challenge A: Zustand filter persistence
│
├── utils/
│   ├── createQueryConfig.ts       # Challenge C: TanStack Query presets
│   ├── createQueryConfig.test.ts
│   ├── formatAmount.test.ts
│   ├── invoiceStatus.test.ts
│   └── tierCalculation.test.ts
│
└── .storybook/
    ├── main.ts                    # Storybook config (reactDocgen: false for speed)
    └── preview.ts                 # Global decorators + backgrounds
```

---

