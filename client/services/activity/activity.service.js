'use strict';

(function() {

function ProjectResource($resource) {
  return $resource('/api/activitys/:id', {
    id: '@_id'
  }, {

  });
}

angular.module('ngwhatididApp')
  .service('Activity', ProjectResource);

})();