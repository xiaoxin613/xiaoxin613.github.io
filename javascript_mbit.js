document.addEventListener("DOMContentLoaded", function () {
    const charts = document.querySelectorAll(".chart-container");

    charts.forEach(chartContainer => {
        const chart = chartContainer.querySelector(".chart");
        const chartValue = chartContainer.querySelector(".chart-value");

        // 从 data-percent 属性获取初始目标值
        const targetValue = parseInt(chartContainer.getAttribute("data-percent"), 10);

        function setChartValue(value) {
            chartValue.textContent = `${value}%`;
            chart.style.background = `conic-gradient(#4CAF50 ${value}%, #ddd ${value}% 100%)`;
        }

        function animateChartValue() {
            let startValue = 0;
            const duration = 1000; // 动画时间1秒
            const increment = targetValue / (duration / 20); // 每20毫秒增加的值

            const interval = setInterval(() => {
                startValue += increment;
                if (startValue >= targetValue) {
                    startValue = targetValue;
                    clearInterval(interval);
                }
                chartValue.textContent = `${Math.floor(startValue)}%`;
                chart.style.background = `conic-gradient(#4CAF50 ${startValue}%, #ddd ${startValue}% 100%)`;
            }, 20);
        }

        // 初始加载设置指定的目标值
        setChartValue(targetValue);

        // 鼠标悬停事件，重新加载指定数值并动画显示
        chartContainer.addEventListener("mouseenter", animateChartValue);
    });
});
