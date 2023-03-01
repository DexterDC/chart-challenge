const ctx = document.getElementById('myChart');

var xValues = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
var yValues = [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48];
var barColors = ["#ec775f", "#ec775f", "#76b5bc", "#ec775f", "#ec775f"];
var hoverColor = ["rgb(236, 119, 95, 0.8)", "rgb(236, 119, 95, 0.8)","rgb(118, 181, 188,0.8)", "rgb(236, 119, 95, 0.8)","rgb(236, 119, 95, 0.8)","rgb(236, 119, 95, 0.8)","rgb(236, 119, 95, 0.8)"]
  
const chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: xValues,
        datasets: [{
            backgroundColor: barColors,
            borderRadius: 5,
            data: yValues,
            hoverBackgroundColor: hoverColor
        }],
    },
    options: {
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                display: false
            },
            
        },
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                caretSize: 0,
                intersect: false,
                mode: 'index',
                xAlign: 'center',
                yAlign: 'bottom',
                displayColors: false,
                callbacks: {
                    title: function () {
                        return '';
                    },
                    label: function (tooltipItem) {
                        return "$" + tooltipItem.parsed.y;
                    },
                },
            },
        },
        maintainAspectRatio: false
    },
});


