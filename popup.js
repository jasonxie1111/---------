// 這個文件可以用於未來的增強或設置

document.addEventListener('DOMContentLoaded', () => {
    // 獲取並顯示使用時間
    chrome.storage.local.get('usageTime', (data) => {
        const usageTime = data.usageTime || 0;
        document.body.insertAdjacentHTML('beforeend', `<p>使用時間: ${usageTime} 秒</p>`);
    });
});
