//importing models
import tournamentModel from '../models/tournament.js';

// import DisplayName Utility method
import { UserDisplayName, UserProfileType } from '../utils/index.js';

//rendering pages for tournaments pages
export function DisplayTournamentList(req, res, next){
    tournamentModel.find(function(err, tournamentCollection){
        if(err){
            console.error(err);
            res.end(err);
        }
        res.render('index', {title: 'Tournament List', page: 'tournaments/list', tournaments: tournamentCollection, displayName: UserDisplayName(req), profileType: UserProfileType(req) });
    })
}

export function DisplayTournamentAddPage(req, res, next){
    res.render('index', {title: 'Add Tournament', page: 'tournaments/edit', tournament: {}, displayName: UserDisplayName(req)});
}

export function ProcessTournamentAddPage(req, res, next){
    let newTournament = tournamentModel({
        name: req.body.name,
        description: req.body.description,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        teams: req.body.teams
    });

    tournamentModel.create(newTournament, (err, Tournament) => {
        if(err){
            console.error(err);
            res.end(err);
        };
        res.redirect('/tournament-list');
    })
}

export function DisplayTournamentEditPage(req, res, next){
    let id = req.params.id;

    tournamentModel.findById(id, (err, tournament) => {
        if(err){
            console.error(err);
            res.end(err);
        }
        res.render('index', {title: 'Edit Tournament', page: 'tournaments/edit', tournament: tournament, displayName: UserDisplayName(req)});
    })
}

export function ProcessTournamentEditPage(req, res, next){
    let id = req.params.id;
    
    let newTournament = tournamentModel({
        _id: req.body.id,
        name: req.body.name,
        description: req.body.description,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        teams: req.body.teams
    });

    tournamentModel.updateOne({_id: id}, newTournament, (err, Tournament) => {
        if (err){
            console.error(err);
            res.end(err);
        };
        res.redirect('/tournament-list');
    })
}

export function ProcessTournamentDelete(req, res, next){
    let id = req.params.id;
    
    tournamentModel.remove({_id: id}, (err) => {
        if (err){
            console.error(err);
            res.end(err);
        }
        res.redirect('/tournament-list');
    })
}

export function DisplayBracket(req, res, next){
    let id = req.params.id;

    tournamentModel.findById(id, (err, tournament) => {
        if(err){
            console.error(err);
            res.end(err);
        }
        res.render('index', {title: 'View Bracket', page: 'tournaments/view', tournament: tournament, displayName: UserDisplayName(req)});
    })
}