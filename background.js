let breakTime = 30 * 60 * 1000; // 30 分鐘
let reminderInterval;
let startTime = Date.now(); // 記錄開始時間

function sendNotification() {
    chrome.notifications.create({
        type: 'basic',
        iconUrl: 'icon.png',
        title: '該休息了！',
        message: '記得休息眼睛和伸展！',
        priority: 2
    });
}

function startReminder() {
    reminderInterval = setInterval(sendNotification, breakTime);
}

// 新增函數以獲取使用時間
function getUsageTime() {
    return Math.floor((Date.now() - startTime) / 1000); // 返回使用時間（秒）
}

// 將使用時間存儲到 chrome.storage
setInterval(() => {
    chrome.storage.local.set({ usageTime: getUsageTime() });
}, 1000); // 每秒更新一次

chrome.runtime.onInstalled.addListener(() => {
    startReminder();
});
