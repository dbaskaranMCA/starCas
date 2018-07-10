
var helmetcontroller = angular.module("starCasController", []);
helmetcontroller.controller('HomeController', ['$scope', function ($scope) {

    Highcharts.chart('container', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: false
        },
        credits: {
            enabled: false
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: 'Kiosk',
                y: 56.33
            }, {
                name: 'Web',
                y: 24.03,
                sliced: true,
                selected: true
            }, {
                name: 'Booking.com',
                y: 10.38
            }, {
                name: 'Android App',
                y: 4.77
            }, {
                name: 'IOS App',
                y: 0.91
            }, {
                name: 'Other',
                y: 0.2
            }]
        }]
    });


}]);