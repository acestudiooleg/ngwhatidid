'use strict';

(function() {

function ProjectResource($resource) {
  return $resource('/api/projects/:id', {
    id: '@_id'
  }, {

  });
}

angular.module('ngwhatididApp')
  .service('Project', ProjectResource);

})();