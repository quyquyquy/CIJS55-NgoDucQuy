import {redirect} from "./../index.js"
class StoryScreen extends HTMLElement {
    constructor() {
        super();
        this._shadowDom = this.attachShadow({ mode: 'open' });
        this._shadowDom.innerHTML =`
        <story-header></story-header>
        <create-post></create-post>
        <list-post></list-post>
        <list-item></list-item>
        `
    }
}
window.customElements.define('story-screen', StoryScreen)