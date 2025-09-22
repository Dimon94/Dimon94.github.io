// Vercount 页面识别初始化脚本
// 确保每个页面都有唯一的标识符

(function() {
    'use strict';
    
    // 等待 DOM 加载完成
    function initVercount() {
        // 获取当前页面路径
        const currentPath = window.location.pathname;
        const currentTitle = document.title;
        
        // 为所有 Vercount 元素添加页面标识
        const vercountElements = document.querySelectorAll('[id^="vercount_value_"]');
        
        vercountElements.forEach(function(element) {
            // 为页面浏览量添加唯一路径标识
            if (element.id === 'vercount_value_page_pv') {
                element.setAttribute('data-path', currentPath);
                element.setAttribute('data-title', currentTitle);
            }
        });
        
        // 触发 Vercount 重新计算
        if (window.vercount && typeof window.vercount.refresh === 'function') {
            window.vercount.refresh();
        }
    }
    
    // 如果 DOM 已经加载完成
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initVercount);
    } else {
        initVercount();
    }
    
    // 监听页面变化（适用于 PJAX 等单页应用场景）
    if (window.addEventListener) {
        window.addEventListener('popstate', initVercount);
    }
})();