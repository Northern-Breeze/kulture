export const signUpInputs = (data) => {
    const { email, username, password } = data;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let type = {};
    // Email Validation
    if (typeof email === 'undefined') {
        type.email = {
            message: 'Field cannot be undefined',
        }
    } else if (email === '' ) {
        type.email = {
            message: 'Email cannot be empty',
        }
    } else if (!regexEmail.test(email)) {
        type.email = {
            message: 'Not a valid email address',
        }
    }else {
        type.email = {
            message: '',
        }
    }

    // Username Validation
    if (typeof username === 'undefined') {
        type.username = {
            message : 'Username cannot be undefined'
        }
    } else if (username === '' ) {
        type.username = {
            message: 'Username cannot be empty',
        }
    } else {
        type.username = {
            message: '',
        }
    }
    
    // Password Validation
    if (typeof password === 'undefined') {
        type.password = {
            message :'Password cannot be undefined'
        }
    } else if (password === '' ) {
        type.password = {
            message: 'Password cannot be empty',
        }
    } else {
        type.password = {
            message: '',
        }
    }
    return type;
}

export const SignInInputs = (inputs) => {
    const { email, password } = inputs;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let type = {};

    if(typeof email === 'undefined'){
        type.email = {
            message: 'Email cannot be undefined'
        }
    } else if (email === '') {
        type.email = {
            message: 'Email cannot be empty'
        }
    } else if (!regexEmail.test(email)) {
        type.email = {
            message: 'Please enter a valid email address'
        }
    } else {
        type.email = {
            message: ''
        }
    }

    if(typeof password === 'undefined') {
        type.password = {
            message: 'Password cannot be undefined'
        }
    } else if (password === '') {
        type.password = {
            message: 'Password cannot be empty'
        }
    } else {
        type.password = {
            message: ''
        }
    }

    return type;
}