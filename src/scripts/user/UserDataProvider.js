const eventHub = document.querySelector(".container")

export const GetUsers = () => {
    return fetch("http://localhost:8088/users")
        .then(response => response.json())
        .then(parsedUsers => {
            users = parsedUsers
        })
}

let users = []

export const UseUsers = () => {
    users.slice()
}