import { UserDisplayName } from "../utils/index.js";

export function displayHomePage(req, res, next) {
    res.render('index', { title: 'Host Tournaments', page: 'home', displayName: UserDisplayName(req) } );
};

export function displayAboutPage(req, res, next) {
    res.render('index', { title: 'Link 1', page: 'about', displayName: UserDisplayName(req)} );
};

export function displayProjectsPage(req, res, next) {
    res.render('index', { title: 'Link 2', page: 'projects', displayName: UserDisplayName(req)} );
};

export function displayServicesPage(req, res, next) {
    res.render('index', { title: 'Link 3', page: 'services', displayName: UserDisplayName(req)} );
};

export function displayContactPage(req, res, next) {
    res.render('index', { title: 'Link 4', page: 'contact', displayName: UserDisplayName(req)} );
};


