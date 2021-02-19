function AdminUserServiceClient() {
    this.createUser = createUser;
    this.findAllUsers = findAllUsers;
    this.findUserById = findUserById;
    this.deleteUser = deleteUser;
    this.updateUser = updateUser;
    this.url = 'https://wbdv-generic-server.herokuapp.com/api/001557591/users';
    let self = this;

    function createUser(user) {
        console.log(user)
        return fetch(self.url,
            {method:'POST',
                body: JSON.stringify(user),
                headers: {'content-type': 'application/json'}
            }).then(response=> response.json())
    }

    function findAllUsers() {
        console.log("service findall")
        return fetch(self.url).then( response=> response.json())
    }

    function findUserById(userId) {

    }
    function updateUser(userId, user) {

    }
    function deleteUser(userId) {

    }
}