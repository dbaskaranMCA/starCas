
var helmetcontroller = angular.module("starCasController", []);
helmetcontroller.controller('atmController', ['$scope', function ($scope, $timeout) {

    $('#atmTable').DataTable({
        dom: 'frtlip',
        language: {
            "searchPlaceholder": "search",
            //"search": '<i class="icon icon-search search-icon-align"></i>',

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


}]);

helmetcontroller.controller('txnMonitorController', ['$scope', '$timeout', '$interval', function ($scope, $timeout, $interval) {

    $('#txnMonitor').DataTable({
        dom: 'frtlip',
        iDisplayLength: 100,
        language: {
            "searchPlaceholder": "search",
            //"search": '<i class="icon icon-search search-icon-align"></i>',

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

    Highcharts.chart('lineGraph', {
        chart: {
            type: 'spline'
        },
        title: {
            text: 'Line Graph'
        },
        subtitle: {
            enabled: false
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        credits: {
            enabled: false
        },
        yAxis: {
            //title: {
            //    text: 'Temperature'
            //},
            labels: {
                formatter: function () {
                    return this.value;
                }
            }
        },
        tooltip: {
            crosshairs: true,
            shared: true
        },
        plotOptions: {
            spline: {
                marker: {
                    radius: 4,
                    lineColor: '#666666',
                    lineWidth: 1
                }
            }
        },
        series: [{
            name: 'line1',
            marker: {
                symbol: 'square'
            },
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, {
                y: 26.5,
                //marker: {
                //    symbol: 'url(https://www.highcharts.com/samples/graphics/sun.png)'
                //}
            }, 23.3, 18.3, 13.9, 9.6]

        }, {
            name: 'line2',
            marker: {
                symbol: 'diamond'
            },

            data: [{
                y: 3.9,
                //marker: {
                //    symbol: 'url(https://www.highcharts.com/samples/graphics/snow.png)'
                //}
            }, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
        }]
    });



    Highcharts.chart('barChart', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Bar Chart'
        },
        subtitle: {
            text: ''
        },
        credits: {
            enabled: false
        },
        xAxis: {
            categories: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: ''
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Bar1',
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

        }, {
            name: 'Bar2',
            data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]

        }]
    });

    Highcharts.chart('pieChart', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Pie Chart'
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
                name: 'Chrome',
                y: 61.41,
                sliced: true,
                selected: true
            }, {
                name: 'Safari',
                y: 12.18
            }, {
                name: 'Sogou Explorer',
                y: 3.64
            }, {
                name: 'Opera',
                y: 12.6
            }, {
                name: 'Other',
                y: 2.61
            }]
        }]
    });



    $scope.reload = function () {
        //$http.get('http://localhost:3000/api/todos').
        //    success(function (data) {
        //        $scope.todos = data.todos;
        //    });

        $timeout(function () {
            alert("Page has been refreshed")
        }, 60000)
    };
    $scope.reload();

    $interval($scope.reload, 60000);







}])


helmetcontroller.controller('addAtmController', ['$scope', function ($scope, $timeout) {

    //$('#atmTable').DataTable({
    //    dom: 'frtlip',
    //    language: {
    //        "searchPlaceholder": "search",
    //        //"search": '<i class="icon icon-search search-icon-align"></i>',

    //        "paginate": {
    //            "previous": '<i class="icon icon-angle-double-left"></i>',
    //            "next": '<i class="icon icon-angle-double-right"></i>'
    //        },
    //        sLengthMenu: "_MENU_"


    //    },

    //    aoColumnDefs: [{
    //        orderable: false, aTargets: [0, -1] //disable sorting for the 1st column
    //    }],
    //    order: []
    //});

    $('#toggle-one').bootstrapToggle();
    $('#toggle-two').bootstrapToggle();
    $('#connectionType').bootstrapToggle();
    $("#KeepAlive").bootstrapToggle();
    $("#atmStatus").bootstrapToggle();
    $('#loggingFlag').bootstrapToggle();
    $('.selectpicker').selectpicker({});



}]);

helmetcontroller.controller('addBranchController', ['$scope', function ($scope, $timeout) {

    //$('#atmTable').DataTable({
    //    dom: 'frtlip',
    //    language: {
    //        "searchPlaceholder": "search",
    //        //"search": '<i class="icon icon-search search-icon-align"></i>',

    //        "paginate": {
    //            "previous": '<i class="icon icon-angle-double-left"></i>',
    //            "next": '<i class="icon icon-angle-double-right"></i>'
    //        },
    //        sLengthMenu: "_MENU_"


    //    },

    //    aoColumnDefs: [{
    //        orderable: false, aTargets: [0, -1] //disable sorting for the 1st column
    //    }],
    //    order: []
    //});

    $('#toggle-one').bootstrapToggle();
    $('#toggle-two').bootstrapToggle();
    $('#connectionType').bootstrapToggle();
    $("#KeepAlive").bootstrapToggle();
    $("#atmStatus").bootstrapToggle();
    $('#loggingFlag').bootstrapToggle();
    $('.selectpicker').selectpicker({});

    $scope.IsVisible = false;

    $scope.ShowHide = function () {
        $scope.IsVisible = $scope.IsVisible = true;
    }

}]);

helmetcontroller.controller('atmTypeController', ['$scope', function ($scope, $timeout) {


    $scope.IsVisible = false;

    $scope.ShowHide = function () {
        $scope.IsVisible = $scope.IsVisible = true;
    }

}]);

helmetcontroller.controller('addInstitutionController', ['$scope', function ($scope, $timeout) {

    $scope.IsVisible = false;
    $scope.ShowHide = function () {
        $scope.IsVisible = $scope.IsVisible = true;
    }

}]);
helmetcontroller.controller('addProfileController', ['$scope', function ($scope, $timeout) {

    $scope.IsVisible = false;
    $scope.ShowHide = function () {
        $scope.IsVisible = $scope.IsVisible = true;
    }

    $("#loginIp").bootstrapToggle();
    $('#consecutive').bootstrapToggle();
    $("#passwordExpire").bootstrapToggle();
    $("#force").bootstrapToggle();
    $('.selectpicker').selectpicker({});

}]);

helmetcontroller.controller('addUserController', ['$scope', function ($scope, $timeout) {

    $scope.IsVisible = false;
    $scope.ShowHide = function () {
        $scope.IsVisible = $scope.IsVisible = true;
    }

    $("#status").bootstrapToggle();
    $('.selectpicker').selectpicker({});

}]);

helmetcontroller.controller('profileController', ['$scope', function ($scope, $timeout) {

    $scope.IsVisible = false;
    $scope.ShowHide = function () {
        $scope.IsVisible = $scope.IsVisible = true;
    }

    $('#atmTable').DataTable({
        dom: 'frtlip',
        language: {
            "searchPlaceholder": "search",
            //"search": '<i class="icon icon-search search-icon-align"></i>',

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


}]);

helmetcontroller.controller('userController', ['$scope', function ($scope, $timeout) {

    $scope.IsVisible = false;
    $scope.ShowHide = function () {
        $scope.IsVisible = $scope.IsVisible = true;
    }

    $('#atmTable').DataTable({
        dom: 'frtlip',
        language: {
            "searchPlaceholder": "search",
            //"search": '<i class="icon icon-search search-icon-align"></i>',

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


}]);

helmetcontroller.controller('addUserController', ['$scope', function ($scope, $timeout) {

    $scope.IsVisible = false;
    $scope.ShowHide = function () {
        $scope.IsVisible = $scope.IsVisible = true;
    }

    $('.datepicker').datepicker({
        startDate: '-3d'
    });
    $('#atmTable').DataTable({
        dom: 'frtlip',
        language: {
            "searchPlaceholder": "search",
            //"search": '<i class="icon icon-search search-icon-align"></i>',

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


}]);

helmetcontroller.controller('atmMonitorController', ['$scope', function ($scope, $timeout) {

    $scope.IsVisible = false;
    $scope.ShowHide = function () {
        $scope.IsVisible = $scope.IsVisible = true;
    }


    $scope.gotoDiv = function(x) {
        var newHash = 'anchor' + x;
        if ($location.hash() !== newHash) {
            $location.hash('anchor' + x);
        } else {
            $anchorScroll();
        }
    };


});

}]);