//importing models
import forumModel from '../models/forum.js';

// import DisplayName Utility method
import { UserDisplayName, UserProfileType } from '../utils/index.js';

//rendering pages for tournaments pages
export function DisplayForumList(req, res, next){
    forumModel.find(function(err, forumCollection){
        if(err){
            console.error(err);
            res.end(err);
        }
        res.render('index', {title: 'Forums', page: 'forums/list', forums: forumCollection, displayName: UserDisplayName(req) });
    })
}

export function DisplayForumAddPage(req, res, next){
    res.render('index', {title: 'Add a Comment', page: 'forums/edit', forum: {}, displayName: UserDisplayName(req)});
}

export function ProcessForumAddPage(req, res, next){
    let newForum = forumModel({
        name: req.body.name,
        topic: req.body.topic,
        comment: req.body.comment
    });

    forumModel.create(newForum, (err, Forum) => {
        if(err){
            console.error(err);
            res.end(err);
        };
        res.redirect('/forum-list');
    })
}

export function DisplayForumEditPage(req, res, next){
    let id = req.params.id;

    forumModel.findById(id, (err, forum) => {
        if(err){
            console.error(err);
            res.end(err);
        }
        res.render('index', {title: 'Edit Forum', page: 'forums/edit', forum: forum, displayName: UserDisplayName(req)});
    })
}

export function ProcessForumEditPage(req, res, next){
    let id = req.params.id;
    
    let newForum = forumModel({
        _id: req.body.id,
        name: req.body.name,
        topic: req.body.topic,
        comment: req.body.comment

    });

    forumModel.updateOne({_id: id}, newForum, (err, Forum) => {
        if (err){
            console.error(err);
            res.end(err);
        };
        res.redirect('/forum-list');
    })
}

export function ProcessForumDelete(req, res, next){
    let id = req.params.id;
    
    forumModel.remove({_id: id}, (err) => {
        if (err){
            console.error(err);
            res.end(err);
        }
        res.redirect('/forum-list');
    })
}

