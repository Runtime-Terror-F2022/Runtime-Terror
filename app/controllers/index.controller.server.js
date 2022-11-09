export function displayHomePage(req, res, next) {
    res.render('index', { title: 'Host Tournaments', page: 'home' });
};


