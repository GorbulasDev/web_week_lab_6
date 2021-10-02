let canvas = document.querySelector('#bridge-chart')
let context = canvas.getContext('2d')

let chart = new Chart(context, {
    type: 'bar',
    data: {
        labels: ['Verrazano-Narrows Bridge', 'Golden Gate Bridge', 'Mackinac Bridge', 'George Washington Bridge', 'Tacoma Narrows Bridge'],
        datasets: [ { 
            label: 'Longest bridges in America',
            data: [1298.4, 1280.2, 1158.0, 1067.0, 853.44],
            backgroundColor: ['blue', 'red', 'green', 'yellow', 'yellowgreen']
        } ]
    },

    options: {
        scales: {
            yAxes: [ {
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
})
