import"./screen/register-screen.js";
import"./component/input-wrapper.js";
import"./screen/login-screen.js";
import"./screen/story-screen.js";
redirect('register')
export function redirect(screenName){
    if(screenName === "login"){
        document.querySelector('#app').innerHTML= `<login-screen></login-screen>`
    } else if(screenName === "register"){
        document.querySelector('#app').innerHTML= `<register-screen></register-screen>`
    } else if(screenName === "story"){
        document.querySelector('#app').innerHTML= `<story-screen></story-screen>`
    }
} 