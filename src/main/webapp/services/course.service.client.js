function CourseServiceClient(){
    this.createCourse = createCourse;
    this.findAllCourses = findAllCourses;
    this.deleteCourse = deleteCourse;

    this.url = "https://wbdv-generic-server.herokuapp.com/api/001557591/courses"
    var self=this;

    function createCourse(course){
        return fetch(self.url,{
            method: 'POST',
            body:JSON.stringify(course),
            headers:{
                'content-type':'application/json'
            }
        }).then(function (response){
            return response.json()
        })
    }

    function findAllCourses(){
        return fetch(self.url).then(function (response){
            return response.json()
        })
    }

    function deleteCourse(courseId){
        return fetch(`${self.url}/${courseId}`,{method:'DELETE'})
            .then(function (response){
                return response
            })
    }
}