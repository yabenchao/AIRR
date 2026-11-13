// 頁面切換功能 (Tab Switching)
function showPage(pageId) {
    // 隱藏所有頁面
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    // 取消所有導覽標籤的 active 狀態
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));

    // 顯示指定頁面
    const targetPage = document.getElementById(`page-${pageId}`);
    if (targetPage) {
        targetPage.classList.add('active');
    }

    // 啟用對應的導覽標籤
    const targetLink = document.getElementById(`nav-${pageId}`);
    if (targetLink) {
        targetLink.classList.add('active');
    }
}

// 水費計算功能 (隔月抄表費率)
function calculate() {
    // 獲取使用者輸入的度數
    const usageInput = document.getElementById('usage').value;
    const usage = parseFloat(usageInput);

    // 驗證輸入值是否有效
    if (isNaN(usage) || usage < 0) {
        alert('請輸入正確的用水度數（大於或等於 0 的數字）');
        return;
    }

    // 費率級距定義 (台水隔月抄表版本)
    let tier1 = 0; // 第1段：0 - 20度 (單價 7.35)
    let tier2 = 0; // 第2段：21 - 60度 (單價 9.45)
    let tier3 = 0; // 第3段：61 - 100度 (單價 11.55)
    let tier4 = 0; // 第4段：101度以上 (單價 12.075)

    // 分段累進計算邏輯
    if (usage <= 20) {
        tier1 = usage * 7.35;
    } else if (usage <= 60) {
        tier1 = 20 * 7.35;
        tier2 = (usage - 20) * 9.45;
    } else if (usage <= 100) {
        tier1 = 20 * 7.35;
        tier2 = 40 * 9.45;
        tier3 = (usage - 60) * 11.55;
    } else {
        tier1 = 20 * 7.35;
        tier2 = 40 * 9.45;
        tier3 = 40 * 11.55;
        tier4 = (usage - 100) * 12.075;
    }

    // 計算總計金額
    const total = tier1 + tier2 + tier3 + tier4;

    // 將計算結果渲染更新至網頁畫面上 (保留兩位小數)
    document.getElementById('tier1').innerText = `${tier1.toFixed(2)} 元`;
    document.getElementById('tier2').innerText = `${tier2.toFixed(2)} 元`;
    document.getElementById('tier3').innerText = `${tier3.toFixed(2)} 元`;
    document.getElementById('tier4').innerText = `${tier4.toFixed(2)} 元`;
    document.getElementById('total').innerText = `${total.toFixed(2)} 元`;
}
