const urls = {

    'registerUrl': 'http://localhost:3030/users/register', //POST
    'loginUrl': 'http://localhost:3030/users/login',  //POST
    'logoutUrl': 'http://localhost:3030/users/logout', //GET
    // 'dashboardUrl': 'http://localhost:3030/data/ideas?select=_id%2Ctitle%2Cimg&amp;sortBy=_createdOn%20desc',  //GET
    'dashboardUrl': 'http://localhost:3030/data/ideas',
    'createUrl': 'http://localhost:3030/data/ideas',    //POST
    'ideaDetailsUrl': `http://localhost:3030/data/ideas/`,  //+id !!! GET
    'deleteIdeaUrl': 'http://localhost:3030/data/ideas/',  //+id!!   POST

}

export default urls;