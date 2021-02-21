

var $usernameFld
var $passwordFld
var $lastnameFld
var $firstnameFld
var $roleFld

// var $passwordTd
// var hideOrSee

var $createBtn
var $updateBtn

var $tbody
var users
var currentUser

var userServices = new AdminUserServiceClient()


function main(){
    console.log("main")
    $tbody = $(".wm-tbody")

    $usernameFld = $("#username-fld")

    $lastnameFld = $("#lastName-fld")
    $firstnameFld = $("#firstName-fld")
    $roleFld = $("#role-Fld")

    // $passwordTd = $(".password-td")
    // hideOrSee = "password"
    // $passwordTd.append(`<input id="password-fld" type="${hideOrSee}" class="form-control"
    //                        placeholder="Password"/>`)

    $createBtn = $(".wm-create")
    $updateBtn = $(".wm-update")

    $createBtn.click(createUser)
    $updateBtn.click(updateUser)

    userServices.findAllUsers()
        .then(function (actualUsers){
            users = actualUsers
            renderTable(users)
        })
    $passwordFld = $("#password-fld")
}

function renderTable(users){
    $tbody.empty()
    let user;

    for(var i=0; i<users.length; i++){
        user = users[i]
        $tbody.append(`<tr class="wm-template wm-user wm-hidden">
                    <td class="wm-username">${user.username}</td>
                    <td>&nbsp;</td>
                    <td class="wm-first-name">${user.firstname}</td>
                    <td class="wm-last-name">${user.lastname}</td>
                    <td class="wm-role">${user.role}</td>
                    <td class="wm-actions">
                        <span class="pull-right">
                            <i id="${i}" class="fa-2x fa fa-times wm-delete-btn"></i>
                            <i id="${user._id}" class="fa-2x fa fa-pencil wm-edit-btn"></i>
                        </span>
                    </td>
                </tr>`)
    }
    $(".wm-delete-btn").click(deleteUser)
    $(".wm-edit-btn").click(editUser)
}

function createUser() {
    let newUser = {
        'username': $usernameFld.val(),
        'password': $passwordFld.val(),
        'lastname': $lastnameFld.val(),
        'firstname': $firstnameFld.val(),
        'role': $roleFld.val(),
    };
    userServices.createUser(newUser).then(
       function (response){
           newUser._id = response._id
           users.push(newUser)
           renderTable(users)
           $usernameFld.val("");
           $passwordFld.val("");
           $lastnameFld.val("")
           $firstnameFld.val("")
           $roleFld.val("FACULTY")
       }

    )
}

function deleteUser(event) {
    var index = $(event.target).attr("id")
    var id = users[index]._id
    userServices.deleteUser(id).then(function (){
        console.log("users before splice "+users.length)
        users.splice(index,1)
        console.log("users after splice "+users.length)
        renderTable(users)
    })
}

function editUser(event) {
    var userId = $(event.target).attr("id")
    currentUser = users.find(user => user._id === userId)

    // $passwordFld.remove()
    // $passwordTd.append(`<input id="password-fld" type="text" class="form-control"
    //                    value="${currentUser.password}"/>`)
    $passwordFld.val(currentUser.password)
    $usernameFld.val(currentUser.username)
    $lastnameFld.val(currentUser.lastname)
    $firstnameFld.val(currentUser.firstname)
    $roleFld.val(currentUser.role)

}

function updateUser(){
    currentUser.username = $usernameFld.val()
    currentUser.password = $passwordFld.val()
    currentUser.lastname = $lastnameFld.val()
    currentUser.firstname = $firstnameFld.val()
    currentUser.role = $roleFld.val()
    userServices.updateUser(currentUser._id, currentUser).then(function (){
        for(var i = 0;i<users.length;i++){
            if(users[i]._id==currentUser._id){
                users[i].username = currentUser.username
                users[i].password = currentUser.password
                users[i].lastname = currentUser.lastname
                users[i].firstname = currentUser.firstname
                users[i].role = currentUser.role
                break
            }
        }
        renderTable(users)
        $usernameFld.val("");
        $passwordFld.val("");
        $lastnameFld.val("")
        $firstnameFld.val("")
        $roleFld.val("FACULTY")
    })
}

$(main)