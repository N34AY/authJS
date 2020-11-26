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

get - https://www.svadba.com/chat/updates/status+messages/everyone/?messages=113031805396


get chat history - https://api.svadba.com/v2/chats/1951585/messages/48728937?select=50

post send message - https://www.svadba.com/chat/send-message/48728937
form data
tag: 26406966
source: lc
message: Hello!
type: 1


get mans - https://www.svadba.com/chat/updates/contacts+gifts+status+games+messages+onlines+invites+search+attentions+potential-attendees/48728937/?onlines=50
onlines: 50