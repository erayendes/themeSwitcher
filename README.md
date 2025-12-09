# 🎨 Tema Modu Bileşeni - Kapsamlı Rehber

Yeniden kullanılabilir, taşınabilir tema modu bileşeni (auto, dark, light). 3 satırda başlayabilir, produksiyona hazır.

---

## 📋 İçindekiler

- [Özet](#-özet)
- [Hızlı Başlangıç (1 dakika)](#-hızlı-başlangıç-1-dakika)
- [Dosya Yapısı](#dosya-yapısı)
- [Detaylı Kurulum](#detaylı-kurulum)
- [Kullanım Örnekleri](#kullanım-örnekleri)
- [API Referansı](#api-referansı)
- [CSS Özelleştirmesi](#css-özelleştirmesi)
- [Sık Sorulan Sorular](#sık-sorulan-sorular)
- [İpuçları & En İyi Uygulamalar](#-ipuçları--en-iyi-uygulamalar)

---

## ✅ Özet

**Tarih**: 9 Aralık 2025 | **Sürüm**: 1.0.0 | **Durum**: Production Ready ✅

### 🎯 Özellikler

✅ **3 Tema Modu**: light, dark, auto (Sistem Ayarı)  
✅ **localStorage Desteği**: Kullanıcı tercihini kaydeder  
✅ **Sistem Tema Dinleme**: Auto modda sistem temasını takip eder  
✅ **HTML Sınıf Yönetimi**: `html.dark` class'ı otomatik ekler/kaldırır  
✅ **Buton Durumu Yönetimi**: Aktif/inaktif görünümü  
✅ **Responsive Tasarım**: Mobil, tablet, desktop uyumlu  
✅ **Erişilebilirlik**: ARIA, keyboard navigation, focus states  
✅ **Smooth Transitions**: CSS geçişleri  
✅ **Framework Agnostic**: Vanilla JS, React, Vue, Angular, Svelte vb.  
✅ **CSS Kütüphaneler**: Tailwind, Bootstrap, Pure CSS  
✅ **0 Dependencies**: Hiç harici kütüphane yok  
✅ **Tarayıcı Desteği**: Chrome, Firefox, Safari, Edge (Modern versions)

### 📊 Teknik Detaylar

```
themeManager.js     6 KB  (minified: 3 KB)
themeToggle.css     4 KB  (minified: 2 KB)
─────────────────────
Toplam             10 KB  (minified: 5 KB)
```

---

## 🚀 Hızlı Başlangıç (1 dakika)

### 3 Adım Kurulum

**Adım 1: CSS Ekle**
```html
<link rel="stylesheet" href="themeSwitcher/themeToggle.css">
```

**Adım 2: HTML Ekle**
```html
<div class="theme-toggle-container">
    <button class="theme-btn" data-theme="light">light</button>
    <button class="theme-btn" data-theme="dark">dark</button>
    <button class="theme-btn" data-theme="auto">auto</button>
</div>
```

**Adım 3: JavaScript Ekle**
```html
<script src="themeSwitcher/themeManager.js"></script>
```

**Adım 4: CSS'de Temalar Tanımla**
```css
body { background: white; color: black; }
html.dark body { background: #111827; color: white; }
```

✅ **Bitti!** ThemeManager otomatik başlar.

---

### Tema Nedir?

| Tema | Açıklama | localStorage |
|------|----------|---------------|
| **light** | Açık tema (beyaz arka plan) | `theme: "light"` |
| **dark** | Koyu tema (siyah arka plan) | `theme: "dark"` |
| **auto** | Sistem ayarını takip eder | `theme: "auto"` |

---

## Dosya Yapısı

```
themeSwitcher/
├── themeManager.js       # Tema yönetim mantığı (ZORUNLU)
├── themeToggle.css       # Buton stileri (ZORUNLU)
├── demo.html             # Basit demo örneği
└── README.md             # Bu dosya
```

### Dosya Açıklamaları

| Dosya | Boyut | Amaç |
|-------|-------|------|
| **themeManager.js** | ~6KB | Tema yönetimini sağlar. localStorage'a kaydeder, sistem tema değişikliğini dinler |
| **themeToggle.css** | ~4KB | Buton stillerini içerir. Light/dark tema desteği vardır |
| **demo.html** | ~2KB | Basit demo örneği (tarayıcıda açabilirsiniz!) |
| **README.md** | bu dosya | Tam API referansı ve kurulum rehberi |

---

## Detaylı Kurulum

### Proje Yapısı

```bash
# Tema bileşeni klasörünü projenize kopyalayın
cp -r themeSwitcher your-project/
```

### HTML Kurulumu (Temel)

```

### Tailwind CSS ile Kullanım

```html
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Benim Sitesi</title>
    
    <!-- Tema CSS -->
    <link rel="stylesheet" href="themeSwitcher/themeToggle.css">
</head>
<body>
    <footer>
        <!-- Tema Butonları -->
        <div class="theme-toggle-container">
            <button class="theme-btn" data-theme="light">light</button>
            <button class="theme-btn" data-theme="dark">dark</button>
            <button class="theme-btn" data-theme="auto">auto</button>
        </div>
    </footer>
    
    <!-- Tema Manager Script -->
    <script src="Theme Mode Component/themeManager.js"></script>
</body>
</html>
```

### 3. Adım: CSS'de Temalar Tanımlayın

```css
/* Light tema (varsayılan) */
body {
    background-color: #ffffff;
    color: #1f2937;
}

/* Dark tema */
html.dark body {
    background-color: #111827;
    color: #f3f4f6;
}
```

### 4. Adım: Bitti! ✅

ThemeManager otomatik olarak başlatılır ve her şey çalışır!

---

## Bootstrap ile Kullanım

Eğer projenizde Tailwind CSS varsa, dark mode desteği çok daha kolaydır:

```html
<!DOCTYPE html>
<html lang="tr">
<head>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="Theme Mode Component/themeToggle.css">
</head>
<body>
    <!-- Tailwind ile otomatik dark mode -->
    <div class="bg-white dark:bg-gray-900 text-black dark:text-white">
        <h1>Başlık</h1>
        <p>Bu metin light modda siyah, dark modda beyazdır.</p>
    </div>
    
    <!-- Tema Butonları -->
    <div class="theme-toggle-container">
        <button class="theme-btn" data-theme="light">light</button>
        <button class="theme-btn" data-theme="dark">dark</button>
        <button class="theme-btn" data-theme="auto">auto</button>
    </div>
    
    <script src="Theme Mode Component/themeManager.js"></script>
</body>
</html>
```

### Bootstrap ile Kullanım

Bootstrap kullanıyorsanız:

```html
<!DOCTYPE html>
<html lang="tr">
<head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="Theme Mode Component/themeToggle.css">
</head>
<body class="bg-light" data-bs-theme="light">
    <div class="container">
        <h1 class="text-dark">Başlık</h1>
        <p class="text-muted">Açıklama metni</p>
    </div>
    
    <footer class="bg-light border-top">
        <div class="theme-toggle-container">
            <button class="theme-btn" data-theme="light">light</button>
            <button class="theme-btn" data-theme="dark">dark</button>
            <button class="theme-btn" data-theme="auto">auto</button>
        </div>
    </footer>
    
    <script src="Theme Mode Component/themeManager.js"></script>
</body>
</html>
```

---

## Kullanım Örnekleri

### Örnek 1: Footer'da Kompakt Tema Butonları

```html
<footer class="bg-gray-100 dark:bg-gray-800 py-4">
    <div class="container mx-auto flex justify-between items-center px-4">
        <p class="text-sm text-gray-600 dark:text-gray-400">
            © 2025 AddressPass
        </p>
        
        <!-- Tema Butonları -->
        <div class="theme-toggle-container">
            <button class="theme-btn" data-theme="light">light</button>
            <button class="theme-btn" data-theme="dark">dark</button>
            <button class="theme-btn" data-theme="auto">auto</button>
        </div>
    </div>
</footer>
```

### Örnek 2: Ayarlar Sayfasında Tema Seçimi

```html
<section class="settings-page">
    <div class="setting-group">
        <h3>Tema Ayarları</h3>
        <p>Tercih ettiğiniz tema modunu seçin:</p>
        
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px;">
            <button class="theme-btn" data-theme="light" 
                    style="padding: 20px; font-size: 1rem; flex-direction: column; gap: 10px;">
                ☀️ light
            </button>
            <button class="theme-btn" data-theme="dark"
                    style="padding: 20px; font-size: 1rem; flex-direction: column; gap: 10px;">
                🌙 dark
            </button>
            <button class="theme-btn" data-theme="auto"
                    style="padding: 20px; font-size: 1rem; flex-direction: column; gap: 10px;">
                🔄 auto
            </button>
        </div>
    </div>
</section>
```

### Örnek 3: Header'da Tema Switcher

```html
<header class="bg-white dark:bg-gray-800 shadow">
    <nav class="container mx-auto flex justify-between items-center py-4 px-4">
        <div class="logo">Your Site</div>
        
        <div class="flex items-center gap-4">
            <a href="/">Home</a>
            <a href="/about">About</a>
            
            <!-- Tema Butonları -->
            <div class="theme-toggle-container">
                <button class="theme-btn" data-theme="light">L</button>
                <button class="theme-btn" data-theme="dark">D</button>
                <button class="theme-btn" data-theme="auto">A</button>
            </div>
        </div>
    </nav>
</header>
```

### Örnek 4: İkon ile Tema Butonları

```html
<div class="theme-toggle-container">
    <button class="theme-btn" data-theme="light" title="light mode">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
    </button>
    <button class="theme-btn" data-theme="dark" title="dark mode">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
    </button>
    <button class="theme-btn" data-theme="auto" title="auto mode">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 6v6l4 2"></path>
        </svg>
    </button>
</div>
```

---

## API Referansı

ThemeManager, aşağıdaki metodları ve özellikleri sağlar:

### Metodlar

#### `ThemeManager.init()`

ThemeManager'ı başlatır. Otomatik olarak sayfa yüklendikten sonra çağrılır.

```javascript
// Genellikle manuel olarak çağırmaya gerek yoktur
ThemeManager.init();
```

#### `ThemeManager.applyTheme(theme)`

Bir temayı uygular ve localStorage'a kaydeder.

```javascript
// Light tema uygula
ThemeManager.applyTheme('light');

// Dark tema uygula
ThemeManager.applyTheme('dark');

// Sistem ayarını kullan
ThemeManager.applyTheme('auto');
```

#### `ThemeManager.loadTheme()`

localStorage'dan kaydedilmiş temayı yükler.

```javascript
ThemeManager.loadTheme();
```

#### `ThemeManager.getCurrentTheme()`

Şu an seçili olan temayı döndürür.

```javascript
const theme = ThemeManager.getCurrentTheme();
console.log(theme); // 'light', 'dark', 'auto'
```

#### `ThemeManager.isDarkMode()`

Dark modun şu anda aktif olup olmadığını döndürür.

```javascript
    if (ThemeManager.isDarkMode()) {
    console.log('dark mode aktif!');
} else {
    console.log('light mode aktif!');
}
```

#### `ThemeManager.shouldBeDark(theme)`

Verilen tema ayarına göre dark modun açık olması gerekip gerekmediğini kontrol eder.

```javascript
ThemeManager.shouldBeDark('light');  // false
ThemeManager.shouldBeDark('dark');   // true
ThemeManager.shouldBeDark('auto');   // sistem tercihine göre
```

#### `ThemeManager.attachButtonListeners()`

Tema butonlarına tıklama olayı dinleyicileri ekler.

```javascript
ThemeManager.attachButtonListeners();
```

#### `ThemeManager.updateButtonStates(activeTheme)`

Tema butonlarının aktif/inaktif görünümünü günceller.

```javascript
ThemeManager.updateButtonStates('dark');
```

#### `ThemeManager.watchSystemThemeChanges()`

Sistem teması değişikliklerini dinler (auto mod için).

```javascript
ThemeManager.watchSystemThemeChanges();
```

### Konfigürasyon Özellikleri

```javascript
ThemeManager.STORAGE_KEY           // 'theme' - localStorage anahtarı
ThemeManager.DEFAULT_THEME         // 'auto' - varsayılan tema
ThemeManager.BUTTON_SELECTOR       // '.theme-btn' - buton seçicisi
ThemeManager.ACTIVE_CLASSES        // Aktif buton sınıfları
ThemeManager.HOVER_CLASSES         // Hover sınıfları
ThemeManager.ROOT_DARK_CLASS       // 'dark' - dark mode sınıfı
```

---

## CSS Özelleştirmesi

### Buton Renkleri Değiştirme

`themeToggle.css` dosyasında bulunan renkleri özelleştirebilirsiniz:

```css
/* Buton arka planı (seçili değilken) */
.theme-btn {
    color: rgb(75, 85, 99);  /* Açık mod metin rengi */
    background-color: transparent;
}

/* Dark mode metin rengi */
.dark .theme-btn {
    color: rgb(209, 213, 219);
}

/* Hover durumu */
.theme-btn:not(.active):hover {
    background-color: rgba(209, 213, 219, 0.18);
}

/* Dark mode hover */
.dark .theme-btn:not(.active):hover {
    background-color: rgba(107, 114, 128, 0.18);
}

/* Aktif buton (seçili) */
.theme-btn.active {
    background-color: rgba(255, 255, 255, 0.45);  /* Light mode */
    color: rgb(55, 65, 81);
}

/* Dark mode aktif buton */
.dark .theme-btn.active {
    background-color: rgba(107, 114, 128, 0.45);  /* Dark mode */
    color: rgb(243, 244, 246);
}
```

### Konteyner Özellikleri

```css
.theme-toggle-container {
    /* Boyut */
    padding: 0.5rem;
    gap: 0.25rem;
    
    /* Görünüm */
    border-radius: 9999px;  /* Fully rounded (pill shape) */
    background-color: rgba(229, 231, 235, 0.3);  /* Light mode */
}

.dark .theme-toggle-container {
    background-color: rgba(55, 65, 81, 0.3);  /* Dark mode */
}
```

### Responsive Breakpoints

```css
/* Mobil (max-width: 480px) */
.theme-btn {
    padding: 0.25rem 0.375rem;
    font-size: 0.6rem;
}

/* Tablet (max-width: 768px) */
.theme-btn {
    padding: 0.3rem 0.45rem;
}

/* Desktop (min-width: 1024px) */
.theme-btn {
    padding: 0.4rem 0.6rem;
    font-size: 0.7rem;
}
```

### Animasyonlar

```css
/* Pulse animasyonu (aktif buton tıklanınca) */
@keyframes buttonPulse {
    0% {
        box-shadow: 0 0 0 0 rgba(107, 114, 128, 0.7);
    }
    70% {
        box-shadow: 0 0 0 6px rgba(107, 114, 128, 0);
    }
    100% {
        box-shadow: 0 0 0 0 rgba(107, 114, 128, 0);
    }
}

.theme-btn.active:active {
    animation: buttonPulse 0.6s ease-out;
}
```

---

## Sık Sorulan Sorular

### S: localStorage'da tema tercihim nasıl kontrol ederim?

**C:** Tarayıcı konsolundan:

```javascript
// Kaydedilmiş temayı göster
console.log(localStorage.getItem('theme'));

// Temayı değiştir
localStorage.setItem('theme', 'dark');

// Temayı sil (varsayılan ayara döner)
localStorage.removeItem('theme');
```

### S: Hangi tarayıcılar destekleniyor?

**C:** Hemen hemen tüm modern tarayıcılar destekleniyor:
- Chrome/Edge 76+
- Firefox 55+
- Safari 12.1+
- Opera 63+

### S: Sayfa yüklenirken flaş (tema değişimi) görüyorum?

**C:** Bu normal bir davranış fakat çözülebilir. `<head>` içine şu kodu ekleyin:

```html
<script>
    // Sayfa render başlamadan tema yükle (flaş önler)
    const theme = localStorage.getItem('theme') || 'auto';
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    const isDark = theme === 'dark' || (theme === 'auto' && prefersDark.matches);
    if (isDark) document.documentElement.classList.add('dark');
</script>
```

### S: Kendi özel tema ekleyebilir miyim?

**C:** Evet! `themeManager.js` dosyasını değiştirerek:

```javascript
// themeManager.js'te applyTheme metodunu düzenle
applyTheme(theme) {
    if (!['light', 'dark', 'auto', 'sepia'].includes(theme)) {
        theme = this.DEFAULT_THEME;
    }
    // ... rest of code
}
```

Sonra HTML'e ekle:

```html
<button class="theme-btn" data-theme="sepia">Sepia</button>
```

### S: Mobile uyumlu mu?

**C:** Evet! Tamamen responsive ve mobil uyumludur. CSS'de mobil breakpoints vardır.

### S: Başka işlevler ekleyebilir miyim?

**C:** Kesinlikle! ThemeManager'ı genişletebilirsiniz:

```javascript
// Kendi metodunu ekle
ThemeManager.notifyThemeChange = function(theme) {
    console.log('Tema değişti: ' + theme);
    // API'ye gönder, event tetikle, vb.
};

// applyTheme metodunu genişlet
const originalApply = ThemeManager.applyTheme;
ThemeManager.applyTheme = function(theme) {
    originalApply.call(this, theme);
    this.notifyThemeChange(theme);
};
```

### S: Kaç dosya gerekli?

**C:** En az 2 dosya:
- `themeManager.js` (gerekli - mantık)
- `themeToggle.css` (isteğe bağlı - stil)

CSS olmadan sadece `data-theme` attribute'ı ile tema değişikliğini yapabilirsiniz, fakat butonlar görünmez olacaktır.

### S: Erişilebilirlik özelliği var mı?

**C:** Evet! Bileşen şunları içerir:
- ARIA labels
- Keyboard navigation desteği (Tab, Enter)
- Focus visible stilleri
- Contrast modları desteği
- Motion preference desteği (prefers-reduced-motion)

```html
<!-- Erişilebilir buton kullanımı -->
<button class="theme-btn" 
        data-theme="light"
        aria-label="light mode"
        aria-pressed="true">
    light
</button>
```

---

## 🚀 İpuçları ve En İyi Uygulamalar

1. **Blok Etmeyin**: ThemeManager'ı değiştirmek için bloklamayın, genişletin.
2. **Fallback**: Eski tarayıcılar için CSS fallback kullanın.
3. **Performance**: localStorage yerine sessionStorage kullanabilirsiniz (daha hızlı).
4. **Analytics**: Tema tercihleri hakkında veri toplayın.
5. **Accessibility**: Her zaman ARIA attributes ekleyin.
6. **Testing**: Hem light hem dark modda test edin.

---

## 📄 Lisans

Bu bileşen özgürce kullanılabilir ve özelleştirilebilir.

**Yapım Tarihi**: 9 Aralık 2025
**Sürüm**: 1.0
