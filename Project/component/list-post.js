const style = `
  .list-posts {
    width: 60%;
    margin: auto;
    margin-top: 10px;
  }
`
import { getDataFromDocs, getDataFromDoc } from "../checkValidEmail.js";
class ListPost extends HTMLElement {
  constructor() {
    super();
    this._shadowDom = this.attachShadow({mode: 'open'})
    this.renderHtml()
  }
  async renderHtml() {
    const res = await firebase.firestore().collection('posts').get()
    const listPost = getDataFromDocs(res)
    // listPost[0].user.get()
    let html = ''
    listPost.forEach(element => {
      html += `
        <post-item
          time="${element.createdAt}"
          author="${element.authorName}"
          content="${element.content}">
        </post-item>
      `
    })
    this._shadowDom.innerHTML = `
      <style>
        ${style}
      </style>
      <div class="list-posts">
        ${html}
      </div>
    `
  }
}
window.customElements.define('list-post', ListPost)