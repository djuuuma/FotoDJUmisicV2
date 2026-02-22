# 🎨 Foto Đumišić — Design System & Color Palette Guide

> **Purpose:** This document defines the visual language, color palette, typography, spacing, animation, and component patterns used across the Foto Đumišić website. **Any AI agent implementing new features MUST follow these guidelines** to ensure visual consistency.

---

## Tech Stack

| Layer         | Technology                                       |
|---------------|--------------------------------------------------|
| Framework     | React 19 + TypeScript                            |
| Build         | Vite 6                                           |
| Styling       | **Tailwind CSS v4** (imported via `@tailwindcss`) |
| Animations    | **Motion (Framer Motion)** — `motion/react`      |
| Icons         | **Lucide React** (`lucide-react`)                |
| Routing       | React Router DOM v7                              |
| Fonts         | Google Fonts (loaded in `index.css`)             |

---

## 1. Color Palette

All colors are defined as CSS custom properties inside the `@theme` block in `src/index.css`. **Always use the Tailwind token names** (e.g., `text-gold`, `bg-charcoal`), never raw hex values.

### Core Colors

| Token          | Hex         | Usage                                                   |
|----------------|-------------|----------------------------------------------------------|
| `cream`        | `#F9F6F0`   | Primary light text (on dark backgrounds), hero text, navbar links, CTA text |
| `charcoal`     | `#1A1A1A`   | Primary dark background, navbar bg (scrolled), footer bg, dark overlays |
| `gold`         | `#C5A059`   | Accent color — section labels, active nav links, icon accents, hover states, decorative lines |
| `ivory`        | `#F3EFE7`   | Alternate light section background (services, testimonials, philosophy cards, contact form bg) |
| `background`   | `#FFFFFF`   | Default page background (white)                         |
| `foreground`   | `#1A1A1A`   | Default body text on light backgrounds                  |
| `muted`        | `#737373`   | Subdued text — testimonial sources, form labels, secondary information |

### Opacity Modifiers (Commonly Used)

These are applied via Tailwind's opacity syntax (`color/opacity`):

| Pattern             | Where Used                                          |
|---------------------|------------------------------------------------------|
| `text-cream/90`     | Hero subtitle, secondary light text                 |
| `text-cream/80`     | CTA descriptions                                    |
| `text-cream/70`     | Footer text, service card subtitle, "Foto" in preloader |
| `text-cream/60`     | Footer tagline                                      |
| `text-cream/40`     | Footer section headings, copyright text             |
| `text-cream/10`     | Footer border divider                               |
| `text-foreground/80`| Body text on light backgrounds (`editorial-body`)   |
| `text-muted/50`     | Input placeholder text                              |
| `text-muted/70`     | Fine print / disclaimer text                        |
| `bg-charcoal/80`    | CTA dark overlay                                    |
| `bg-charcoal/60`    | Hero gradient overlay top                           |
| `bg-charcoal/40`    | About page hero overlay, portfolio lightbox image hover |
| `bg-charcoal/30`    | Hero gradient overlay middle                        |
| `bg-charcoal/95`    | Portfolio lightbox backdrop                         |
| `bg-charcoal/90`    | Scrolled navbar background                          |
| `bg-cream/20`       | Ghost button background on dark bg (primary CTA)    |
| `bg-cream/10`       | Secondary button hover on dark bg                   |
| `border-cream/40`   | Ghost button border on dark bg                      |
| `border-cream/50`   | Secondary ghost button border                       |
| `border-muted/20`   | Card borders, map container border                  |
| `border-muted/30`   | Form input borders                                  |
| `border-muted/10`   | Contact form container border                       |
| `border-charcoal/20`| Filter button inactive border                       |
| `selection:bg-gold/30`| Text selection highlight                          |

### Status Colors (Only used in form feedback)

| Color              | Usage                     |
|--------------------|---------------------------|
| `bg-green-50`      | Success message background |
| `text-green-800`   | Success message text       |
| `border-green-200` | Success message border     |
| `bg-red-50`        | Error message background   |
| `text-red-800`     | Error message text         |
| `border-red-200`   | Error message border       |

---

## 2. Typography

### Font Families

| Token        | Font                    | Usage                                  |
|--------------|-------------------------|----------------------------------------|
| `font-serif` | **Cormorant Garamond**  | All headings (`h1`–`h6`), brand logo, decorative numbers, quotes |
| `font-sans`  | **Inter**               | Body text, buttons, labels, navigation links |

### Heading Styles

- **Hero H1:** `font-serif text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight`
- **Page H1 (subpages):** `font-serif text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight`
- **Section Heading (editorial-subheading):** `font-serif text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-6`
- **Card/Form H3:** `font-serif text-2xl`
- **Italic emphasis:** Frequently used inside headings via `<span className="italic">` on key words

### Body Text Style (`editorial-body`)

```
font-sans text-base md:text-lg font-light leading-relaxed text-foreground/80
```

### Label/Overline Style (Section labels)

```
text-sm tracking-widest uppercase text-gold mb-4 block
```

### Navigation Link Style

```
text-sm tracking-widest uppercase font-light link-underline text-cream
```
Active state: `text-gold`

---

## 3. Spacing & Layout

### Container

```
container-editorial → max-w-7xl mx-auto px-6 md:px-12 lg:px-20
```

### Section Padding

```
section-padding → py-24 md:py-32
```

### Grid Patterns

| Layout                     | Classes                                              |
|----------------------------|------------------------------------------------------|
| Two-column content         | `grid lg:grid-cols-2 gap-12 lg:gap-20 items-center`  |
| Two-column wide gap        | `grid lg:grid-cols-2 gap-16 lg:gap-24`               |
| Three-column cards         | `grid md:grid-cols-3 gap-6 lg:gap-8`                 |
| Three-column square cards  | `grid grid-cols-1 md:grid-cols-3 gap-8`              |
| Portfolio masonry          | `columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4` |
| Portfolio grid (home)      | `grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4` |
| Contact info grid          | `grid sm:grid-cols-2 gap-8`                          |

---

## 4. Button Variants

### Primary CTA (On Dark Background)

```
inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium
transition-all duration-300 bg-cream/20 text-cream border border-cream/40 backdrop-blur-sm
hover:bg-cream hover:text-charcoal tracking-widest uppercase text-xs font-sans h-14 px-10 py-4
```

### Secondary / Ghost (On Dark Background)

```
inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium
transition-all duration-300 text-cream border border-cream/50 backdrop-blur-sm
hover:bg-cream/10 hover:text-cream tracking-widest uppercase text-xs font-sans h-14 px-10 py-4 bg-transparent
```

### Outline Button (On Light Background)

```
inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium
transition-all duration-300 border border-charcoal text-charcoal bg-transparent
hover:bg-charcoal hover:text-cream tracking-widest uppercase text-xs font-sans h-12 px-8 py-3
```

### Submit / Solid Button

```
w-full inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium
transition-all duration-300 bg-charcoal text-cream hover:bg-gold tracking-widest uppercase
text-xs font-sans h-14 px-10 disabled:opacity-70 disabled:cursor-not-allowed
```

### Filter Pill Button

```
px-6 py-2 rounded-full text-xs tracking-widest uppercase transition-all duration-300 border
```
- **Active:** `bg-charcoal text-cream border-charcoal`
- **Inactive:** `bg-transparent text-charcoal border-charcoal/20 hover:border-charcoal`

### Common Button Traits

- Always `uppercase tracking-widest text-xs font-sans font-medium`
- Always `transition-all duration-300`
- Always `rounded-md` (except filter pills which are `rounded-full`)
- Standard height: `h-12` (small) or `h-14` (large)

---

## 5. Animation & Motion Patterns

### Library

All animations use **Motion** (`motion/react`, formerly Framer Motion).

### FadeIn Component (Scroll Reveal)

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.7, delay, ease: "easeOut" }}
>
```
- Used via `<FadeIn delay={0.2}>` wrapper component
- Standard stagger: increment `delay` by `0.1` or `0.2` per item

### Page/Modal Transitions

```tsx
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
exit={{ opacity: 0 }}
transition={{ duration: 0.3 }}
```

### Image Hover Zoom

```css
.image-hover-zoom → overflow-hidden
.image-hover-zoom img → transition-transform duration-700 hover:scale-105
```

### Link Underline Animation

```css
.link-underline → animated underline from right-to-left on hover (scale-x transform, duration-300)
```

### Preloader Animation

- Full-screen `bg-charcoal` with `z-[999]`
- Logo fades in with blur-to-clear effect (`filter: 'blur(10px)'` → `'blur(0px)'`)
- Gold decorative line animates width from `0` to `100%`
- Exit: opacity fade over `0.8s` with `easeInOut`

### Common Transition Durations

| Duration | Used For                                |
|----------|-----------------------------------------|
| `300ms`  | Colors, borders, button hovers, opacity |
| `500ms`  | Navbar background/padding transitions   |
| `700ms`  | Image scale transforms, grayscale       |

---

## 6. Section Layout Patterns

### Hero Section (Full-screen with overlay)

```
- Full viewport height: h-screen (home) or h-[60vh] md:h-[70vh] (subpages)
- Background image covering full area
- Gradient overlay: bg-gradient-to-b from-charcoal/60 via-charcoal/30 to-charcoal/80
- Content centered with text-cream
- Section labels in gold uppercase
```

### Alternating Light/Dark Sections

```
Section 1: bg-background (white)
Section 2: bg-ivory (#F3EFE7)
Section 3: bg-background (white)
Section 4: bg-ivory (#F3EFE7)
...repeat pattern
```

### Dark CTA / Contact Hero

```
bg-charcoal text-cream with optional background image at reduced opacity
Content centered, max-w-2xl for descriptions
```

### Section Entry Pattern

Every section consistently starts with:
1. **Label:** `<span className="text-sm tracking-widest uppercase text-gold mb-4 block">Label</span>`
2. **Heading:** `<h2 className="editorial-subheading text-foreground">Title <span className="italic">emphasis</span></h2>`
3. **Optional body text** below

---

## 7. Component Patterns

### Card (Philosophy / Feature Cards)

```
p-8 border border-muted/20 hover:border-gold transition-colors duration-500
rounded-sm bg-ivory aspect-square flex flex-col items-center justify-center text-center group
```
- Numbered with: `font-serif text-5xl text-gold opacity-70 group-hover:opacity-100`

### Image Card (Service Cards)

```
group block relative overflow-hidden aspect-[3/4] rounded-sm
- Full-bleed image with gradient overlay: bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent
- Text positioned: absolute bottom-0 left-0 right-0 p-8
- Hover: image scale-105, label color → text-gold
```

### Form Inputs

```
w-full bg-background border border-muted/30 p-4 font-light
focus:outline-none focus:border-gold transition-colors
placeholder:text-muted/50
```

### Form Labels

```
text-xs uppercase tracking-widest text-muted font-medium
```

### Form Container

```
bg-ivory p-8 md:p-12 rounded-sm border border-muted/10
```

### Lightbox / Modal Overlay

```
fixed inset-0 z-[100] bg-charcoal/95 backdrop-blur-sm flex items-center justify-center
```

### Decorative Gold Line (Separator)

```
h-px w-24 bg-gold
(or) h-[1px] bg-gold (animated width for preloader)
```

---

## 8. Design Principles

### Visual Identity

1. **Editorial / Luxury aesthetic** — think high-end photography magazine
2. **Warm neutrals** — cream, ivory, charcoal — with gold as the only accent
3. **Never use bright or saturated colors** — keep everything muted and elegant
4. **Generous whitespace** — large padding (`py-24 md:py-32`), wide gaps
5. **Minimal rounded corners** — use `rounded-sm` for subtle softness, never fully rounded (except filter pills)

### Text Hierarchy Rules

1. Labels/overlines always: `text-sm tracking-widest uppercase text-gold`
2. Headings always: `font-serif font-medium tracking-tight`
3. Body always: `font-sans font-light leading-relaxed text-foreground/80`
4. Use `italic` on one key word in headings for editorial flair
5. Buttons always: `font-sans text-xs uppercase tracking-widest font-medium`

### Image Treatment

1. All images use `object-cover` for consistent framing
2. Hover effect: `scale-105` over `duration-700`
3. Grayscale-to-color is used on specific images (map, about page old camera)
4. Portfolio uses lazy loading with blur-to-sharp reveal

### Dark vs Light Context Rules

| Context        | Background      | Text       | Accent        | Borders         |
|----------------|-----------------|------------|---------------|-----------------|
| Light sections | `bg-background` or `bg-ivory` | `text-foreground` | `text-gold` | `border-muted/*` or `border-charcoal/*` |
| Dark sections  | `bg-charcoal`   | `text-cream` | `text-gold` | `border-cream/*` |

### Mobile Responsiveness

- Breakpoints follow Tailwind defaults: `sm:`, `md:`, `lg:`, `xl:`
- Mobile menu is a full-screen charcoal overlay with centered navigation
- Typography scales down responsively (e.g., `text-4xl md:text-5xl lg:text-7xl`)
- Grid columns collapse: `grid-cols-1` → `md:grid-cols-2/3` → `lg:grid-cols-3/4`

---

## 9. Quick Reference — Tailwind Config (`src/index.css`)

```css
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap');
@import "tailwindcss";

@theme {
  --font-serif: "Cormorant Garamond", serif;
  --font-sans: "Inter", sans-serif;

  --color-cream: #F9F6F0;
  --color-charcoal: #1A1A1A;
  --color-gold: #C5A059;
  --color-ivory: #F3EFE7;
  --color-background: #FFFFFF;
  --color-foreground: #1A1A1A;
  --color-muted: #737373;
}
```

### Custom Utility Classes

| Class               | Purpose                    |
|---------------------|----------------------------|
| `container-editorial` | Max-width container with responsive padding |
| `section-padding`     | Vertical section padding  |
| `editorial-subheading`| Section heading style     |
| `editorial-body`      | Body paragraph style      |
| `link-underline`      | Animated underline on hover |
| `image-hover-zoom`    | Container + image zoom effect |

---

## 10. Do's and Don'ts

### ✅ DO

- Use the defined color tokens (`text-gold`, `bg-charcoal`, etc.)
- Follow the section alternation pattern (`bg-background` ↔ `bg-ivory`)
- Use `<FadeIn>` wrapper for scroll-triggered content
- Keep buttons uppercase with wide letter-spacing
- Use `font-serif` for headings and `font-sans` for everything else
- Add `italic` emphasis on one word in section headings
- Use `backdrop-blur-sm` on overlays
- Use Lucide React for any new icons

### ❌ DON'T

- Introduce new colors outside the palette (no blues, reds, purples, etc.)
- Use `rounded-lg` or `rounded-xl` — stick to `rounded-sm` or `rounded-md`
- Use bold (`font-bold`) — the heaviest weight used is `font-medium`
- Add shadows to cards — borders with `border-muted/20` are preferred
- Use inline styles — everything should use Tailwind classes
- Skip the `<FadeIn>` animation on new content sections
- Use different animation libraries — stick to `motion/react`
