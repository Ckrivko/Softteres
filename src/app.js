import getViews from "./views/views.js";
import urls from "./routes/url.js"
import { validation } from "./tools/validator.js"
import { clear } from "./tools/clear.js";
import { registerLoginRequest } from "./routes/requests.js"
import {createIdeaHandler, dashboardHandler, getDetails, loginHandler, logoutHandler, registerHandler} from "./handlers.js"
import { navbarView } from "./views/navbar.js";


//elements
let homePageLampEl = document.getElementById('home-page-lamp');
let navbarEL = document.getElementById('navbarResponsive');
let registerBtnEl = document.getElementById('registerBtn');
let loginBtnEl = document.getElementById('loginBtn');
let logoutEl=document.getElementById('logout');
let dashboardBtnEl=document.getElementById('dashboard');
let createBtnEl=document.getElementById('create-btn');

let signRefs = Array.from(document.querySelectorAll('.sign'))
signRefs.map(el => el.addEventListener('click', setupView))


let viewsController = {

    'home-page': 'home-page',
    'register': 'register-page',
    'login': 'login-page',
    'dashboard': 'dashboard-holder',
    'details': 'details-page',
    'create': 'create-page',

}
//some actions
getViews();
navbarView();
getDetails()

//add eventListeners to elements
navbarEL.addEventListener('click', setupView);
homePageLampEl.addEventListener('click', getHomePage)

//Some function 
function setupView(e) {

    e.preventDefault();
    let dataRoute = e.target.getAttribute('data-route');
    getViews(viewsController[dataRoute])
}

function getHomePage(e) {

    e.preventDefault();
    getViews('home-page')
}

//register button handler
registerBtnEl.addEventListener('click',registerHandler ) 
//loginHandler 
loginBtnEl.addEventListener('click', loginHandler);
//logout
logoutEl.addEventListener('click', logoutHandler)
//dashboard
dashboardBtnEl.addEventListener('click', dashboardHandler)
//create idea
createBtnEl.addEventListener('click', createIdeaHandler)



  