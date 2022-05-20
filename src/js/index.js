const fullName = document.querySelectorAll('#name')
const email = document.querySelectorAll('#email')
const phone = document.querySelectorAll('#phone')
const text = document.querySelectorAll('#text')
const submit = document.getElementById('submit')


document.getElementById('form').addEventListener(
    'click', stopDefAction, false
)



addEventListener('keyup', () => {
    isFilled(fullName)
    isFilled(email)
    isFilled(phone)
    isFilled(text)
})

submit.addEventListener('click', () => {
    validate(fullName)
    validate(email)
    validate(phone)
    validate(text)
})

function validate(item) {
    if (item[0].value.trim() == '') {
        item[0].classList.add('empty')
        item[1].classList.remove('hidden')
    }
}

function isFilled(item){
    if(item[0].value.trim() != ''){
        item[0].classList.add('full')
        item[1].classList.add('hidden')
        item[0].classList.remove('empty')
    } else {
        item[0].classList.remove('full')

    }
}

function stopDefAction(evt) {
    evt.preventDefault();
}
