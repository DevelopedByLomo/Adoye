
//to validate the login details
const defaultPassword = ['karl123', 'tetteh123']
const defaultUsername = ['medicine', 'engineering']
const password =document.getElementById('password')
const username =document.getElementById('username')
const loginBtn =document.querySelector('.login-btn')
const loginEl =document.querySelector('.log-in')
const welcomeText =document.querySelector('.welcomeText')
let enteredPassword = []
let enteredUsername = []
let passwordCorrect = false
let UsernameCorrect = false


loginBtn.addEventListener('click',login)

function login(){
    //if something is in the input do this
    if(password.value && username.value){
        enteredPassword.push(password.value)
        enteredUsername.push(username.value)
        if(true){
            defaultPassword.forEach(defaultPassword => {
                if(enteredPassword[0] == defaultPassword){
                    console.log('passwrod works')
                    passwordCorrect = true
                }
            })    
            defaultUsername.forEach(defaultUsername => {
                if(enteredUsername[0] == defaultUsername){
                    console.log('name works')
                    UsernameCorrect = true
                }
            }) 

            if(UsernameCorrect && passwordCorrect){
                loginEl.remove()
                welcomeText.innerHTML = `Good day, of faculty of ${username.value} , would you like to book a bus?`
            }
        console.log(enteredUsername,enteredPassword)
        //to empty the fields
        password.value = ''
        username.value = ''
        enteredPassword = []
        enteredUsername = []

    }
    }
}