
var helmetcontroller = angular.module("starCasController", []);
helmetcontroller.controller('atmController', ['$scope', function ($scope) {


    $('#atmTable').DataTable({


        dom: 'frtlip',
        language: {
            "searchPlaceholder": "search",
            "search": '<i class="icon icon-search search-icon-align"></i>',
          
            "paginate": {
                "previous": '<i class="icon icon-angle-double-left"></i>',
                "next": '<i class="icon icon-angle-double-right"></i>'
            },
            sLengthMenu: "_MENU_"


        },

        aoColumnDefs: [{
            orderable: false, aTargets: [0, -1] //disable sorting for the 1st column
        }],
        order: []
    });

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