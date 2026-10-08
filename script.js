// creating the varaibles for the theme toggle button
const root = document.documentElement;
const toggleButton = document.getElementById("theme-toggle");
const icon = toggleButton.querySelector(".theme-toggle__icon");
const label = toggleButton.querySelector(".theme-toggle__label");


// applies the theme to the page and saves it to localStorage when requested 
function applyTheme(theme, save = true) {
  root.setAttribute("data-theme", theme);

  const isDark = theme === "dark";
  icon.textContent = isDark ? "☀️" : "🌙";
  label.textContent = isDark ? "Light mode" : "Dark mode";
  toggleButton.setAttribute("aria-pressed", String(isDark));

  if (!save) return;

  try {
    localStorage.setItem("theme", theme);
  } catch (e) {
    // Storage unavailable (e.g. private mode) — the toggle still works for this visit
  }
}

toggleButton.addEventListener("click", () => {
  const current = root.getAttribute("data-theme");
  applyTheme(current === "dark" ? "light" : "dark");
});

// Sync the button with whatever theme the inline script in <head> chose
applyTheme(root.getAttribute("data-theme") || "light", false);
