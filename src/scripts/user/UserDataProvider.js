const eventHub = document.querySelector(".container")

export const GetUsers = () => {
    return fetch("http://localhost:8088/users")
        .then(response => response.json())
        .then(parsedUsers => {
            userList = parsedUsers
        })
}

let userList = []

export const UseUsers = () => userList.slice()
