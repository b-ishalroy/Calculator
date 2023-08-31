// let string = ''
// let buttons = document.querySelectorAll('.calculator__keys')
// // console.log(buttons)
// Array.from(buttons).forEach((button)=>{
//     button.addEventListener('click',(e)=>{
//         console.log(e.target)
// string = string +e.target.innerHTML
// document.querySelector('.calculator__display').value=string
//     })
// })

let string = '';
let buttons = document.querySelectorAll('.button')
// console.log(buttons)
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string)
            document.querySelector('input').value = string
        }

        else {
            console.log(e.target)
            string = string + e.target.innerHTML
            document.querySelector('input').value = string
        }

    })
})
