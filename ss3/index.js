class NewTag extends HTMLElement {
    constructor(){
    super()
    this._shadowDom = this.attachShadow({mode: 'open'})
    this.name = this.getAttribute('name')
    this.job = this.getAttribute('job');
    this.age = this.getAttribute('age');
    this.id = this.getAttribute('id');
    this.img = this.getAttribute('img');
    this._shadowDom.innerHTML = `
    <style>
      .container{
        margin-bottom: 10px;
        object-fit: cover;
        width: 280px;
        border: 2px solid black;
        border-radius: 5px;
      }
      .pic img{
        width: 280px;
        height: 200px;
      }
      .name{
        margin-left: 10px;
      }
      .infor{
        margin-left: 10px;
      }

    </style>
    
    <div class="container">
      <div class="pic">
        <img src="${this.img}" alt="picture">
      </div>
      <div class="name">
        <h1>${this.name}</h1>
      </div>
      <div class="infor">
          <p>Age: ${this.age}</p>
          <p>Job: ${this.job}</p>
          <p>identity number: ${this.id}</p>
      </div>
  </div>`
  }
  
}

window.customElements.define('new-tag', NewTag)
