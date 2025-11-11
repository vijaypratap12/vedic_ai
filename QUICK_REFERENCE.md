# 🚀 Quick Reference Guide - Modern Theme

## 🎨 Color Variables

### Primary Colors
```css
var(--primary-color)      /* #00d4ff - Cyan */
var(--primary-dark)       /* #0099cc */
var(--primary-light)      /* #33ddff */
```

### Secondary Colors
```css
var(--secondary-color)    /* #7c3aed - Purple */
var(--secondary-dark)     /* #5b21b6 */
var(--secondary-light)    /* #a78bfa */
```

### Accent Colors
```css
var(--accent-cyan)        /* #00f5ff */
var(--accent-purple)      /* #c026d3 */
var(--accent-pink)        /* #ec4899 */
var(--accent-orange)      /* #f97316 */
var(--accent-green)       /* #10b981 */
```

### Backgrounds
```css
var(--bg-dark)            /* #0a0e27 */
var(--bg-darker)          /* #050810 */
var(--bg-card)            /* rgba(26, 31, 58, 0.6) */
var(--bg-glass)           /* rgba(255, 255, 255, 0.05) */
```

### Text
```css
var(--text-primary)       /* #ffffff */
var(--text-secondary)     /* #b0b8d4 */
var(--text-muted)         /* #6b7280 */
```

### Effects
```css
var(--border-color)       /* rgba(0, 212, 255, 0.2) */
var(--border-glow)        /* rgba(0, 212, 255, 0.4) */
var(--shadow-glow)        /* 0 0 20px rgba(0, 212, 255, 0.3) */
var(--shadow-card)        /* 0 8px 32px rgba(0, 0, 0, 0.4) */
```

---

## 🧩 Common Classes

### Layout
```css
.container              /* Max-width container with padding */
.section                /* Section with vertical padding */
.section-alt            /* Section with background */
.grid                   /* CSS Grid layout */
.grid-2, .grid-3, .grid-4  /* Auto-fit grid columns */
```

### Flex Utilities
```css
.flex                   /* Display flex */
.flex-center            /* Center items */
.flex-between           /* Space between */
.flex-column            /* Column direction */
.flex-wrap              /* Allow wrapping */
```

### Cards
```css
.card                   /* Glassmorphism card */
.card-header            /* Card header section */
.card-icon              /* Animated icon container */
```

### Buttons
```css
.btn                    /* Base button */
.btn-primary            /* Gradient button */
.btn-secondary          /* Glass button */
.btn-outline            /* Outlined button */
.btn-large              /* Larger button */
.btn-small              /* Smaller button */
```

### Badges
```css
.badge                  /* Base badge */
.badge-primary          /* Primary colored badge */
.badge-success          /* Success badge */
.badge-warning          /* Warning badge */
.badge-info             /* Info badge */
```

### Text Utilities
```css
.text-center            /* Center align text */
.text-left              /* Left align text */
.text-right             /* Right align text */
.sanskrit               /* Sanskrit text styling */
```

### Spacing
```css
.mt-1, .mt-2, .mt-3, .mt-4    /* Margin top */
.mb-1, .mb-2, .mb-3, .mb-4    /* Margin bottom */
.pt-1, .pt-2, .pt-3, .pt-4    /* Padding top */
.pb-1, .pb-2, .pb-3, .pb-4    /* Padding bottom */
```

### Animations
```css
.fade-in                /* Fade in animation */
.fade-in-up             /* Fade in from bottom */
.glow                   /* Glow effect */
```

---

## 🎭 Common Patterns

### Creating a Glassmorphism Card
```css
.my-card {
  background: var(--bg-card);
  backdrop-filter: blur(20px);
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid var(--border-color);
  transition: all 0.4s ease;
}

.my-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-glow);
  border-color: var(--border-glow);
}
```

### Gradient Text
```css
.gradient-text {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

### Glowing Button
```css
.glow-button {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  box-shadow: 0 4px 15px rgba(0, 212, 255, 0.4);
  transition: all 0.3s ease;
}

.glow-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 25px rgba(0, 212, 255, 0.6);
}
```

### Floating Animation
```css
.floating-element {
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}
```

---

## 📱 Responsive Breakpoints

```css
/* Desktop */
@media (min-width: 1024px) { }

/* Tablet */
@media (max-width: 1024px) { }

/* Mobile */
@media (max-width: 768px) { }

/* Small Mobile */
@media (max-width: 480px) { }
```

---

## 🎯 Quick Tips

### 1. Always use CSS variables for colors
```css
/* ✅ Good */
color: var(--primary-color);

/* ❌ Bad */
color: #00d4ff;
```

### 2. Use transitions for smooth effects
```css
.element {
  transition: all 0.3s ease;
}
```

### 3. Add backdrop-filter for glassmorphism
```css
.glass-element {
  background: rgba(26, 31, 58, 0.6);
  backdrop-filter: blur(20px);
}
```

### 4. Use box-shadow for glow effects
```css
.glowing-element {
  box-shadow: 0 0 20px rgba(0, 212, 255, 0.3);
}
```

### 5. Combine gradients for depth
```css
.gradient-bg {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
}
```

---

## 🔧 Customization

### Changing Primary Color
Edit `src/styles/common.css`:
```css
:root {
  --primary-color: #YOUR_COLOR;
}
```

### Adjusting Animation Speed
```css
.card {
  transition: all 0.4s ease; /* Change 0.4s to your preference */
}
```

### Modifying Blur Intensity
```css
.card {
  backdrop-filter: blur(20px); /* Change 20px to your preference */
}
```

---

## 📝 File Locations

- **Colors & Variables**: `src/styles/common.css`
- **Navbar Styles**: `src/styles/navbar.css`
- **Footer Styles**: `src/styles/footer.css`
- **Home Page**: `src/styles/home.css`
- **Other Pages**: `src/styles/pages.css`
- **Reader Component**: `src/styles/reader.css`
- **Main Import**: `src/index.css`

---

## 🎨 Example Component

```jsx
// React Component
<div className="card fade-in-up">
  <div className="card-icon">
    <Icon />
  </div>
  <h3>Card Title</h3>
  <p>Card description text</p>
  <button className="btn btn-primary">
    Click Me
  </button>
</div>
```

---

## 🚀 Performance Tips

1. Use `will-change` for animated elements
2. Prefer `transform` over `top/left` for animations
3. Use `backdrop-filter` sparingly (can be expensive)
4. Optimize images and use lazy loading
5. Minimize repaints with CSS containment

---

**Last Updated**: November 2024

