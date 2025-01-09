function getLanguage() {
    const lang = localStorage.getItem('language') || getBrowserLanguage() || 'en';
    return ['zh', 'en', 'ru'].includes(lang) ? lang : 'en';
}

function getBrowserLanguage() {
    const lang = navigator.language || navigator.userLanguage;
    if (lang.toLowerCase().startsWith('zh')) return 'zh';
    if (lang.toLowerCase().startsWith('ru')) return 'ru';
    return 'en';
}

function setLanguage(lang) {
    localStorage.setItem('language', lang);
    window.location.reload();
}

// 初始化语言选择器
document.addEventListener('DOMContentLoaded', function() {
    const currentLang = getLanguage();
    document.documentElement.setAttribute('lang', currentLang);
    
    // 更新语言选择器的值
    const langSelector = document.getElementById('language-selector');
    if (langSelector) {
        langSelector.value = currentLang;
    }
}); 