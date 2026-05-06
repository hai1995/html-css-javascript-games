const i18n = {
    currentLocale: 'zh-CN',
    translations: {},
    
    async init() {
        const savedLocale = localStorage.getItem('locale') || 'zh-CN';
        await this.setLocale(savedLocale);
    },
    
    async setLocale(locale) {
        try {
            const response = await fetch(`./locales/${locale}.json`);
            if (!response.ok) throw new Error('Failed to load translations');
            
            this.translations = await response.json();
            this.currentLocale = locale;
            localStorage.setItem('locale', locale);
            
            this.updateDOM();
            this.updateLangAttribute();
            this.updateDirection();
            
            document.dispatchEvent(new CustomEvent('localeChanged', { detail: { locale } }));
        } catch (error) {
            console.error('Error loading locale:', error);
        }
    },
    
    t(key, params = {}) {
        const keys = key.split('.');
        let value = this.translations;
        
        for (const k of keys) {
            if (value && typeof value === 'object' && k in value) {
                value = value[k];
            } else {
                return key;
            }
        }
        
        if (typeof value === 'string') {
            return value.replace(/\{(\w+)\}/g, (match, param) => {
                return params[param] !== undefined ? params[param] : match;
            });
        }
        
        return value;
    },
    
    updateDOM() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            el.textContent = this.t(key);
        });
        
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            el.placeholder = this.t(key);
        });
        
        document.querySelectorAll('[data-i18n-aria-label]').forEach(el => {
            const key = el.getAttribute('data-i18n-aria-label');
            el.setAttribute('aria-label', this.t(key));
        });
        
        document.querySelectorAll('[data-i18n-title]').forEach(el => {
            const key = el.getAttribute('data-i18n-title');
            el.setAttribute('title', this.t(key));
        });
    },
    
    updateLangAttribute() {
        document.documentElement.lang = this.currentLocale;
    },
    
    updateDirection() {
        const isRTL = this.currentLocale === 'ar' || this.currentLocale === 'he';
        document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    },
    
    getAvailableLocales() {
        return [
            { code: 'zh-CN', name: '中文', flag: '🇨🇳' },
            { code: 'en', name: 'English', flag: '🇺🇸' }
        ];
    },
    
    toggleLocale() {
        const newLocale = this.currentLocale === 'zh-CN' ? 'en' : 'zh-CN';
        this.setLocale(newLocale);
    }
};

document.addEventListener('DOMContentLoaded', () => {
    i18n.init();
});

window.i18n = i18n;