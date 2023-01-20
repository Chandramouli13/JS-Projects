(function(){

    const form = document.querySelector('#message-form');

    form.addEventListener('submit', function (e) {
        e.preventDefault()

        const message = document.querySelector('#message')
        const messageContent = document.querySelector('.message-content')

        messageContent.textContent = message.value
        message.value = ''
    })

})()