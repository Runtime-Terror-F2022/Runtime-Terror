//importing models
import tournamentModel from '../models/tournament.js';
import scoreModel from '../models/score.js'

// import DisplayName Utility method
import { UserDisplayName, UserProfileType } from '../utils/index.js';

//rendering pages for tournaments pages
export function DisplayTournamentList(req, res, next) {
    tournamentModel.find(function (err, tournamentCollection) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Tournament List', page: 'tournaments/list', tournaments: tournamentCollection, user: req.user, displayName: UserDisplayName(req), profileType: UserProfileType(req) });
    })
}

export function DisplayTournamentAddPage(req, res, next) {
    res.render('index', { title: 'Add Tournament', page: 'tournaments/edit', tournament: {}, score: {}, user: req.user, displayName: UserDisplayName(req) });
}

export function ProcessTournamentAddPage(req, res, next) {
    let newTournament = tournamentModel({
        name: req.body.name,
        description: req.body.description,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        team1: req.body.team1,
        team2: req.body.team2,
        team3: req.body.team3,
        team4: req.body.team4,
        team5: req.body.team5,
        team6: req.body.team6,
        team7: req.body.team7,
        team8: req.body.team8,
        team9: req.body.team9,
        team10: req.body.team10,
        team11: req.body.team11,
        team12: req.body.team12,
        team13: req.body.team13,
        team14: req.body.team14,
        team15: req.body.team15,
        team16: req.body.team16,

    });

    tournamentModel.create(newTournament, (err, Tournament) => {
        if (err) {
            console.error(err);
            res.end(err);
        };

        let score = scoreModel({
            tournamentID: Tournament._id,
            score1: 0,
            score2: 0,
            score3: 0,
            score4: 0,
            score5: 0,
            score6: 0,
            score7: 0,
            score8: 0,
            score9: 0,
            score10: 0,
            score11: 0,
            score12: 0,
            score13: 0,
            score14: 0,
            score15: 0,
            score16: 0,
            score17: 0,
            score18: 0,
            score19: 0,
            score20: 0,
            score21: 0,
            score22: 0,
            score23: 0,
            score24: 0,
            score25: 0,
            score26: 0,
            score27: 0,
            score28: 0,
            score29: 0,
            score30: 0
        });
        scoreModel.create(score, (err, team) => {
            if (err){
                console.error(err);
                res.end(err)
            }
        })

        res.redirect('/tournament-list');
    })
}

export function DisplayTournamentEditPage(req, res, next) {
    let id = req.params.id;

    tournamentModel.findById(id, (err, tournament) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Edit Tournament', page: 'tournaments/edit', tournament: tournament, user: req.user, displayName: UserDisplayName(req) });
    })
}

export function ProcessTournamentEditPage(req, res, next) {
    let id = req.params.id;

    let newTournament = tournamentModel({
        _id: req.body.id,
        name: req.body.name,
        description: req.body.description,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        team1: req.body.team1,
        team2: req.body.team2,
        team3: req.body.team3,
        team4: req.body.team4,
        team5: req.body.team5,
        team6: req.body.team6,
        team7: req.body.team7,
        team8: req.body.team8,
        team9: req.body.team9,
        team10: req.body.team10,
        team11: req.body.team11,
        team12: req.body.team12,
        team13: req.body.team13,
        team14: req.body.team14,
        team15: req.body.team15,
        team16: req.body.team16,
    });


    tournamentModel.updateOne({ _id: id }, newTournament, (err, Tournament) => {
        if (err) {
            console.error(err);
            res.end(err);
        };
        res.redirect('/tournament-list');
    })
}

export function ProcessTournamentDelete(req, res, next) {
    let id = req.params.id;


    scoreModel.remove({ tournamentID: id }, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
    })

    tournamentModel.remove({ _id: id }, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/tournament-list');
    })
}

export function DisplayBracket(req, res, next) {
    let id = req.params.id;

    tournamentModel.findById(id, (err, tournament) => {
        if (err) {
            console.error(err);
            res.end(err);
        }

        scoreModel.find({ tournamentID: id }, function (err, scoreCollection) {
            if (err) {
                console.error(err);
                res.end(err);
            }
            res.render('index', { title: 'View Bracket', page: 'tournaments/view', tournament: tournament, score: scoreCollection, user: req.user, displayName: UserDisplayName(req) });
        })
    })
}

export function SubmitResults(req, res, next) {
    let id = req.params.id;

    let score = scoreModel.findOneAndUpdate({tournamentID: id}, {
        score1: req.body.score1,
        score2: req.body.score2,
        score3: req.body.score3,
        score4: req.body.score4,
        score5: req.body.score5,
        score6: req.body.score6,
        score7: req.body.score7,
        score8: req.body.score8,
        score9: req.body.score9,
        score10: req.body.score10,
        score11: req.body.score11,
        score12: req.body.score12,
        score13: req.body.score13,
        score14: req.body.score14,
        score15: req.body.score15,
        score16: req.body.score16,
        score17: req.body.scoreQF1,
        score18: req.body.scoreQF2,
        score19: req.body.scoreQF3,
        score20: req.body.scoreQF4,
        score21: req.body.scoreQF5,
        score22: req.body.scoreQF6,
        score23: req.body.scoreQF7,
        score24: req.body.scoreQF8,
        score25: req.body.scoreSF1,
        score26: req.body.scoreSF2,
        score27: req.body.scoreSF3,
        score28: req.body.scoreSF4,
        score29: req.body.scoreFinal1,
        score30: req.body.scoreFinal2,
    });
    scoreModel.updateOne({tournamentID: id}, score, (err, Score) =>{
        if (err){
            console.err(err);
            res.end(err);
        }
    })
    res.redirect('/tournament-view/' + id);
}









