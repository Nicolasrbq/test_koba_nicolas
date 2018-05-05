angular.module('main').controller('HomeController', ['$scope', function($scope) {

    var HomeView = this;

    HomeView.getSelectedItemsIncluding = function(list, item) {
        item.selected = true;
        return list.filter(function(item) { return item.selected; });
    };

    HomeView.onDrop = function(list, items, index) {
        angular.forEach(list, function(item) { item.selected = false; });
        list = list.slice(0, index)
            .concat(items)
            .concat(list.slice(index));
        return true;
    };

    HomeView.onMoved = function(list) {
        list.items = list.items.filter(function(item) { return !item.selected; });
    };

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
                    LastName: 'Jobs 1',
                    JobTitle: 'Producteur de pommes',
                    Stars: 3.6,
                    Likes: 12,
                    Comments: 8,
                    Messages: 3,
                    ProfileImg: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE5NDg0MDU0NTIzODQwMDE1/steven-jobs-9354805-2-402.jpg'
                }, {
                    Id: 2,
                    FirstName: 'Steve',
                    LastName: 'Jobs 2',
                    JobTitle: 'Producteur de pommes',
                    Stars: 3.6,
                    Likes: 12,
                    Comments: 8,
                    Messages: 3,
                    ProfileImg: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE5NDg0MDU0NTIzODQwMDE1/steven-jobs-9354805-2-402.jpg'
                }],
                column2: [{
                    Id: 1,
                    FirstName: 'Steve',
                    LastName: 'Jobs',
                    JobTitle: 'Producteur de pommes',
                    Stars: 3.6,
                    Likes: 12,
                    Comments: 8,
                    Messages: 3,
                    ProfileImg: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE5NDg0MDU0NTIzODQwMDE1/steven-jobs-9354805-2-402.jpg'
                }, {
                    Id: 2,
                    FirstName: 'Steve',
                    LastName: 'Jobs',
                    JobTitle: 'Producteur de pommes',
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