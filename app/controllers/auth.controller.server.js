import express from 'express';

import passport from 'passport';

// import user model for authentication 
import User from '../models/user.js';

// import DisplayName Utility method
import { UserDisplayName, UserID } from '../utils/index.js';


// 2 Display Functions
export function DisplayLoginPage(req, res, next){
    if(!req.user){
        return res.render('index', {title: 'Login', page: 'login', messages: req.flash('loginMessage'), displayName: UserDisplayName(req)});
    }

    return res.redirect('/tournament-list');
}

export function DisplayRegisterPage(req, res, next){
    if(!req.user){
        return res.render('index', {title: 'Register', page: 'register', messages: req.flash('registerMessage'), user: {}, displayName: UserDisplayName(req)});
    }

    return res.redirect('/tournament-list');
}

// Processing Functions
export function ProcessLoginPage(req, res, next){
    passport.authenticate('local', function(err, user, info) {
        if(err){
            console.error(err);
            res.end(err);
        }

        if(!user){
            req.flash('loginMessage', 'Authentication Error');
            return res.redirect('/login');
        }

        req.logIn(user, function(err){
            if(err){
                console.error(err);
                res.end(err);
            }

            return res.redirect('/');
        })
    })(req, res, next);
};

export function ProcessRegisterPage(req, res, next){
    let newUser = new User({
        profileType: req.body.profileType,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        emailAddress: req.body.emailAddress,
        username: req.body.username,
        displayName: req.body.firstName + " " + req.body.lastName
    }); 

    User.register(newUser, req.body.password, function(err){
        if(err){
            if(err.name == "UserExistsError"){
                console.error('ERROR: User Already Exists!');
                req.flash('registerMessage', ' Registration Error')
            } else {
                console.error(err.name);
                req.flash('registerMessage', 'Server Error')
            }

            return res.redirect('/register');
        }

        return passport.authenticate('local')(req, res, function(){
            return res.redirect('/');
        });
    });

};


export function DisplayProfileEditPage(req, res, next){
    res.render('index', { title: 'Profile', page: 'profiles/edit', user: req.user, messages: req.flash('confirmationMessage'), userID: UserID(req), displayName: UserDisplayName(req)} );
   
};

export function ProcessProfileEditPage(req, res, next){
    let id = req.params.id;

    let newUser = ({
        //_id: req.body.id,
        profileType: req.body.profileType,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        emailAddress: req.body.emailAddress,
        username: req.body.username,
        displayName: req.body.firstName + " " + req.body.lastName
    });

        return User.updateOne({_id: id}, newUser, (err, User) => {
            if (err){
                console.error(err);
                res.end(err);
            }; 
            
            req.flash('confirmationMessage', 'Saved!');
            res.redirect('back');
        });         

    
};

export function ProcessLogoutPage(req, res, next){
    req.logOut(function(err){
        if(err){
            console.error(err);
            res.end(err);

        }

        console.log("User logged out successfully");

    });

    res.redirect('/login');
}