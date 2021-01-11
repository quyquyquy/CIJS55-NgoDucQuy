
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
            
            </style>
            <div class="container">
                <form id = "login-form">
                    <div class="title">
                        Share Story Login
                    </div>
                    <input-wrapper  id = "email" type="email" placeholder = "Email"></input-wrapper>
                    <input-wrapper id = "pass" type="password" placeholder = "Password"></input-wrapper>
                    <button class = "btn">Login</button>
                    <div id = "redirect">Don't have an account? <a href="http://127.0.0.1:5500/Project/register.html">Register here</a></div>
                </form>
            </div>
                    
        
        `
        
        this._shadowDom.getElementById('login-form').onsubmit = (e) => {
            e.preventDefault();
            const email = this._shadowDom.getElementById('email').value;
            const pass = this._shadowDom.getElementById('pass').value;
            firebase.auth().signInWithEmailAndPassword(email, pass)
            .then(() => {
                alert("Logged in successfully");
            })
        }
    }
}
window.customElements.define('login-screen', LoginScreen)