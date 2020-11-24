document.addEventListener('DOMContentLoaded', () => {
    
    focus();

})

function focus(){

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
    

    name.addEventListener('mouseout', () => {
        name.blur();
    })

    email.addEventListener('mouseout', () => {
        email.blur();
    })

    message.addEventListener('mouseout', () => {
        message.blur();
    })

    
    const max = document.getElementById('max');
    if (max){
        max.addEventListener('mouseover', () =>{
            max.focus();						
        })
    
        max.addEventListener('mouseleave', () => {
            max.blur();
        })

    }
    

}