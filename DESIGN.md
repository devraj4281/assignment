---
name: Accredian Core
colors:
  surface: '#f8f9ff'
  surface-dim: '#d1dbec'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eef4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dfe9fa'
  surface-container-highest: '#d9e3f4'
  on-surface: '#121c28'
  on-surface-variant: '#414754'
  inverse-surface: '#27313e'
  inverse-on-surface: '#eaf1ff'
  outline: '#727785'
  outline-variant: '#c1c6d6'
  surface-tint: '#005bc0'
  primary: '#005bbf'
  on-primary: '#ffffff'
  primary-container: '#1a73e8'
  on-primary-container: '#ffffff'
  inverse-primary: '#adc7ff'
  secondary: '#585f67'
  on-secondary: '#ffffff'
  secondary-container: '#dce3ec'
  on-secondary-container: '#5e656d'
  tertiary: '#575e6f'
  on-tertiary: '#ffffff'
  tertiary-container: '#6f7689'
  on-tertiary-container: '#ffffff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc7ff'
  on-primary-fixed: '#001a41'
  on-primary-fixed-variant: '#004493'
  secondary-fixed: '#dce3ec'
  secondary-fixed-dim: '#c0c7d0'
  on-secondary-fixed: '#151c23'
  on-secondary-fixed-variant: '#40484f'
  tertiary-fixed: '#dce2f7'
  tertiary-fixed-dim: '#c0c6db'
  on-tertiary-fixed: '#141b2b'
  on-tertiary-fixed-variant: '#404758'
  background: '#f8f9ff'
  on-background: '#121c28'
  surface-variant: '#d9e3f4'
typography:
  headline-xl:
    fontFamily: manrope
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: manrope
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.25'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-lg:
    fontFamily: inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
  label-md:
    fontFamily: inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.2'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  margin: 32px
  section-padding: 80px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

The brand identity for this design system is rooted in the "Corporate-Educational" intersection—balancing the authority of a high-performance enterprise partner with the accessibility of a modern learning platform. It is designed to evoke clarity, trust, and academic excellence through a systematic and polished aesthetic.

The visual style is **Corporate / Modern**, characterized by:
- **Clarity of Information:** High contrast ratios and generous white space to prioritize legibility.
- **Structured Hierarchy:** Clear differentiation between marketing "storytelling" sections and functional "data-driven" sections.
- **Trust-Oriented Details:** Use of professional blues and subtle borders to create a safe, institutional feel without being dated.
- **Functional Polish:** Subtle transitions and consistent geometric shapes that suggest a high-tech, high-performance environment.

## Colors

The palette is anchored by a vibrant Primary Blue (`#1A73E8`), which represents intelligence and action. This is supported by a Secondary Light Blue (`#EFF6FF`) used for surface backgrounds and subtle emphasis.

- **Primary:** Use for main CTAs, active states, and highlighting key terminology within headlines.
- **Secondary:** Use for section backgrounds, card hover states, and iconography containers.
- **Tertiary:** Reserved for deep headers and high-contrast text to provide a sense of authority.
- **Neutral:** A professional gray for body text, descriptions, and structural borders.
- **Background:** Pure white (`#FFFFFF`) is the default canvas for all main content areas to maximize "breathing room."

## Typography

The system utilizes a dual-font strategy to balance character with utility. **Manrope** is selected for headlines due to its modern, geometric construction that mirrors the "Circular" feel of the source. **Inter** is used for body and interface elements for its unparalleled readability in dense layouts.

In marketing layouts, headers should frequently utilize a "highlight" style where the primary blue is applied to the most important word in the phrase to guide the user's eye. Body text should maintain a generous line height (1.6) to prevent fatigue during educational reading.

## Layout & Spacing

This design system uses a **Fixed Grid** model for desktop, centered within a maximum width of 1280px. A 12-column system is standard, using 24px gutters.

- **Vertical Rhythm:** Sections are clearly separated by 80px to 100px of vertical padding to denote shifts in content topics.
- **Component Spacing:** Use an 8px base grid. For example, icons within cards use `stack-md` (16px) spacing from their headers.
- **Content Density:** Maintain a "breathable" density. Information should never feel cramped; if data density increases, use whitespace rather than borders to separate groups where possible.

## Elevation & Depth

Depth is communicated primarily through **Low-Contrast Outlines** and **Tonal Layers** rather than heavy shadows.

- **Surface Tiers:** Use the Secondary Blue (`#EFF6FF`) to create "wells" or distinct background regions. 
- **Borders:** Cards and containers use a subtle 1px border (`#E5E7EB`).
- **Subtle Elevation:** For interactive elements like cards, a very soft, diffused shadow (0px 4px 20px rgba(0,0,0,0.05)) is applied only on hover to provide tactile feedback without cluttering the initial view.
- **Icons:** Use dual-tone or colored backgrounds for icons to create a sense of layering and hierarchy within a flat container.

## Shapes

The design system employs a **Rounded** (8px) corner radius as the standard for most interface elements. This softens the corporate aesthetic, making the educational aspect feel more approachable.

- **Standard (8px):** Buttons, Input fields, and Cards.
- **Large (16px):** Outer containers or featured marketing cards.
- **Full (Pill):** Used exclusively for small tags/chips or specific "Enquire" buttons to make them stand out from the rectangular grid.

## Components

### Buttons
- **Primary:** Solid `#1A73E8` background with white text. High-contrast, 8px rounded corners.
- **Secondary/Ghost:** Primary blue text with a 1px primary blue border or light blue background.
- **Hover States:** Subtle darkening of the background color or the addition of the soft elevation shadow.

### Cards
- **Feature Cards:** White background, 1px light gray border, 8px corner radius. Icons should be placed in the top-left or centered, often contained in a light blue circle or square.
- **Course Cards:** Include an image header with a 16px bottom margin to the text content.

### Inputs & Forms
- **Fields:** 48px height, 8px rounded corners, 1px gray border. On focus, the border shifts to Primary Blue with a subtle outer glow.
- **Labels:** Positioned above the field in `label-md` style using the Neutral gray.

### Navigation & Tabs
- **Top Nav:** Clean white background with a subtle bottom border. Active links should be Primary Blue with an optional 2px bottom underline.
- **Vertical Tabs:** Used for FAQ or specialized filtering, utilizing a "pill" or "bar" indicator on the left side to show the active state.

### Specialized Components
- **Framework Graphics:** Use connected circular nodes to represent processes (e.g., the CAT Framework), maintaining the primary blue for the connecting lines to reinforce brand identity.
- **Trust Bar:** A horizontal scroll or grid of grayscale logos for partner organizations, maintaining a maximum height of 40px per logo for uniformity.