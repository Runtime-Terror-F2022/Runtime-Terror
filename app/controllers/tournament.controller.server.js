import tournamentModel from '../models/tournament.js';

export function DisplayTournamentList(req, res, next){
    tournamentModel.find(function(err, tournamentCollection){
        if(err){
            console.error(err);
            res.end(err);
        }
        res.render('index', {title: 'Tournament List', page: 'tournaments/list', tournaments: tournamentCollection});
    })
}

export function DisplayTournamentAddPage(req, res, next){
    res.render('index', {title: 'Add Tournament', page: 'tournaments/edit', tournament: {}});
}

export function ProcessTournamentAddPage(req, res, next){
    let newTournament = tournamentModel({
        name: req.body.name,
        game: req.body.game,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        size: req.body.size
    });

    tournamentModel.create(newTournament, (err, Tournament) => {
        if(err){
            console.error(err);
            res.end(err);
        };
        res.redirect('/tournament-list');
    })
}
