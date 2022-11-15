//controller for displaying the home page

// import DisplayName Utility method
import { UserDisplayName } from '../utils/index.js';

export function displayHomePage(req, res, next) {
    res.render('index', { title: 'Host Tournaments', page: 'home', displayName: UserDisplayName(req) });
};


