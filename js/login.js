function signIn () {
    const emailValue = document.getElementById('email').value
    const passwordValue = document.getElementById('password').value
    sendRequest(emailValue, passwordValue)
}

async function sendRequest (emailValue, passwordValue) {
    const messageField = document.getElementById('message')

    const data = {
        email: emailValue,
        password: passwordValue
    }

    try {
        const request = await axios.post('http://127.0.0.1:5000/auth/signin', data)
        if (!request.data.token) {
            throw 'Not found token!'
        }
        messageField.innerHTML  = request.data.message.en
        messageField.style.display = 'block'
    } catch (error) {
        messageField.innerHTML  = error
        messageField.style.display = 'block'
    }

}