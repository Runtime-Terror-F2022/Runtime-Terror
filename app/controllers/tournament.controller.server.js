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
