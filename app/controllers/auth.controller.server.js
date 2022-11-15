import passport from 'passport';

// import user model for authentication 

// 2 Display Functions
export function DisplayLoginPage(req, res, next){
    if(!req.user){
        return res.render('index', {title: 'Login', page: 'login', messages: req.flash('loginMessage')});
    }

    return res.redirect('/tournament-list');
}

export function DisplayRegisterPage(req, res, next){
    if(!req.user){
        return res.render('index', {title: 'Register', page: 'register', messages: req.flash('registerMessage')});
    }

    return res.redirect('/tournament-list');
}