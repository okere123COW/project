const css = `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", Arial, sans-serif;
}

:root {
  --page-bg: #fff8e7;
  --text: #111827;
  --muted: #667085;
  --card-bg: #ffffff;
  --border: rgba(244, 180, 0, 0.18);
  --surface: #f7f9fc;
  --primary: #f4b400;
  --primary-alt: #ffb703;
  --secondary: #111827;
  --accent: #7c3aed;
  --shadow: 0 18px 40px rgba(15, 23, 42, 0.12);
  --input-bg: #f8fafc;
  --button-hover: rgba(255, 255, 255, 0.22);
}

html {
  scroll-behavior: smooth;
}

body {
  background: linear-gradient(135deg, #f7f9fc 0%, #eef2f7 100%);
  color: var(--text);
  line-height: 1.6;
  overflow-x: hidden;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.scroll-to-top {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #f4b400, #ff9800);
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  font-size: 20px;
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 99;
  box-shadow: 0 8px 25px rgba(244, 180, 0, 0.3);
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.scroll-to-top:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(244, 180, 0, 0.4);
}

.scroll-to-top.show {
  display: flex;
  animation: slideInUp 0.5s ease forwards;
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;
  padding: 80px 0;
  min-height: 90vh;
  animation: slideInDown 0.8s ease;
}

.hero-content h1 {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 15px;
  color: #111827;
  background: linear-gradient(135deg, #111827, #f4b400);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.15;
  animation: slideInUp 0.8s ease 0.1s both;
  text-transform: capitalize;
  letter-spacing: -0.5px;
}

.hero-subtitle {
  font-size: 1.3rem;
  color: #f4b400;
  font-weight: 600;
  margin-bottom: 25px;
  animation: slideInUp 0.8s ease 0.15s both;
  letter-spacing: 0.5px;
}

.benefit-list {
  list-style: none;
  margin: 30px 0;
  animation: slideInUp 0.8s ease 0.25s both;
}

.benefit-list li {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 14px;
  font-size: 1.05rem;
  color: #444;
  font-weight: 500;
}

.benefit-list li::before {
  content: '✓';
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background: linear-gradient(135deg, #f4b400, #ff9800);
  color: white;
  border-radius: 50%;
  font-weight: bold;
  flex-shrink: 0;
  font-size: 14px;
}

.trust-badges {
  display: flex;
  gap: 25px;
  margin-top: 40px;
  padding-top: 30px;
  border-top: 2px solid rgba(244, 180, 0, 0.2);
  animation: slideInUp 0.8s ease 0.3s both;
  flex-wrap: wrap;
}

.badge {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.badge-number {
  font-size: 1.8rem;
  font-weight: 800;
  background: linear-gradient(135deg, #f4b400, #ff9800);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.badge-label {
  font-size: 0.9rem;
  color: #666;
  font-weight: 500;
  text-align: center;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-size: 0.78rem;
  font-weight: 700;
  color: #f4b400;
  margin-bottom: 15px;
  animation: slideInUp 0.8s ease both;
}

.hero-copy {
  font-size: 1.2rem;
  color: #666;
  line-height: 1.8;
  margin-bottom: 30px;
  animation: slideInUp 0.8s ease 0.2s both;
}

.hero-actions {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  animation: slideInUp 0.8s ease 0.3s both;
}

.btn {
  padding: 16px 34px;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 700;
  transition: transform 0.28s ease, box-shadow 0.28s ease, background-color 0.28s ease, color 0.28s ease;
  border: none;
  cursor: pointer;
  font-size: 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  position: relative;
  overflow: hidden;
  box-shadow: var(--shadow);
}

.btn::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: var(--button-hover);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.55s ease, height 0.55s ease, opacity 0.35s ease;
  opacity: 0;
}

.btn:hover::before {
  width: 320px;
  height: 320px;
  opacity: 1;
}

.btn:hover {
  transform: translateY(-2px) scale(1.01);
}

.btn:active {
  transform: translateY(0) scale(0.98);
}

.btn:focus-visible {
  outline: 2px solid rgba(124, 58, 237, 0.6);
  outline-offset: 4px;
}

.btn-primary {
  background: linear-gradient(135deg, #f4b400, #f5c43b);
  color: white;
  box-shadow: 0 18px 45px rgba(244, 180, 0, 0.25);
  font-size: 1.05rem;
  padding: 18px 40px;
}

.btn-primary:hover {
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 22px 56px rgba(244, 180, 0.35);
}

.btn-secondary {
  border: 2px solid rgba(17, 24, 39, 0.15);
  color: #111827;
  background: rgba(255, 255, 255, 0.92);
  box-shadow: 0 14px 30px rgba(17, 24, 39, 0.08);
}

.btn-secondary:hover {
  background: #111827;
  color: white;
  transform: translateY(-3px) scale(1.01);
  box-shadow: 0 22px 45px rgba(17, 24, 39, 0.18);
}

.hero-panel {
  animation: fadeInScale 0.8s ease 0.2s both;
}

.panel-card {
  background: linear-gradient(135deg, #ffffff 0%, #fafbff 100%);
  border-radius: 25px;
  padding: 45px 40px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  border: 2px solid rgba(244, 180, 0, 0.15);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.panel-card::before {
  content: '';
  position: absolute;
  top: -100%;
  right: -100%;
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(244, 180, 0, 0.1) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
}

.panel-card:hover {
  border-color: #f4b400;
  box-shadow: 0 30px 80px rgba(244, 180, 0, 0.2);
  transform: translateY(-5px);
}

.panel-card h2 {
  font-size: 1.95rem;
  margin-bottom: 10px;
  color: #111827;
  font-weight: 700;
  position: relative;
  z-index: 1;
}

.panel-card-subtitle {
  font-size: 0.95rem;
  color: #f4b400;
  font-weight: 600;
  margin-bottom: 20px;
  position: relative;
  z-index: 1;
}

.panel-card p {
  color: #666;
  margin-bottom: 15px;
  line-height: 1.7;
  position: relative;
  z-index: 1;
}

.form-benefits {
  background: rgba(244, 180, 0, 0.08);
  border-left: 4px solid #f4b400;
  padding: 15px;
  border-radius: 12px;
  margin-bottom: 20px;
  font-size: 0.95rem;
  color: #444;
  position: relative;
  z-index: 1;
}

.form-benefits strong {
  color: #111827;
}

form {
  display: grid;
  gap: 15px;
  position: relative;
  z-index: 1;
}

label {
  font-weight: 600;
  color: #111827;
  font-size: 0.95rem;
}

input, select {
  width: 100%;
  border: 2px solid #e0e7ff;
  border-radius: 12px;
  padding: 12px 15px;
  font-size: 1rem;
  transition: all 0.3s ease;
  font-family: "Poppins", inherit;
}

input:focus, select:focus {
  outline: none;
  border-color: #f4b400;
  box-shadow: 0 0 0 4px rgba(244, 180, 0, 0.1);
  transform: scale(1.02);
}

.password-field {
  display: flex;
  gap: 10px;
  align-items: center;
}

.password-field input {
  flex: 1;
}

.password-toggle {
  padding: 12px 15px;
  border: 2px solid #e0e7ff;
  border-radius: 12px;
  background: white;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
}

.password-toggle:hover {
  border-color: #f4b400;
  background: #f4b400;
  color: white;
}

.form-note {
  font-size: 0.85rem;
  color: #999;
  margin-top: -10px;
}

.form-message {
  min-height: 2.4rem;
  margin-top: 10px;
  padding: 10px 15px;
  border-radius: 12px;
  font-weight: 600;
  display: none;
}

.form-message.success {
  background: #d1fae5;
  color: #065f46;
  border-left: 4px solid #10b981;
  display: block;
}

.form-message.error {
  background: #fee2e2;
  color: #7f1d1d;
  border-left: 4px solid #ef4444;
  display: block;
}

@media (max-width: 768px) {
  .hero-content {
    grid-template-columns: 1fr;
    padding: 40px 0;
    min-height: auto;
    gap: 30px;
  }

  .hero-content h1 {
    font-size: 2.2rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .benefit-list li {
    font-size: 0.95rem;
  }

  .trust-badges {
    gap: 15px;
  }

  .badge-number {
    font-size: 1.5rem;
  }

  .badge-label {
    font-size: 0.8rem;
  }

  .scroll-to-top {
    bottom: 20px;
    right: 20px;
    width: 45px;
    height: 45px;
    font-size: 18px;
  }
}

#theme-toggle {
  position: fixed;
  top: 18px;
  right: 18px;
  width: 46px;
  height: 46px;
  border-radius: 14px;
  border: none;
  background: rgba(255, 255, 255, 0.98);
  color: #111827;
  box-shadow: 0 20px 45px rgba(17, 24, 39, 0.12);
  cursor: pointer;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  transition: transform 0.25s ease, background-color 0.25s ease, color 0.25s ease;
}

#theme-toggle:hover {
  transform: translateY(-3px);
  background: #f4b400;
  color: #111827;
}

[data-theme="dark"] {
  --shadow: 0 18px 45px rgba(0, 0, 0, 0.45);
  --button-hover: rgba(255, 255, 255, 0.08);
}

[data-theme="dark"] body {
  background: radial-gradient(circle at top, #111827 0%, #050814 100%);
  color: #e6eef8;
}

[data-theme="dark"] .panel-card {
  background: rgba(10, 18, 35, 0.92);
  border-color: rgba(124, 58, 237, 0.18);
  box-shadow: 0 25px 80px rgba(0, 0, 0, 0.35);
}

[data-theme="dark"] .btn-primary {
  background: linear-gradient(135deg, #7c3aed, #6d28d9);
  box-shadow: 0 18px 40px rgba(124, 58, 237, 0.35);
}

[data-theme="dark"] .btn-secondary {
  color: #e2e8f0;
  border-color: rgba(148, 163, 184, 0.28);
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 14px 30px rgba(15, 23, 42, 0.35);
}

[data-theme="dark"] .btn-secondary:hover {
  background: rgba(124, 58, 237, 0.95);
  color: white;
}

[data-theme="dark"] input,
[data-theme="dark"] select {
  background: rgba(15, 23, 42, 0.9);
  border-color: rgba(148, 163, 184, 0.22);
  color: #e6eef8;
}

[data-theme="dark"] .password-toggle {
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(148, 163, 184, 0.2);
  color: #e2e8f0;
}

[data-theme="dark"] #theme-toggle {
  background: rgba(15, 23, 42, 0.94);
  color: #e6eef8;
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.35);
}

[data-theme="dark"] .password-toggle:hover {
  background: rgba(124, 58, 237, 0.95);
  color: white;
}

.hero {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeUp 1s ease forwards;
}

@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
`;

const styleElement = document.createElement('style');
styleElement.textContent = css;
document.head.appendChild(styleElement);
