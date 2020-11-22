document.addEventListener('DOMContentLoaded', () => {
    
    focus();

    // const max = document.getElementById('max');
    // max.addEventListener('mouseover', () =>{
    //     max.focus();						
    // })

    // const name = document.getElementById('name');
    // name.addEventListener('mouseover', () => {
    //     name.focus();
    // })

    // const email = document.getElementById('email');
    // email.addEventListener('mouseover', () => {
    //     email.focus();
    // })

    // const message = document.getElementById('message');
    // message.addEventListener('mouseover', () => {
    //     message.focus();
    // })



    // max.addEventListener('mouseleave', () => {
    //     max.blur();
    // })

    // name.addEventListener('mouseout', () => {
    //     name.blur();
    // })

    // email.addEventListener('mouseout', () => {
    //     email.blur();
    // })

    // message.addEventListener('mouseout', () => {
    //     message.blur();
    // })

    




})

function focus(){


    const max = document.getElementById('max');
    max.addEventListener('mouseover', () =>{
        max.focus();						
    })

    const name = document.getElementById('name');
    name.addEventListener('mouseover', () => {
        name.focus();
    })

    const email = document.getElementById('email');
    email.addEventListener('mouseover', () => {
        email.focus();
    })

    const message = document.getElementById('message');
    message.addEventListener('mouseover', () => {
        message.focus();
    })



    max.addEventListener('mouseleave', () => {
        max.blur();
    })

    name.addEventListener('mouseout', () => {
        name.blur();
    })

    email.addEventListener('mouseout', () => {
        email.blur();
    })

    message.addEventListener('mouseout', () => {
        message.blur();
    })

}