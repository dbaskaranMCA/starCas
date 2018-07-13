
var helmetcontroller = angular.module("starCasController", []);
helmetcontroller.controller('atmController', ['$scope', function ($scope) {

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