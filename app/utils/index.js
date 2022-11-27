import { Secret } from '../../config/config.js';

//exporting userdisplayname function

export function UserDisplayName(req){
    if(req.user){
        return req.user.displayName;
    }
    return '';
}

export function UserProfileType(req){
    if(req.user){
        return req.user.profileType;
    }
    return '';
}
//exporting authguard function
export function AuthGuard(req, res, next){
    if(!req.isAuthenticated()){
        return res.redirect('/login')
    }
    next();
}
