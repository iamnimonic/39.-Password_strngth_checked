const password_el = document.querySelector('#password')
const body_el = document.querySelector('body')

password_el.addEventListener('input', decreaseOpacity)

function decreaseOpacity() {
    let len = password_el.value.length
    body_el.style.backdropFilter = `blur(${20-(len*3)}px)`
}