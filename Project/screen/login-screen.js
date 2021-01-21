
import {redirect} from "../index.js"
import {validateEmail} from "../checkValidEmail.js"
class LoginScreen extends HTMLElement {
    constructor() {
        super();
        this._shadowDom = this.attachShadow({ mode: 'open' });
        this._shadowDom.innerHTML = `
            <style>
            .container{
                height: 100vh;
            }
            #login-form{
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
            #email{
                margin: 20px;
            }
            #pass{
                margin: 20px;
            }
            .btn{
                margin-top:20px;
                margin-bottom: 20px;
                margin-left: 10px;
            }
            .register{
                color: #8904B1;
                font-weight: bold;
                font-size: 20px;
            }
            
            </style>
            <div class="container">
                <form id = "login-form">
                    <div class="title">
                        Share Story Login
                    </div>
                    <input-wrapper  id = "email" type="email" placeholder = "Email"></input-wrapper>
                    <input-wrapper id = "pass" type="password" placeholder = "Password"></input-wrapper>
                    <button class = "btn">Login</button>
                    <div id = "redirect">Don't have an account? <p class="register">Register here</p></div>
                </form>
            </div>
                    
        
        `
        
        this._shadowDom.getElementById('redirect')
        .addEventListener('click',()=>{
            redirect('register')
        })
        this._shadowDom.getElementById('login-form').onsubmit = (e) => {
            e.preventDefault();
            const email = this._shadowDom.getElementById('email').value;
            const pass = this._shadowDom.getElementById('pass').value;
            if(email.trim() === ''){
                this._shadowDom.getElementById('email').setAttribute('error', 'please input your email')
                isValid = false
            } else if(validateEmail(email)===false) {
                this._shadowDom.getElementById('email').setAttribute('error', 'Email is not valid')
            }
            if(pass.trim() === ''){
                this._shadowDom.getElementById('pass').setAttribute('error', 'please input your password')
                isValid = false
            }  else if(pass.trim() !== ''){
                this._shadowDom.getElementById('pass').setAttribute('error', '')
            }
            firebase.auth().signInWithEmailAndPassword(email, pass)
            .then((res) => {
                alert("Logged in successfully");
                console.log(res)
                if(!res.user.emailVerified){
                    alert('please verify email')

                }
                const user ={
                    email: res.user.email,
                    displayName: res.user.displayName,
                    id: res.user.uid,
                }
                window.currentUser=user
                redirect('story')
            })
        .catch((err)=>{
            alert(err.message)
        })
        }
    }
}
window.customElements.define('login-screen', LoginScreen)