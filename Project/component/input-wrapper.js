class InputWrapper extends HTMLElement{
    constructor() {
        super()
        this._shadowDom = this.attachShadow({mode:'open'})
        this.type = this.getAttribute('type')
        this.placeholder = this.getAttribute('placeholder')
        this._shadowDom.innerHTML=`
        <div>
        <input type="${this.type}" placeholder="${this.placeholder}">
        <div class="error"></div>
        </div>
        `
    }
    get value() {
       return this._shadowDom.querySelector('input').value
    }
    set value(value) {
        this._shadowDom.querySelector('input').value = value
    }
}
window.customElements.define('input-wrapper', InputWrapper)