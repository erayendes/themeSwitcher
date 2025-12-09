/**
 * ThemeManager - Tema Yönetim Kütüphanesi
 * 
 * auto (Sistem Ayarı), dark, light temalarını yönetmek için kullanılır.
 * localStorage'da tema tercihini kaydeder ve sistem tema değişikliklerini dinler.
 * 
 * Özellikler:
 * - Tema geçişi ve yönetimi
 * - localStorage entegrasyonu
 * - Sistem tema değişikliği dinleme
 * - HTML sınıf yönetimi (dark class)
 * - Buton durumu güncelleme
 */

const ThemeManager = {
    // Konfigürasyon
    STORAGE_KEY: 'theme',
    DEFAULT_THEME: 'auto',
    BUTTON_SELECTOR: '.theme-btn',
    ACTIVE_CLASSES: ['bg-white/70', 'dark:bg-gray-600/70', 'text-gray-800', 'dark:text-white'],
    HOVER_CLASSES: ['hover:bg-gray-300/30', 'dark:hover:bg-gray-600/30'],
    ROOT_DARK_CLASS: 'dark',
    
    /**
     * Başlatıcı fonksiyon
     */
    init() {
        // Attach listeners first so buttons exist for state updates
        this.attachButtonListeners();
        this.loadTheme();
        this.watchSystemThemeChanges();
    },
    
    /**
     * Kaydedilmiş temayı yükle ve uygula
     */
    loadTheme() {
        const savedTheme = localStorage.getItem(this.STORAGE_KEY) || this.DEFAULT_THEME;
        this.applyTheme(savedTheme);
    },
    
    /**
     * Tema uygula (localStorage'a kaydeder ve HTML'i günceller)
     * @param {string} theme - 'light', 'dark', 'auto'
     */
    applyTheme(theme) {
        // Geçerli tema olup olmadığını kontrol et
        if (!['light', 'dark', 'auto'].includes(theme)) {
            theme = this.DEFAULT_THEME;
        }
        
        // localStorage'a kaydet
        localStorage.setItem(this.STORAGE_KEY, theme);
        
        // Dark modun açık olup olmayacağını belirle
        const isDark = this.shouldBeDark(theme);
        
        // HTML'e dark sınıfını ekle/kaldır
        document.documentElement.classList.toggle(this.ROOT_DARK_CLASS, isDark);
        
        // Buton görünümlerini güncelle
        this.updateButtonStates(theme);
    },
    
    /**
     * Tüm sistem ve ayarlara göre dark mode açık olması gerekip gerekmediğini belirle
     * @param {string} theme - 'light', 'dark', 'auto'
     * @returns {boolean}
     */
    shouldBeDark(theme) {
        if (theme === 'dark') return true;
        if (theme === 'light') return false;
        
        // Auto: sistem tercihini kontrol et
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
        return prefersDark.matches;
    },
    
    /**
     * Tema butonlarını güncellemek için olay dinleyicileri ekle
     */
    attachButtonListeners() {
        const buttons = document.querySelectorAll(this.BUTTON_SELECTOR);
        
        buttons.forEach(button => {
            // Ensure accessibility attributes
            if (!button.hasAttribute('role')) button.setAttribute('role', 'button');
            if (!button.hasAttribute('tabindex')) button.setAttribute('tabindex', '0');
            if (!button.hasAttribute('aria-pressed')) button.setAttribute('aria-pressed', 'false');

            // Click handler
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const theme = button.getAttribute('data-theme');
                this.applyTheme(theme);
            });

            // Keyboard support (Enter / Space)
            button.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    const theme = button.getAttribute('data-theme');
                    this.applyTheme(theme);
                }
            });
        });
    },
    
    /**
     * Buton durumlarını güncelle (aktif/inaktif görünümü)
     * @param {string} activeTheme - Seçili tema
     */
    updateButtonStates(activeTheme) {
        const buttons = document.querySelectorAll(this.BUTTON_SELECTOR);
        
        buttons.forEach(button => {
            const theme = button.getAttribute('data-theme');
            
            // Temizle: active sınıfı ve stil sınıfları
            button.classList.remove('active');
            button.setAttribute('aria-pressed', 'false');
            this.ACTIVE_CLASSES.forEach(cls => button.classList.remove(cls));
            this.HOVER_CLASSES.forEach(cls => button.classList.remove(cls));

            // Seçili butona aktif sınıfları ve erişilebilirlik attribute'u ekle
            if (theme === activeTheme) {
                button.classList.add('active');
                button.setAttribute('aria-pressed', 'true');
                this.ACTIVE_CLASSES.forEach(cls => button.classList.add(cls));
            } else {
                // Diğer butonlara hover sınıfları ekle (görsel ipucu)
                this.HOVER_CLASSES.forEach(cls => button.classList.add(cls));
            }
        });
    },
    
    /**
     * Sistem tema değişikliklerini dinle (auto mod seçiliyse uygulanır)
     */
    watchSystemThemeChanges() {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
        
        // Modern tarayıcılar için
        if (prefersDark.addEventListener) {
            prefersDark.addEventListener('change', () => {
                if (localStorage.getItem(this.STORAGE_KEY) === 'auto') {
                    this.applyTheme('auto');
                }
            });
        }
    },
    
    /**
     * Şu anki aktif temayı getir
     * @returns {string} 'light', 'dark', 'auto'
     */
    getCurrentTheme() {
        return localStorage.getItem(this.STORAGE_KEY) || this.DEFAULT_THEME;
    },
    
    /**
     * Şu anki dark modun açık olup olmadığını getir
     * @returns {boolean}
     */
    isDarkMode() {
        const theme = this.getCurrentTheme();
        return this.shouldBeDark(theme);
    }
};

// Sayfa yüklendiğinde otomatik başlat
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => ThemeManager.init());
} else {
    ThemeManager.init();
}
