export function validation(...params) {
    let type = params[0];

    if (type === 'register') {
        let email = params[1];
        let pass = params[2];
        let repass = params[3]

        let regexEmail = /\S+@\S+\.\S+/
        let hasNumber = /\d/;

        //cheking email
        if (!regexEmail.test(email) || email.length < 3 || !hasNumber.test(email)) {

            return false;
        }
        //cheking pass and repass
        if (pass !== repass || pass.length < 3) {
            return false

        }

        return true;
    }

    else if (type === 'create') {

        let title = params[1];
        let description = params[2];
        let image = params[3];


        //6, 10, 5
        if (title.length < 6 || description.length < 10 || image.length < 5) {

            return false;
        }

        return true;
    }


}