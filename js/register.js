function passwordView(element) {
    if (element.checked) {
        document.getElementById("password").type = "text"
        document.getElementById("repeatPassword").type = "text"
    } else { 
        document.getElementById("password").type = "password"
        document.getElementById("repeatPassword").type = "password" 
    }
}

function signUp () {
    const firstNameValue = document.getElementById('firstName').value
    const lastNameValue = document.getElementById('lastName').value
    const emailValue = document.getElementById('email').value
    const passwordValue = document.getElementById('password').value
    const repeatPasswordValue = document.getElementById('repeatPassword').value
    if (passwordValue == repeatPasswordValue) {
        sendRequest(firstNameValue, lastNameValue, emailValue, passwordValue)
    } else { 
        document.getElementById('message').innerHTML  = "Пароли не совпадают"
        document.getElementById('message').classList = "failed"
    }
}

async function sendRequest (firstNameValue, lastNameValue, emailValue, passwordValue) {
    const messageField = document.getElementById('message')

    const data = {
        firstName: firstNameValue,
        lastName: lastNameValue,
        email: emailValue,
        password: passwordValue
    }

    try {
        const request = await axios.post('http://127.0.0.1:5000/auth/signup', data)
        console.log(request);
        if (!request.data.status == "success") {
            throw 'Not found token!'
        }
        messageField.innerHTML  = request.data.message.en
        messageField.style.display = 'block'
        messageField.classList = "success"
    } catch (error) {
        messageField.innerHTML  = error
        messageField.style.display = 'block'
    }

}