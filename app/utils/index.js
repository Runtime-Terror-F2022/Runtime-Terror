import { Secret } from '../../config/config.js';

//exporting userdisplayname function

export function UserDisplayName(req){
    if(req.user){
        return req.user.displayName;
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
