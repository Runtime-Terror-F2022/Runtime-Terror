import jwt from 'jsonwebtoken';
import { Secret } from '../../config/config.js';

//exporting userdisplayname function

export function UserDisplayName(req){
    if(req.user){
        console.log(req.user);
        return req.user.displayName;
    }
    return '';
}

export function UserID(req){
    if(req.user){
        return req.user._id;
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

export function GenerateToken(user){
    const payload = {
        id: user._id,
        displayName: user.displayName,
        username: user.username,
        emailAddress: user.EmailAddress
    }

    const jwtOptions = {
        expiresIn: 604800 // 1 week
    }

    return jwt.sign(payload, Secret, jwtOptions);

}



