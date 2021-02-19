// var myheader = jQuery("h1").html("hello").append(" world").css("background", "green")

// myheader.click(function (event){
//     alert("h1 is clicked")
//     console.log(event.target)
//     var mybody = jQuery(event.target).css("background","red")
// })


// wm: static array courses
// var courses = [
//     {name:"cs111", section:"02",seats:34, term:"Spring"},
//     {name:"cs222", section:"01",seats:45, term:"Fall"},
//     {name:"cs333", section:"03",seats:56, term:"Summer"},
//     {name:"cs444", section:"02",seats:67, term:"Spring"},
// ]

//wm: rendertable and delete row by static array
// function renderTable(courses){
//     courseTable = $("table")
//     console.log("rendertable")
//     $("tbody").empty()
//     var course;
//     for(var i=0; i<courses.length; i++){
//         course = courses[i];
//         courseTable.prepend(`<tr>
//                 <td>${course.name}</td>
//                 <td>${course.section}</td>
//                 <td>${course.seats}</td>
//                 <td>${course.term}</td>
//                 <td>
//                     <button id="${i}" class="del-btn">Delete</button>
//                     <button class="mod-btn">Modify</button>
//                 </td>
//             </tr>`)
//     }
//
//     $(".del-btn").click(function (event) {
//         console.log("del button")
//         var id = $(event.target).attr("id")
//         console.log("id=" + id)
//         courses.splice(id, 1)
//         renderTable(courses)
//     })
// }

// renderTable(courses);


// add static Html row data
// var add = jQuery("#add-btn").click(function (){
//     $("table")
//         .prepend(`<tr>
//                 <td>cs1111</td>
//                 <td>02</td>
//                 <td>34</td>
//                 <td>Spring</td>
//                 <td>
//                     <button class="btn">del</button>
//                     <button class="btn">Modify</button>
//                 </td>
//             </tr>`)})

var courses

var $courseTable
var $titleFld
var $sectionFld
var $seatsFld
var $termFld

var $addBtn
var $delBtn

var courseService = new CourseServiceClient()

function crtCourse(){
    var newCourse = {
        title: $titleFld.val(),
        section: $sectionFld.val(),
        seats: $seatsFld.val(),
        term: $termFld.val()
    }
    courseService.createCourse(newCourse)
        .then(function (actualCourse){
            courses.push(actualCourse)
            renderTable(courses)
    })
}

function delCourse(event){
    var courseId = $(event.target).attr("id")
    courseService.deleteCourse(courseId)
        .then(function (){
            courses.splice(courseId,1)
            console.log("delcourse")
            renderTable(courses)
        }
    )
}

function renderTable(courses){
    console.log("render" + courses)
    $courseTable = $(".table")
    $("table tbody").empty()
    for(var i=0; i<courses.length; i++){
        var course= courses[i]
        $courseTable.append(`<tr>
        <td>${course.title}</td>
        <td>${course.section}</td>
        <td>${course.seats}</td>
        <td>${course.term}</td>
        <td>
            <button id="${course._id}" class="wm-delete btn">Delete</button>
            <button id="${course._id}" class="wm-update btn">Update</button>
        </td>
        </tr>`)
    }
}

function main(){

    $titleFld = $(".wm-title")
    $sectionFld = $(".wm-section")
    $seatsFld = $(".wm-seats")
    $termFld = $(".wm-term")

    $addBtn = $("#add-btn")
    $delBtn = $(".wm-delete")

    $addBtn.click(crtCourse)
    // $delBtn.click(delCourse)

    courseService.findAllCourses()
       .then(function (actualCourses){
            courses = actualCourses
            renderTable(courses)
            console.log("main")
            $(".wm-delete").click(delCourse)
    })
    // var sd = $("#add-btn").click(function () {
    //     var newCourse ={
    //         name: "new course",
    //         section: "03",
    //         seats: 34,
    //         term: "winter"
    //     }
    //     courses.push(newCourse)
    //     renderTable(courses)
    // })
}

$(main)


