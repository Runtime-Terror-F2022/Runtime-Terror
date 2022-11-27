//importing models
import profileModel from '../models/profile.js';

// import DisplayName Utility method
import { UserDisplayName } from '../utils/index.js';

//rendering pages for profiles pages
export function DisplayProfileList(req, res, next){
    profileModel.find(function(err, profileCollection){
        if(err){
            console.error(err);
            res.end(err);
        }
        res.render('index', {title: 'Profile Information', page: 'profiles/list', profiles: profileCollection, displayName: UserDisplayName(req)});
    })
}

export function DisplayProfileAddPage(req, res, next){
    res.render('index', {title: 'Add User', page: 'profiles/edit', profile: {}, displayName: UserDisplayName(req)});
}

export function ProcessProfileAddPage(req, res, next){
    let newProfile = profileModel({
        profileType: req.body.profileType,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        emailAddress: req.body.emailAddress,
        username: req.body.username,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword
    });

    profileModel.create(newProfile, (err, Profile) => {
        if(err){
            console.error(err);
            res.end(err);
        };
        res.redirect('/profile-list');
    })
}

export function DisplayProfileEditPage(req, res, next){
    let id = req.params.id;

    profileModel.findById(id, (err, profile) => {
        if(err){
            console.error(err);
            res.end(err);
        }
        res.render('index', {title: 'Edit Profile', page: 'profiles/edit', profile: profile, displayName: UserDisplayName(req)});
    })
}

export function ProcessProfileEditPage(req, res, next){
    let id = req.params.id;
    
    let newProfile = profileModel({
        _id: req.body.id,
        profileType: req.body.profileType,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        emailAddress: req.body.emailAddress,
        username: req.body.username,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword
    });

    profileModel.updateOne({_id: id}, newProfile, (err, Profile) => {
        if (err){
            console.error(err);
            res.end(err);
        };
        res.redirect('/profile-list');
    })
}

export function ProcessProfileDelete(req, res, next){
    let id = req.params.id;
    
    profileModel.remove({_id: id}, (err) => {
        if (err){
            console.error(err);
            res.end(err);
        }
        res.redirect('/profile-list');
    })
}