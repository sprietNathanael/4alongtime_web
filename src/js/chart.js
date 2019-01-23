var progressChart;
var detailsChart;

function createCharts(){
    createProgressChart();
    createDetailsChart();

}

function destroyCharts(){
    if(progressChart !== undefined)
    {
        progressChart.destroy();
    }
    if(detailsChart !== undefined)
    {
        detailsChart.destroy();
    }
}

function createProgressChart(){

    var ctx = document.getElementById("progressChart").getContext('2d');
    data = {
        datasets: [{
            data: [3000, 7000],
            backgroundColor: [
                '#FF5151',
                '#DDDDDD',
            ],
            borderWidth: 0
        }],
        labels: [
            'Sponsorisé',
            'Reste à faire',
        ]

    };
    // And for a doughnut chart
    progressChart = new Chart(ctx, {
        type: 'doughnut',
        data: data,
        // options: options
    });
}

function createDetailsChart(){

    var ctx = document.getElementById("budgetChart").getContext('2d');
    data = {
        datasets: [{
            data: [3300, 1000,100,600,5000],
            backgroundColor: [
                '#FF5151',
                '#88F',
                '#F5F584',
                '#8FEF8F',
                '#953CD3',
            ],
            borderWidth: 0
        }],

        labels: [
            'Inscription',
            'Essence / péages',
            'Assurances',
            'Matériel divers',
            'Achat / préparation 4L'

        ],

    };
    // And for a doughnut chart
    detailsChart = new Chart(ctx, {
        type: 'doughnut',
        data: data,
        // options: options
    });

}