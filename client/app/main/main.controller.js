'use strict';

(function() {

    class MainController {

        constructor($http, $scope, Auth, Activity, Project, socket) {
            this.$http = $http;
            this.Project = Project;
            this.Activity = Activity;
            this.awesomeThings = [];
            this.user = Auth.getCurrentUser();

            $http.get('/api/things').then(response => {
                this.awesomeThings = response.data;
                socket.syncUpdates('thing', this.awesomeThings);
            });

            $scope.$on('$destroy', function() {
                socket.unsyncUpdates('thing');
            });

            this.projects = [];
            this.loadProjects();

            this.activities = [{
                _id: 'gvbrftgh',
                message: 'Наполнял базу данных',
                project: {
                    _id: 'dsfs',
                    name: 'Anthrotect'
                },
                date: '16/03/2016',
                time: '10:51'
            }, {
                _id: 'gvbrdfghjftgh',
                message: 'Верстал проект',
                project: {
                    _id: 'retqdgfg',
                    name: 'Innocentre'
                },
                date: '16/03/2016',
                time: '12:51'
            }];
        }

        loadProjects() {
            this.Project
                .query()
                .$promise
                .then(projects => {
                    this.projects = projects;
                });
        }
        
        newActivity() {
            debugger;
            let newActivity = {
                message: this.message,
                user: this.user._id,
                project: this.project
            };
            this.Activity.save(newActivity);

        }
    }


    angular.module('ngwhatididApp')
        .controller('MainController', MainController);

})();
