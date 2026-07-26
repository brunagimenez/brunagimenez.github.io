const HEADER_OFFSET = 84;

export function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET;
  window.scrollTo({ top: Math.max(top, 0), behavior: 'smooth' });
}
