# 🔬 ClassWiz Studio — Scientific Calculator

> A feature-rich, visually stunning web-based scientific calculator inspired by the **Casio fx-991CW ClassWiz**, built with a **Monochrome / Stealth** glassmorphic UI and zero dependencies to install.

---

## 🚀 Quick Start

### Option 1 — Direct File (simplest)
Just double-click `index.html` in File Explorer. It opens directly in your browser.
> ⚠️ Voice input and camera scan require a server (Option 2).

### Option 2 — Local Server (recommended)
```bash
# Python (comes pre-installed on most systems)
python -m http.server 8080

# Then open in your browser:
http://localhost:8080
```

---

## 📁 Project Structure

```
s:/clasi/
├── index.html      ← Entire app (HTML + CSS + JS, self-contained ~90 KB)
└── README.md       ← This file
```

Everything — markup, styles, and logic — lives inside a single `index.html`.  
All external libraries are loaded from CDN (no npm, no build step).

---

## ✨ Features

### 🧮 Calculator Mode
| Feature | Details |
|---|---|
| **Standard arithmetic** | `+  −  ×  ÷  %  ^` with correct order of operations |
| **Scientific functions** | `sin  cos  tan  log  ln  sqrt  n!` |
| **Inverse trig (2nd layer)** | Tap **2nd** to toggle `sin⁻¹  cos⁻¹  tan⁻¹` |
| **DEG / RAD toggle** | Switch angle mode anytime |
| **Constants** | `π` and `e` built in |
| **Memory slots** | `M+  M−  MR  MC` with live badge indicator |
| **Live preview** | Shows `≈ result` as you type, before pressing `=` |
| **Answer recall** | `Ans` key reuses the last result |
| **Step-by-step explainer** | Tap **▸ Explain** after any calculation |
| **Copy result** | One-click clipboard copy with visual feedback |
| **Share card** | Downloads a styled PNG of your calculation |
| **Keyboard support** | Full keyboard input (see table below) |

### ⌨️ Keyboard Shortcuts
| Key | Action |
|---|---|
| `0–9  +  −  *  /  .  (  )  ^  %` | Input characters |
| `Enter` | Calculate `=` |
| `Backspace` | Delete last character |
| `Escape` | Clear all (AC) |
| `s` | Insert `sin(` |
| `c` | Insert `cos(` |
| `t` | Insert `tan(` |
| `l` | Insert `log(` |
| `n` | Insert `ln(` |
| `r` | Insert `sqrt(` |
| `p` | Insert `π` |

### 📈 Graph Mode
- Plot any function of `x` — e.g. `sin(x)*x`, `x^2 - 3`, `1/x`
- **Zoom in / out / reset** controls
- Graph re-renders on theme toggle (dark / light)
- **Equation Solver** panel:
  - **Quadratic** — solves `ax² + bx + c = 0` (real & complex roots)
  - **Linear System** — solves 2×2 simultaneous equations

### 🔄 Converter Mode
Supports 6 categories:

| Category | Units |
|---|---|
| Length | m, km, cm, mm, mi, yd, ft, in |
| Weight / Mass | kg, g, mg, lb, oz, ton |
| Temperature | °C, °F, K |
| Area | m², km², cm², ft², in², acre, hectare |
| Volume | L, mL, m³, gal, qt, pt, cup, fl oz |
| Time | s, ms, min, hr, day, week, year |

### 📷 Scan Mode (Image-to-Solve)
1. Tap the **Scan** tab
2. Upload a photo or drag & drop an image of a printed/handwritten expression
3. **Tesseract.js OCR** reads the expression automatically
4. Edit the recognized text if needed, then tap **Solve**

> Best results with clear, printed text. Complex handwriting may need a manual edit.

### 🎙️ Voice Input
- Tap the **microphone icon** (top right) and speak your calculation
- Supports natural language: *"twenty five times square root of nine"*
- Converts spoken words to math syntax automatically
- Visual pulse animation while listening
- Requires Chrome or Edge browser

> Voice input requires the page to be served over HTTP (use the local server).

### 📚 Formula Library (Left Sidebar)
A searchable reference of **80+ formulas** across 8 categories:
- Algebra
- Geometry & Mensuration
- Trigonometry
- Calculus
- Statistics & Probability
- Coordinate Geometry
- Physics
- Finance & Misc

Each formula has:
- **Insert (＋)** — loads a sample expression into the calculator
- **Copy** — copies the formula text to clipboard

---

## 🎨 Design

| Aspect | Details |
|---|---|
| **Theme** | Monochrome / Stealth — pure black, white, silver |
| **Light / Dark** | Toggle via the ☀️ sun icon (top right) |
| **Glassmorphism** | Frosted-glass panels with `backdrop-filter: blur` |
| **3D Keys** | Convex buttons with depth shadow + press animation |
| **Ambient orbs** | Slowly drifting dim grey glows in the background |
| **Responsive** | 2-column layout on ≥ 900 px; single column on mobile |
| **Fonts** | Space Grotesk (display) + Inter (UI) via Google Fonts |

---

## 📦 Libraries Used (all CDN — nothing to install)

| Library | Version | Purpose |
|---|---|---|
| [math.js](https://mathjs.org) | 11.11.0 | Safe expression evaluation & AST parsing |
| [Tesseract.js](https://tesseract.projectnaptha.com) | 4.1.1 | In-browser OCR for image scanning |
| [Google Fonts](https://fonts.google.com) | — | Inter + Space Grotesk typefaces |
| Web Speech API | Built-in | Voice input (Chrome / Edge) |
| Canvas API | Built-in | Graphing + share card generation |

---

## 🛠️ Development Notes

- **No build step** — edit `index.html` directly and refresh
- **No frameworks** — plain HTML, CSS, JavaScript
- **No backend** — fully client-side; all computation runs in the browser
- **Persistent memory** — `M+/M−/MR/MC` values persist for the session
- **Error handling** — friendly messages for divide-by-zero, domain errors, syntax errors with shake animation

---

## 🐛 Known Limitations

| Limitation | Workaround |
|---|---|
| OCR accuracy on handwriting | Edit the recognized text before solving |
| Voice input Firefox unsupported | Use Chrome or Edge |
| No live currency conversion | Static SI/physical unit factors only |
| Complex fractions in OCR | Retype as `a/b` syntax |

---

## 📄 License

This project is for personal / educational use.  
Built with ❤️ using ClassWiz Studio.
