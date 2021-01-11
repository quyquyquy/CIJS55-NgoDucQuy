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
.inp{
    margin-bottom: 10px;
}
</style>
`

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
            <button class="bnt">Register</button>
            <div class="redirect">Already have account ? <a href="http://127.0.0.1:5500/Project/index.html">Login</a></div>
        </form>
        </div>
        ` 
        this._shadowRoot.getElementById('form')
        .addEventListener('submit', (e) => {
            e.preventDefault()
            // const name = this._shadowRoot.getElementById('name').value
            const email = this._shadowRoot.getElementById('email').value
            const pass = this._shadowRoot.getElementById('pass').value
            firebase.auth().createUserWithEmailAndPassword(email, pass)
        })
        
    }
}
window.customElements.define('register-screen', RegisterScreen)