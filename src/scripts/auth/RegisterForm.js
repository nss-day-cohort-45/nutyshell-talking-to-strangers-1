const contentTarget = document.querySelector(".auth--register")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("userAuthenticated", e => {
    contentTarget.innerHTML = ""
})


eventHub.addEventListener("click", e => {
    if (e.target.id === "register--button") {
        const username = document.querySelector("#register--username").value
        const email = document.querySelector("#register--email").value

        if (username !== "" && email !== "") {
            // Does the user exist?
            fetch(`http://localhost:8088/users?username=${username}`)
            .then(response => response.json())
            .then(users => {
                if (users.length === 0) {
                    fetch("http://localhost:8088/users", {
                        "method": "POST",
                        "headers": {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            "username": username,
                            "email": email
                        })
                    })
                        .then(response => response.json())
                        .then((newUser) => {
                            sessionStorage.setItem("activeUser", newUser.id)

                            eventHub.dispatchEvent(new CustomEvent("userAuthenticated"))
                        })

                }
                else {
                    window.alert("Username already exists!  😭")
                }
            })
        }
        else {
            window.alert("Username & email are required fields! 😠")
        }
    }
})


const render = () => {
    contentTarget.innerHTML += `
 
    <section class="register">
    <div class="field">
        <div class="control">
            <input class="input is-primary mr-6 mt-4 is-rounded" id="register--username" type="text" placeholder="Enter your username">
            
        </div>
        <div class="control">
            <input class="input is-primary mr-6 mt-4 is-rounded" id="register--email" type="email" placeholder="Enter your email address">
            
        </div>
        <div class="control  is-flex is-justify-content-center">
            <button class="button mt-3 is-primary" id="register--button">Register</button>
        </div>
    </div>

    </section>
    
    
 
    `
}

export const RegisterForm = () => {
    render()
}