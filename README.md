# 🏛️ Sovereign: Executive Education Platform

Sovereign is a high-fidelity landing page I built to explore how "premium" a web experience can feel using modern tools. It's designed for the executive education space — where trust, authority, and "quiet luxury" are the most important values.

**🌍 Live Demo:** [https://assignment-three-sepia.vercel.app/](https://assignment-three-sepia.vercel.app/)

---

## 🚀 Getting Started

1. **Clone the project:**
   ```bash
   git clone [your-repo-link]
   cd assignment
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run locally:**
   ```bash
   npm run dev
   ```

4. **View in browser:** Open [http://localhost:3000](http://localhost:3000)

---

## 🛠️ My Approach (The Human Side)

I didn't just want to follow a tutorial — I wanted to build something that felt like a real, high-end product. Here's some of the actual problem-solving I went through:

- **Learning the "Vibe" of White Space:** I used to cram a lot of information into small spaces. While researching this project, I realized high-end sites rely heavily on "Macro-Gaps" (lots of empty space). I drastically increased paddings to give the brand an elite, clean feel — something that felt uncomfortable at first but made a huge difference.

- **Wrestling with the Timeline Layout Crash:** I hit a massive roadblock when the text in my methodology section completely overlapped and broke on tablets. Instead of using a hacky fix, I studied and implemented a strict **3-column CSS Grid** (`grid-cols-[1fr_auto_1fr]`). It was a huge lightbulb moment to see every element lock into its own lane, no matter the screen size.

- **Fluid Typography Without Cutoffs:** The heading "C-Suite Leadership" was getting clipped on small phones. I replaced static font sizes with a CSS `clamp()` value (`text-[clamp(2rem,8vw,3.5rem)]`) so the text scales proportionally between any two viewport widths — no more cutoffs.

- **Adding Polish with Animation:** Tracking down how to make the "active" highlight physically *slide* from one nav link to another was tricky. Using Framer Motion's `layoutId` on the pill indicator solved it cleanly — one animated div that teleports between links rather than fading each one in and out.

- **Mobile Navigation Engineering:** I moved away from a standard side-drawer and built a custom **Mobile Bottom-Sheet**. I used Framer Motion's `AnimatePresence` to ensure the menu unmounts cleanly, preventing "phantom" elements that often plague mobile nav. I also implemented a **Body-Scroll Lock** (`document.body.style.overflow = 'hidden'`) via a React `useEffect` so the background page doesn't scroll behind the open menu — a small detail that makes the difference between a generic site and a premium application.

- **Scroll-Aware Progress Line:** In the Methodology section, the vertical line "draws" itself as you scroll down the page. I used Framer Motion's `useScroll` and `useTransform` to map scroll progress (0 → 1) directly to line height (0% → 100%). Getting the `containerRef` attached to a `position: relative` element was key — Framer Motion throws a warning without it.

---

## 🤖 How I Used AI

I used AI as a high-speed execution partner — not to generate the project, but to help me ship my own ideas faster.

- **Component Scaffolding:** For complex sections like the Bento Grid, I described the layout and vibe I wanted. The AI gave me a starting structure which I manually tweaked for spacing, color, and hierarchy.
- **Debugging Logic:** When the scroll-progress line wasn't drawing correctly, I worked with the AI to trace why `useTransform` wasn't picking up the right offsets. The fix (moving the ref to the outer `<section>`) came from that debugging session.
- **Real-World Content:** I used AI to write realistic course descriptions and executive testimonials. Having real copy instead of Lorem Ipsum let me properly judge how the typography would feel in production.
- **Refining Mobile UX:** I described the "stuck menu" problem I was seeing on mobile. The AI explained the Body-Scroll Lock pattern and helped me implement it cleanly with a cleanup function in `useEffect`.

---

## 🔮 What I'd Improve with More Time

- **Headless CMS:** All text is currently hardcoded. I'd migrate it to Sanity so non-technical users could update course listings and pricing without touching code.
- **Interactive CAT Assessment:** I'd turn the assessment section into a real multi-step quiz that generates a personalised PDF report at the end.
- **Performance Audit:** I'd run a full Lighthouse audit and implement dynamic imports and image optimization to target a 100/100 score.
- **Dark Mode:** A "Deep Navy" dark mode using Tailwind's `dark:` utilities would suit this brand perfectly and demonstrate a more mature theming system.
- **Backend Integration:** Connect the "Request Demo" CTA to a real form handler (e.g. Resend for emails) with server-side validation.
