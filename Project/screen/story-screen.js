import {redirect} from "./../index.js"
class StoryScreen extends HTMLElement {
    constructor() {
        super();
        this._shadowDom = this.attachShadow({ mode: 'open' });
        this._shadowDom.innerHTML =`
        <style>
            .container{
                text-align: center;
            }
            #story{
                color: violet;
            }
        </style>
        <div class="container">
            <div id="story"><h1>STORY</h1></div>
            <div id="user">Hello  ${currentUser.displayName}</div>
        </div>
        `
    }
}
window.customElements.define('story-screen', StoryScreen)