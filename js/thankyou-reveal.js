/* ============================================================
   thankyou-reveal.js — Slide the thank-you section up over the damask
   Starts as soon as the splash is tapped. No scrolling.
   ============================================================ */

export function initThankYouReveal() {
    const el = document.querySelector('.section-thankyou');
    if (!el) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const show = () => { el.classList.add('visible'); };

    if (reduced) {
        show();
        return;
    }

    requestAnimationFrame(show);
}
