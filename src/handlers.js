import getViews from "./views/views.js";
import { clear } from "./tools/clear.js";
import { createRequest, dashboardRequest, logoutRequest, registerLoginRequest, detailsRequest, deleteRequest } from "./routes/requests.js";
import urls from "./routes/url.js";
import { validation } from "./tools/validator.js";
import { navbarView } from "./views/navbar.js";


//register handler
export function registerHandler(e) {

    e.preventDefault();

    let email = document.querySelector('#inputEmail');
    let pass = document.querySelector('#inputPassword');
    let repass = document.querySelector('#inputRepeatPassword');

    if (!validation('register', email.value, pass.value, repass.value)) {

        clear(email, pass, repass)
        return;
    }

    let data = registerLoginRequest(email.value, pass.value, urls.registerUrl);

    data.then(res => {
        console.log(res);
        localStorage.setItem('token', res.accessToken)
        localStorage.setItem('userID', res._id)
        navbarView();
    }).catch()

    getViews();
    clear(email, pass, repass)


}

//login handler
export function loginHandler(e) {
    e.preventDefault();

    let email = document.querySelector('#inputEmail-login');
    let pass = document.querySelector('#inputPassword-login');

    let data = registerLoginRequest(email.value, pass.value, urls.loginUrl);
    data.then(res => {

        localStorage.setItem('token', res.accessToken)
        localStorage.setItem('userID', res._id)
        navbarView();
    })

    getViews();
    clear(email, pass)
}

//logout handler

export function logoutHandler() {
    logoutRequest(urls.logoutUrl, localStorage.getItem('token'))
    navbarView();

}

export function dashboardHandler() {

    let dashboardHolderEl = document.getElementById("dashboard-holder");

    let data = dashboardRequest(urls.dashboardUrl, localStorage.getItem('token'))
    data.then(res => {

        dashboardHolderEl.innerHTML = '';

        //case with no ideas
        if (res.length === 0) {

            let h1 = ce('h1', undefined, 'No ideas yet! Be the first one :)');
            dashboardHolderEl.appendChild(h1);
            return;
        }

        res.forEach(el => {

            let description = el.description;
            let img = el.img;
            let title = el.title;
            let ideaId = el._id;
            let ownerId = el._ownerId;

            dashboardHolderEl.innerHTML += `<div  class="card overflow-hidden current-card details"data-ownerId=${ownerId} data-id=${ideaId} style="width: 20rem; height: 18rem;">
                <div class="card-body">
                    <p class="card-text">${title}</p>
                </div>
                <img class="card-image" src=${img} alt="Card image cap">
                <a class="btn details-btn" href="#">Details</a>
            </div>`

        });

        getDetails()

    })

}

export function getDetails() {

    let detailsElsBtn = Array.from(document.querySelectorAll('.details-btn'))

    detailsElsBtn.map(el => {

        el.addEventListener('click', detailsHandler)

    })

    function detailsHandler(e) {

        let detailsPageEl = document.querySelector('#details-page');

        let description = detailsPageEl.querySelector('.idea-description');
        let title = detailsPageEl.querySelector('.display-5');
        let img = detailsPageEl.querySelector('.det-img');


        let ideaId = e.target.parentNode.getAttribute('data-id')
        let ownerId = e.target.parentNode.getAttribute('data-ownerId')
        // we have to put some functionality 

        let deleteBtn = detailsPageEl.querySelector('#delete-btn')
      
        deleteBtn.addEventListener('click', (e) => {

            console.log(ideaId);
            let data = deleteRequest(`${urls.deleteIdeaUrl}${ideaId}`, localStorage.getItem('token'))
           data.then(res=>{

            console.log(res);
           })
            dashboardHandler();
            getViews('dashboard-holder')



        })

        deleteBtn.style.display = 'none';

        if (ownerId === localStorage.getItem('userID')) {

            deleteBtn.style.display = 'inline-block';
        }

        let data = detailsRequest(`${urls.ideaDetailsUrl}${ideaId}`)

        data.then(res => {

            description.textContent = res.description;
            title.textContent = res.title;
            img.setAttribute('src', res.img)

            getViews('details-page')

        })

    }

}


export function createIdeaHandler() {

    let createForm = document.querySelector('#create-form')
    let formData = new FormData(createForm);

    let title = formData.get('title');
    let description = formData.get('description')
    let imgUrl = formData.get('imageURL');


    createForm.addEventListener('submit', (e) => {
        e.preventDefault();

        if (!validation('create', title, description, imgUrl)) {

            createForm.reset();
            return;
        }

        let data = createRequest(title, description, imgUrl, urls.createUrl, localStorage.getItem('token'));

        data.then(res => {
            console.log(res);

        })
        dashboardHandler();
        getViews('dashboard-holder')
        createForm.reset();
    })


}


