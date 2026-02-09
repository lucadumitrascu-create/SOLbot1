# SOLbot Landing Page - Plan Complet pentru Dezvoltare

## 📋 OVERVIEW
Landing page pentru SOLbot - bot care creează tokeni virali pe Pump.fun
- **Preț**: 0.35 SOL
- **Autentificare**: Phantom Wallet
- **Stack**: HTML, CSS, JavaScript vanilla
- **Design**: Dark mode, crypto/futuristic vibe

---

## 🎨 STRUCTURA PAGINII

### 1. HEADER (sticky/fixed top)
**Componente:**
- Logo: "SOLbot" (text stylizat, stânga)
- Navigation menu (centru/dreapta):
  - Features
  - Reviews
  - FAQ
  - Pricing
- Button: "Connect Wallet" (dreapta, accent color cu glow)

**Design specs:**
- Background: rgba(10, 10, 15, 0.8) cu backdrop-blur
- Height: 80px
- Padding: 0 5%
- Box-shadow subtil
- Sticky pe scroll

---

### 2. HERO SECTION
**Content:**
- **Heading (H1)**: "SOLbot"
  - Font size: clamp(3rem, 8vw, 6rem)
  - Gradient text effect (purple → cyan)
  - Font weight: 800
  
- **Tagline**: "Create viral tokens on Pump.fun automatically"
  - Font size: clamp(1.2rem, 3vw, 1.8rem)
  - Color: #a0a0a0
  - Margin-top: 1rem
  
- **Subtitlu**: "Launch tokens that gain traction fast. Withdraw your profits anytime, on your terms."
  - Font size: 1.1rem
  - Color: #808080
  - Max-width: 600px
  - Margin-top: 1.5rem
  
- **Price Badge**: "0.35 SOL"
  - Pill shape, gradient border
  - Glow effect
  - Font size: 1.3rem
  - Margin-top: 2rem
  
- **CTA Button**: "Connect Wallet & Buy Access"
  - Large size (padding: 1.2rem 3rem)
  - Gradient background (purple → cyan)
  - Neon glow animation
  - Font size: 1.2rem
  - Border-radius: 50px
  - Margin-top: 2rem

**Design:**
- Min-height: 100vh
- Display: flex, align center
- Background: Deep dark (#0a0a0f) cu gradient overlay
- Geometric shapes (CSS): 2-3 abstract circles/blurs cu gradients în background
- Text align: center
- Padding: 0 5%

---

### 3. FEATURES SECTION

**Title**: "Why SOLbot?"
- Font size: clamp(2.5rem, 5vw, 3.5rem)
- Gradient text
- Text align: center
- Margin-bottom: 4rem

**4 Feature Cards:**

#### Card 1: Auto-Launch
- **Icon**: Rocket/Lightning (folosește Feather Icons sau heroicons CDN)
- **Title**: "Auto-Launch"
- **Description**: "Deploy tokens to Pump.fun with one click. No complex setup, no technical hassle."

#### Card 2: Viral Algorithm
- **Icon**: Trending-up/Activity
- **Title**: "Viral Algorithm"
- **Description**: "Built-in strategies to boost token popularity fast. Get your token noticed from day one."

#### Card 3: Instant Withdraw
- **Icon**: Dollar-sign/Zap
- **Title**: "Instant Withdraw"
- **Description**: "Pull your profits whenever you want, no locks, no waiting. Your money, your control."

#### Card 4: Smart Timing
- **Icon**: Clock/Target
- **Title**: "Smart Timing"
- **Description**: "Optimal launch windows for maximum traction. Launch when the market is ready."

**Card Design:**
- Display: grid (2x2 pe desktop, 1 coloană pe mobile)
- Gap: 2rem
- Card styling:
  - Background: rgba(255, 255, 255, 0.05)
  - Backdrop-filter: blur(10px)
  - Border: 1px solid rgba(255, 255, 255, 0.1)
  - Border-radius: 20px
  - Padding: 2.5rem
  - Hover: lift effect (translateY + glow border)
  - Transition: all 0.3s ease
- Icon size: 48px, accent color cu glow
- Title: 1.5rem, font-weight: 700, margin-top: 1rem
- Description: 1rem, color: #a0a0a0, margin-top: 0.5rem

**Section padding**: 8rem 5%

---

### 4. REVIEWS SECTION

**Title**: "What Users Say"
- Font size: clamp(2.5rem, 5vw, 3.5rem)
- Gradient text
- Text align: center
- Margin-bottom: 4rem

**10 Review Cards (infinite horizontal scroll carousel):**

**Testimoniale:**

1. **Username**: @crypto_mike
   **Stars**: ⭐⭐⭐⭐⭐
   **Text**: "Made my first successful token in 2 days. SOLbot's algorithm really works!"

2. **Username**: @luna_trades
   **Stars**: ⭐⭐⭐⭐⭐
   **Text**: "Finally a bot that delivers. Withdrew 3 SOL profit in my first week!"

3. **Username**: @degen_dave
   **Stars**: ⭐⭐⭐⭐⭐
   **Text**: "The auto-launch feature saved me hours. Best investment I made this year."

4. **Username**: @sol_surfer
   **Stars**: ⭐⭐⭐⭐⭐
   **Text**: "Clean interface, powerful results. Highly recommend for anyone serious about tokens."

5. **Username**: @nft_hunter
   **Stars**: ⭐⭐⭐⭐⭐
   **Text**: "Hit my ROI in 3 days. SOLbot knows how to time the market perfectly."

6. **Username**: @whale_watcher
   **Stars**: ⭐⭐⭐⭐⭐
   **Text**: "Skeptical at first, but this bot exceeded expectations. Worth every penny."

7. **Username**: @token_king
   **Stars**: ⭐⭐⭐⭐⭐
   **Text**: "Instant withdrawals are a game changer. No more waiting around for profits."

8. **Username**: @crypto_queen
   **Stars**: ⭐⭐⭐⭐⭐
   **Text**: "User-friendly and profitable. Even beginners can launch viral tokens now."

9. **Username**: @sol_master
   **Stars**: ⭐⭐⭐⭐⭐
   **Text**: "The smart timing feature is incredible. My tokens always launch at the right moment."

10. **Username**: @pump_pro
    **Stars**: ⭐⭐⭐⭐⭐
    **Text**: "Been using for 2 months, consistent results. SOLbot is the real deal."

**Carousel Design:**
- Container: overflow hidden
- Cards: inline-flex, scrolling dreapta → stânga (infinite loop)
- Animation: CSS keyframes, smooth continuous scroll
- Card styling:
  - Width: 350px
  - Background: rgba(255, 255, 255, 0.05)
  - Backdrop-filter: blur(10px)
  - Border: 1px solid rgba(255, 255, 255, 0.1)
  - Border-radius: 15px
  - Padding: 1.5rem
  - Margin-right: 1.5rem
  - Subtle glow on hover
- Stars: color gold (#ffd700), margin-bottom: 1rem
- Text: color #e0e0e0, font-size: 1rem, line-height: 1.6
- Username: color #00d9ff, font-size: 0.9rem, margin-top: 1rem, font-weight: 600

**Animation:**
- Duplicate cards pentru seamless loop
- Animation duration: 40-50s
- Animation: linear infinite

**Section padding**: 8rem 5%

---

### 5. FAQ SECTION

**Title**: "Frequently Asked Questions"
- Font size: clamp(2.5rem, 5vw, 3.5rem)
- Gradient text
- Text align: center
- Margin-bottom: 4rem

**5 FAQ Items (accordion style):**

#### Q1: How does SOLbot work?
**A**: SOLbot automates the entire token creation and launch process on Pump.fun. After connecting your Phantom wallet and purchasing access for 0.35 SOL, you get instant access to our dashboard where you can configure and launch tokens with optimized settings for maximum visibility and engagement.

#### Q2: Is it safe to use?
**A**: Yes. SOLbot never asks for your private keys or seed phrase. We only use Phantom wallet's secure connection protocol. All transactions are visible on-chain, and you maintain full control of your funds at all times. Withdraw anytime without restrictions.

#### Q3: What's the refund policy?
**A**: Due to the instant-access nature of the product, we don't offer refunds after wallet connection and payment. However, we're confident in SOLbot's capabilities. If you have concerns, please contact our support team before purchasing.

#### Q4: How quickly can I see results?
**A**: Results vary based on market conditions and your token configuration, but many users see traction within 24-48 hours of launch. Our viral algorithm optimizes for early momentum, and the smart timing feature helps you launch when conditions are favorable.

#### Q5: Do I need technical knowledge?
**A**: Not at all. SOLbot is designed for everyone, from complete beginners to experienced traders. The interface is intuitive, and the auto-launch feature handles all technical complexity. If you can connect a wallet, you can use SOLbot.

**Accordion Design:**
- Each item: 
  - Background: rgba(255, 255, 255, 0.03)
  - Border: 1px solid rgba(255, 255, 255, 0.1)
  - Border-radius: 12px
  - Margin-bottom: 1rem
  - Padding: 1.5rem
- Question (button):
  - Display: flex, justify-content space-between
  - Font-size: 1.2rem
  - Font-weight: 600
  - Color: #ffffff
  - Cursor: pointer
  - Icon: chevron-down (rotates when open)
- Answer:
  - Display: none (când collapsed)
  - Max-height animation când se deschide
  - Padding-top: 1rem
  - Color: #a0a0a0
  - Line-height: 1.7
  - Font-size: 1rem

**JavaScript behavior:**
- Click pe question → toggle answer visibility
- Smooth height animation
- Close others când deschizi unul nou (optional)

**Section padding**: 8rem 5%
**Max-width**: 900px (centrat)

---

### 6. FOOTER

**Content Layout (3 columns pe desktop, stack pe mobile):**

**Column 1: Branding**
- Logo: "SOLbot"
- Tagline scurt: "Automate your Pump.fun success"

**Column 2: Links**
- Terms of Service (href="#" placeholder)
- Privacy Policy (href="#" placeholder)
- Contact (href="mailto:support@solbot.com" placeholder)

**Column 3: Social Media**
- Twitter (icon + link placeholder)
- Telegram (icon + link placeholder)
- Discord (icon + link placeholder)

**Bottom Section:**
- Disclaimer: "⚠️ Cryptocurrency investments carry risk. Trade responsibly and never invest more than you can afford to lose."
- Copyright: "© 2024 SOLbot. All rights reserved."

**Design:**
- Background: #050508 (mai dark decât body)
- Border-top: 1px solid rgba(255, 255, 255, 0.1)
- Padding: 4rem 5% 2rem 5%
- Text color: #808080
- Links: hover effect (color change + underline)
- Font-size: 0.95rem
- Links spacing: 1rem gap

---

## 🎨 DESIGN SYSTEM

### Color Palette
```css
:root {
  /* Backgrounds */
  --bg-primary: #0a0a0f;
  --bg-secondary: #050508;
  --bg-card: rgba(255, 255, 255, 0.05);
  
  /* Text */
  --text-primary: #ffffff;
  --text-secondary: #a0a0a0;
  --text-tertiary: #808080;
  
  /* Accents */
  --accent-primary: #00d9ff; /* Cyan */
  --accent-secondary: #8b5cf6; /* Purple */
  
  /* Gradients */
  --gradient-primary: linear-gradient(135deg, #8b5cf6 0%, #00d9ff 100%);
  --gradient-glow: linear-gradient(135deg, rgba(139, 92, 246, 0.3) 0%, rgba(0, 217, 255, 0.3) 100%);
  
  /* Borders */
  --border-subtle: rgba(255, 255, 255, 0.1);
  --border-glow: rgba(0, 217, 255, 0.3);
  
  /* Effects */
  --shadow-glow: 0 0 20px rgba(0, 217, 255, 0.3);
  --shadow-card: 0 8px 32px rgba(0, 0, 0, 0.3);
}
```

### Typography
```css
/* Font Stack */
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

/* Sizes (fluid typography) */
--text-xs: clamp(0.75rem, 1vw, 0.875rem);
--text-sm: clamp(0.875rem, 1.5vw, 1rem);
--text-base: clamp(1rem, 2vw, 1.125rem);
--text-lg: clamp(1.125rem, 2.5vw, 1.25rem);
--text-xl: clamp(1.25rem, 3vw, 1.5rem);
--text-2xl: clamp(1.5rem, 4vw, 2rem);
--text-3xl: clamp(2rem, 5vw, 2.5rem);
--text-4xl: clamp(2.5rem, 6vw, 3.5rem);
--text-5xl: clamp(3rem, 8vw, 6rem);

/* Weights */
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
--font-black: 800;
```

### Spacing
```css
--spacing-xs: 0.5rem;
--spacing-sm: 1rem;
--spacing-md: 1.5rem;
--spacing-lg: 2rem;
--spacing-xl: 3rem;
--spacing-2xl: 4rem;
--spacing-3xl: 6rem;
--spacing-4xl: 8rem;
```

### Border Radius
```css
--radius-sm: 8px;
--radius-md: 12px;
--radius-lg: 20px;
--radius-xl: 50px;
--radius-full: 9999px;
```

### Animations
```css
/* Transitions */
--transition-fast: 0.15s ease;
--transition-base: 0.3s ease;
--transition-slow: 0.5s ease;

/* Common animations */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes glow {
  0%, 100% { filter: drop-shadow(0 0 10px var(--accent-primary)); }
  50% { filter: drop-shadow(0 0 20px var(--accent-primary)); }
}

@keyframes scrollLeft {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
```

---

## 🔧 JAVASCRIPT FUNCTIONALITY

### 1. Phantom Wallet Integration (phantom.js)

```javascript
// Detectează Phantom wallet
const detectPhantom = () => {
  const { solana } = window;
  return solana && solana.isPhantom;
}

// Connect wallet
const connectWallet = async () => {
  if (!detectPhantom()) {
    window.open('https://phantom.app/', '_blank');
    return;
  }
  
  try {
    const { solana } = window;
    const response = await solana.connect();
    const publicKey = response.publicKey.toString();
    
    console.log('Connected:', publicKey);
    updateConnectButton(publicKey);
    
  } catch (err) {
    console.error('Connection error:', err);
    alert('Failed to connect wallet. Please try again.');
  }
}

// Update button state
const updateConnectButton = (publicKey) => {
  const button = document.querySelector('.connect-wallet-btn');
  if (publicKey) {
    button.textContent = `${publicKey.slice(0, 4)}...${publicKey.slice(-4)}`;
    button.classList.add('connected');
  } else {
    button.textContent = 'Connect Wallet';
    button.classList.remove('connected');
  }
}
```

### 2. Review Carousel (animations.js)

```javascript
const initReviewCarousel = () => {
  const track = document.querySelector('.review-track');
  const cards = document.querySelectorAll('.review-card');
  
  cards.forEach(card => {
    const clone = card.cloneNode(true);
    track.appendChild(clone);
  });
  
  track.addEventListener('mouseenter', () => {
    track.style.animationPlayState = 'paused';
  });
  
  track.addEventListener('mouseleave', () => {
    track.style.animationPlayState = 'running';
  });
}
```

### 3. FAQ Accordion (animations.js)

```javascript
const initFAQAccordion = () => {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    
    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');
      
      faqItems.forEach(i => {
        i.classList.remove('active');
        i.querySelector('.faq-answer').style.maxHeight = null;
      });
      
      if (!isOpen) {
        item.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });
}
```

---

## 📱 RESPONSIVE BREAKPOINTS

```css
/* Mobile first approach */

/* Small devices (phones, < 640px) */
@media (max-width: 640px) {
  /* Stack everything, single column, reduce spacing */
}

/* Medium devices (tablets, >= 768px) */
@media (min-width: 768px) {
  /* 2 column features, larger text */
}

/* Large devices (desktops, >= 1024px) */
@media (min-width: 1024px) {
  /* Full desktop layout, 4 column features (2x2) */
}
```

---

## ✅ TASK PENTRU CLAUDE CODE

**Te rog creează următoarele fișiere:**

1. **index.html** - structură HTML completă cu toate secțiunile
2. **css/reset.css** - CSS reset basic
3. **css/variables.css** - toate CSS variables din design system
4. **css/main.css** - layout principal și stiluri pentru secțiuni
5. **css/components.css** - butoane, carduri, UI components
6. **css/animations.css** - toate keyframes și animații
7. **js/phantom.js** - integrare Phantom wallet
8. **js/animations.js** - carousel, accordion, scroll effects
9. **js/main.js** - init toate funcțiile

**Cerințe importante:**
- Include Google Fonts (Inter: 400, 500, 600, 700, 800)
- Include Feather Icons CDN pentru iconițe
- Semantic HTML5
- Mobile-first responsive
- Cross-browser compatible
- Performance optimized
- Clean, comentat code

**Ready to build! 🚀**
