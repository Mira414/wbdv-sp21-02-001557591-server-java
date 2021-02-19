
// (function () {
//     var $usernameFld, $passwordFld;
//     var $firstNameFld, $lastNameFld, $roleFld;
//     var $removeBtn, $editBtn, $createBtn;
//     var $userRowTemplate, $tbody;


//     function selectUser() { … }

//     function findAllUsers() { … } // optional - might not need this
//     function findUserById() { … } // optional - might not need this
// })();


var $usernameFld
var $passwordFld
var $lastnameFld
var $firstnameFld
var $roleFld

var $createBtn
var $editBtn

var $tbody
var users

var userServices = new AdminUserServiceClient()


function main(){
    $tbody = $(".wm-tbody")

    $usernameFld = $("#username-fld")
    $passwordFld = $("#password-fld")
    $lastnameFld = $("#lastName-fld")
    $firstnameFld = $("#firstName-fld")
    $roleFld = $("#role-Fld")

    $createBtn = $(".wm-create")
    $editBtn = $(".wm-edit")

    $createBtn.click(createUser)
    $editBtn.click(editUser)

    console.log(typeof userServices.findAllUsers())
    userServices.findAllUsers()
        .then(function (actualUsers){
            users = actualUsers
            renderTable(users)
            $(".wm-delete-btn").click(deleteUser)
        })

}

function renderTable(users){
    console.log(users)
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
                            <i class="fa-2x fa fa-times wm-remove"></i>
                            <i class="fa-2x fa fa-pencil wm-edit"></i>
                        </span>
                    </td>
                </tr>`)
    }
}

function createUser() {
    console.log("controller's create user")
    let newUser = {
        'username': $usernameFld.val(),
        'password': $passwordFld.val(),
        'lastname': $lastnameFld.val(),
        'firstname': $firstnameFld.val(),
        'role': $roleFld.val()
    };
    userServices.createUser(newUser).then(
       function (){
           users.push(newUser)
           renderTable(users)
           $usernameFld.val("");
           $passwordFld.val("");
           $lastnameFld.val("")
           $firstnameFld.val("")
           $roleFld.val("")
       }

    )
}

function deleteUser() {
    console.log("deleteUser")
}

function editUser() {
    console.log("editUser")
}

$(main)