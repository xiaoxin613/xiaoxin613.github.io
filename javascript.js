document.addEventListener('DOMContentLoaded', () => {
    // 获取元素
    const qqIcon = document.querySelector('.nav .qq');
    const wxIcon = document.querySelector('.nav .wx');
    const qqQr = document.querySelector('.qr .qqqr');
    const wxQr = document.querySelector('.qr .wxqr');

    // 鼠标悬停事件
    qqIcon.addEventListener('mouseenter', () => {
        qqQr.style.display = 'block'; // 显示 QQ 二维码
    });
    qqIcon.addEventListener('mouseleave', () => {
        qqQr.style.display = 'none'; // 隐藏 QQ 二维码
    });

    wxIcon.addEventListener('mouseenter', () => {
        wxQr.style.display = 'block'; // 显示 微信 二维码
    });
    wxIcon.addEventListener('mouseleave', () => {
        wxQr.style.display = 'none'; // 隐藏 微信 二维码
    });
});