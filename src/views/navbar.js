export function navbarView() {

    let dashboardNavEl = document.getElementById('dashboard');
    let createNavEl = document.getElementById('create');
    let logoutNavEl = document.getElementById('logout');
    let loginNavEl = document.getElementById('login');
    let registerNavEl = document.getElementById('register');


    let token = localStorage.getItem('token')
    
   
    if (token === null) {

        dashboardNavEl.style.display = 'block';
        loginNavEl.style.display = 'block';
        registerNavEl.style.display = 'block'

        logoutNavEl.style.display = 'none';
        createNavEl.style.display = 'none';
    }
    else {
        dashboardNavEl.style.display = 'block';
        createNavEl.style.display = 'block';
        logoutNavEl.style.display = 'block';

        loginNavEl.style.display = 'none';
        registerNavEl.style.display = 'none';
    }

}