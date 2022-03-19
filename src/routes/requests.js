import { navbarView } from "../views/navbar.js";

export async function registerLoginRequest(email, password, url) {

    try {
        let res = await fetch(url, {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password
            })

        })

        if (res.status === 409) {

            throw new Error('We have this user!')
        }
        else if (res.status === 403) {
           
            throw new Error('Wrong name or password')
        }


        let data = await res.json();
        return data;

    } catch (error) {
        alert(error.message);
    }
}

export async function logoutRequest(url, token) {
    try {

        let res = await fetch(url, {
            method: 'GET',
            headers: {

                'Content- Type': 'application/json',
                'X-Authorization': `${token}`
            }
        })

    } catch (error) {

    }
    localStorage.clear();
    navbarView();

}

export async function dashboardRequest(url, token) {
    try {
        let res = await fetch(url)
        let data = await res.json()
        return data;

    } catch (error) {
        alert('Some problem')
    }
}

export async function createRequest(title, description, img, url, token) {

    try {

        let res = await fetch(url, {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': `${token}`
            },
            body: JSON.stringify({
                title,
                description,
                img
            })

        })

        let data = await res.json();
        return data;

    } catch (error) {
        alert('Error!')
    }

}

export async function detailsRequest(url, token) {
    try {

        let res = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // 'X-Authorization': `${token}`
            }

        })

        let data = await res.json();
        return data;

    } catch (error) {
        alert(error)
    }

}

export async function deleteRequest(url, token){


    try {

        let res = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                 'X-Authorization': `${token}`
            }

        })

        let data = await res.json();
        return data;

    } catch (error) {
        alert(error)
    }

}

