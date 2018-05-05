angular.module('main').controller('HomeController', ['$scope', function($scope) {

    var HomeView = this;

    $scope.$on('$viewContentLoaded', function() {
        init();
    });

    function init() {
        HomeView.model = {
            selected: null,
            list: {
                column1: [{
                    Id: 1,
                    FirstName: 'Steve',
                    LastName: 'Jobs',
                    Stars: 3.6,
                    Likes: 12,
                    Comments: 8,
                    Messages: 3,
                    ProfileImg: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE5NDg0MDU0NTIzODQwMDE1/steven-jobs-9354805-2-402.jpg'
                }, {
                    Id: 2,
                    FirstName: 'Steve',
                    LastName: 'Jobs',
                    Stars: 3.6,
                    Likes: 12,
                    Comments: 8,
                    Messages: 3,
                    ProfileImg: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE5NDg0MDU0NTIzODQwMDE1/steven-jobs-9354805-2-402.jpg'
                }]
            }
        };
    }
}]);