
let users = []

export const GetUsers = () => {
    return fetch("http://localhost:8088/users")
        .then(response => response.json())
        .then(parsedUsers => {
            users = parsedUsers
        })
}


export const UseUsers = () =>  users.slice()
