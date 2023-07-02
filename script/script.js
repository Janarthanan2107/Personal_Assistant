// Using javascript file as strict file eliminating the silent errors into throwable errors
'use strict';

//selecting every elements from the html files in two types inputs(providing values) and outputs(displaying)
//inputs
const assistant = document.getElementById('assistant')
const widgetsContainer = document.getElementById('widgets-container')
const clock = document.getElementById('clock')
const calender = document.getElementById('calender')
const joke = document.getElementById('joke')
const btnClose = document.getElementById('btn-close');
const base = document.getElementById('base');
//outputs
const modelContainer = document.getElementById('model-container');
const overlay = document.getElementById('overlay')
const dialogMsg = document.getElementById('dialog-msg')

//functions
const init = function () {
    modelContainer.classList.add('close')
    overlay.classList.remove('overlay')
}

const open = function () {
    modelContainer.classList.remove('close')
    modelContainer.classList.add('open')
    overlay.classList.add('overlay')
}

const close = function () {
    modelContainer.classList.remove('open')
    modelContainer.classList.add('close')
    overlay.classList.remove('overlay')
}

//events
assistant.addEventListener('click', () => {
    assistant.classList.add('active')
    console.log(assistant.classList.contains('active'))
    if (assistant.classList.contains('active')) {
        widgetsContainer.style.display = 'flex'
        base.style.animationName = 'active-wave'
    }
})
// event calls for all widgets
clock.addEventListener('click', () => {
    open()
    dialogMsg.innerText = `Perhaps it's time for you to get a watch? I'm just kidding... No. Really... It's 15:00.`
})

calender.addEventListener('click', () => {
    open()
    dialogMsg.innerText = `A calendar is a great investment you know; I mean, your computer even has one! Since you asked, today is 7/2/2023.`
})

joke.addEventListener('click', () => {
    open()
    dialogMsg.innerText = `A perfectionist walked into a bar…apparently, the bar wasn’t set high enough.`
})

// closing te dialog
btnClose.addEventListener('click', close)

document.addEventListener('keydown', function (event) {
    // console.log(event.key)
    if (event.key === 'Escape') {
        close()
    }
})

overlay.addEventListener('click', function (event) {
    console.log(event.target.classList.contains('overlay'))
    if (event.target.classList.contains('overlay') === true) {
        close()
    } else {
        // do nothing
    }
})



//initial settings
init();
