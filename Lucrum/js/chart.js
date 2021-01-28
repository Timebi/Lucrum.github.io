var ctx = document.getElementById('btcChart').getContext('2d');
var gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(198,243,239,1)');
    gradient.addColorStop(1, 'rgba(198,243,239,0)');
var myLineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['ЯНВ', 'МАР', 'МАЙ', 'ИЮЛ'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: gradient,
            borderColor: 'rgb(0,216,189)',
            borderJoinStyle: 'bevel',
            pointHoverRadius: 8,
            borderCapStyle: 'butt',
            lineTension: 0,
            data: [10,15,12,18],
        }]
    },
    options: {
        legend: {
            display: false,
            labels: {
                fontColor: 'rgb(171,176,193)',
            }
        },
        layot: {
            padding: {
                top: 10,
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    display: false
                }
            }]
        },
        tooltips: {
            mode: 'interpolate',
            intersect: false
        },
        plugins: {
            crosshair: {
                line: {
                    color: 'rgb(0,216,189)',
                    width: 1
                },
            }
        }
    }
});


var ctx = document.getElementById('etcChart').getContext('2d');
var gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(198,243,239,1)');
    gradient.addColorStop(1, 'rgba(198,243,239,0)');
var myLineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['ЯНВ', 'МАР', 'МАЙ', 'ИЮЛ'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: gradient,
            borderColor: 'rgb(0,216,189)',
            borderJoinStyle: 'bevel',
            pointHoverRadius: 8,
            borderCapStyle: 'butt',
            lineTension: 0,
            data: [23,30,15,20],
        }]
    },
    options: {
        legend: {
            display: false,
            labels: {
                fontColor: 'rgb(171,176,193)',
            }
        },
        layot: {
            padding: {
                top: 10,
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    display: false
                }
            }]
        },
        tooltips: {
            mode: 'interpolate',
            intersect: false
        },
        plugins: {
            crosshair: {
                line: {
                    color: 'rgb(0,216,189)',
                    width: 1
                },
            }
        }
    }
});



var ctx = document.getElementById('ltcChart').getContext('2d');
var gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(198,243,239,1)');
    gradient.addColorStop(1, 'rgba(198,243,239,0)');
var myLineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['ЯНВ', 'МАР', 'МАЙ', 'ИЮЛ'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: gradient,
            borderColor: 'rgb(0,216,189)',
            borderJoinStyle: 'bevel',
            pointHoverRadius: 8,
            borderCapStyle: 'butt',
            lineTension: 0,
            data: [12,23,15,4],
        }]
    },
    options: {
        legend: {
            display: false,
            labels: {
                fontColor: 'rgb(171,176,193)',
            }
        },
        layot: {
            padding: {
                top: 10,
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    display: false
                }
            }]
        },
        tooltips: {
            mode: 'interpolate',
            intersect: false
        },
        plugins: {
            crosshair: {
                line: {
                    color: 'rgb(0,216,189)',
                    width: 1
                },
            }
        }
    }
});



var ctx = document.getElementById('usdtChart').getContext('2d');
var gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(198,243,239,1)');
    gradient.addColorStop(1, 'rgba(198,243,239,0)');
var myLineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['ЯНВ', 'МАР', 'МАЙ', 'ИЮЛ'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: gradient,
            borderColor: 'rgb(0,216,189)',
            borderJoinStyle: 'bevel',
            pointHoverRadius: 8,
            borderCapStyle: 'butt',
            lineTension: 0,
            data: [30,18,10,14],
        }]
    },
    options: {
        legend: {
            display: false,
            labels: {
                fontColor: 'rgb(171,176,193)',
            }
        },
        layot: {
            padding: {
                top: 10,
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    display: false
                }
            }]
        },
        tooltips: {
            mode: 'interpolate',
            intersect: false
        },
        plugins: {
            crosshair: {
                line: {
                    color: 'rgb(0,216,189)',
                    width: 1
                },
            }
        }
    }
});