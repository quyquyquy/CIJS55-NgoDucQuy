const style = `<style>
.container{
    height: 100vh;
}
#form{
    width: 40%;
    margin:auto;
    text-align: center;
    background-color: lightblue;
    height: 100%;
    padding-top: 5%;
}
.title{
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 30px;
}
.btn{
    margin-top:20px;
    margin-bottom: 20px;
    margin-left: 10px;
}
#name{
    margin: 20px;
}
#email{
    margin: 20px;
}
#pass{
    margin: 20px;
}
#confirm{
    margin: 20px;
}
.login{
    color: #8904B1;
    font-weight: bold;
    font-size: 20px;
}

</style>
`
import {redirect} from "../index.js"
import {validateEmail} from "../component/checkValidEmail.js"
class RegisterScreen extends HTMLElement{
    constructor() {
        super()
        this._shadowRoot = this.attachShadow({mode:'open'})
        this._shadowRoot.innerHTML =`
        ${style}
        <div class="container">
        <form id="form">
            <div class="title">Share story</div>
            <input-wrapper id="name" type="text" placeholder="full name"></input-wrapper>
            <input-wrapper id="email" type="email" placeholder="Email"></input-wrapper>
            <input-wrapper id="pass" type="password" placeholder="Password"></input-wrapper>
            <input-wrapper id="confirm" type="password" placeholder="Confirm password"></input-wrapper>
            <button class="btn">Register</button>
            <div id="redirect">Already have account ? <p class="login">Login</p></div>
        </form>
        </div>
        ` 
        this._shadowRoot.getElementById('redirect')
        .addEventListener('click',()=>{
            redirect('login')
        })
        this._shadowRoot.getElementById('form')
        .addEventListener('submit', (e) => {
            e.preventDefault()
            // const name = this._shadowRoot.getElementById('name').value
            const email = this._shadowRoot.getElementById('email').value
            const pass = this._shadowRoot.getElementById('pass').value
            const name = this._shadowRoot.getElementById('name').value
            const confirm = this._shadowRoot.getElementById('confirm').value
            let isValid = true
            if(name.trim() === ''){
                this._shadowRoot.getElementById('name').setAttribute('error', 'please input your name')
                isValid =false
            } else if(name.trim() !== ''){
                this._shadowRoot.getElementById('name').setAttribute('error', '')
            }
            if(pass.trim() === ''){
                this._shadowRoot.getElementById('pass').setAttribute('error', 'please input your password')
                isValid = false
            }  else if(pass.trim() !== ''){
                this._shadowRoot.getElementById('pass').setAttribute('error', '')
            }
            if(confirm.trim() === ''){
                this._shadowRoot.getElementById('confirm').setAttribute('error', 'please input your confirm')
                isValid = false
            } else if(confirm.trim() !== pass){
                this._shadowRoot.getElementById('confirm').setAttribute('error', 'Please check your password')
            }  else if(confirm.trim() !== '') {
                this._shadowRoot.getElementById('confirm').setAttribute('error', '')
            }
            if(email.trim() === ''){
                this._shadowRoot.getElementById('email').setAttribute('error', 'please input your email')
                isValid = false
            } else if(validateEmail(email)===false) {
                this._shadowRoot.getElementById('email').setAttribute('error', 'Email is not valid')

            }
            if (isValid){
            firebase.auth().createUserWithEmailAndPassword(email, pass)
            .then((res) =>{
                alert('register succes')
                firebase.auth().currentUser.sendEmailVerification()
                firebase.auth().currentUser.updateProfile({
                    displayName: name
                })
                redirect('login')
            })
            .catch((err) =>{
                alert(err.message)
            })
            }
        })
        
    }
}
window.customElements.define('register-screen', RegisterScreen)
