// Create references to our canvas.
let canvas = document.querySelector('#bridge-chart')
let context = canvas.getContext('2d')

// Create a new Chart object and add data within it.
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

    // Options allows us to start at value 0 in the Chart.
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
