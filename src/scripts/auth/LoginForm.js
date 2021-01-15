const contentTarget = document.querySelector(".auth--login")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("userAuthenticated", e => {
    contentTarget.innerHTML = ""
})

eventHub.addEventListener("click", e => {
    if (e.target.id === "login__button") {
        const username = document.querySelector("#login__username").value

        return fetch(`http://localhost:8088/users?username=${username}`)
            .then(response => response.json())
            .then(users => {
                if (users.length > 0) {
                    const user = users[0]
                    sessionStorage.setItem("activeUser", user.id)
                    eventHub.dispatchEvent(new CustomEvent("userAuthenticated"))
                }
            })
    }
})


const render = () => {
    contentTarget.innerHTML += `

    <section class="login">
    <div class="field">
        <div class="control">
            <input class="input is-primary mr-6 mt-4 is-rounded" id="login__username" type="text" placeholder="Enter your username">
            
        </div>
        <div class="control  is-flex is-justify-content-center">
            <button class="button mt-3 is-primary" id="login__button">Log in</button>
        </div>
    </div>
    `
}

export const LoginForm = () => {
    render()
}
