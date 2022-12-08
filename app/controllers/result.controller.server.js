import { UserDisplayName } from '../utils/index.js';

export function displayResultPage(req, res, next) {
    res.render('index', { title: 'Tournaments Result', page: 'result', user: req.user, displayName: UserDisplayName(req) });
};

export function processResultPage(req, res, next){
    
}