import bodyParser from 'body-parser';

//importing models
import forumModel from '../models/forum.js';
import commentModel from '../models/forum-comments.js';


// import DisplayName Utility method
import { UserDisplayName, UserProfileType } from '../utils/index.js';
import forum from '../models/forum.js';

//rendering pages for tournaments pages
export function DisplayForumList(req, res, next){
    forumModel.find(function(err, forumCollection){
        if(err){
            console.error(err);
            res.end(err);
        }
        res.render('index', {title: 'Forums', page: 'forums/list', forums: forumCollection, user: req.user, displayName: UserDisplayName(req), profileType: UserProfileType(req) });
    })
}

export function DisplayForumAddPage(req, res, next){
    res.render('index', {title: 'Add a Comment', page: 'forums/edit', forum: {}, comments: {}, user: req.user, displayName: UserDisplayName(req)});
}

export function ProcessForumAddPage(req, res, next){
    let newForum = forumModel({
        name: req.body.name,
        topic: req.body.topic,
        description: req.body.description,
    });

    forumModel.create(newForum, (err, Forum) => {
        if(err){
            console.error(err);
            res.end(err);
        };
        res.redirect('/forum-list');
    })

    // let comment = commentModel({
    //     forumID: forumModel._id,
    //     username: req.body.username,
    //     comment: req.body.comment,
    // });

    // commentModel.create(comment, (err, comment) => {
    //     if(err){
    //         console.error(err);
    //         res.end(err);
    //     };
    //     res.redirect('/forum-list');
    // })


}

export function DisplayForumEditPage(req, res, next){
    let id = req.params.id;

    forumModel.findById(id, (err, forum) => {
        if(err){
            console.error(err);
            res.end(err);
        }
        res.render('index', {title: 'Edit Forum', page: 'forums/edit', forum: forum,  user: req.user, displayName: UserDisplayName(req), profileType: UserProfileType(req)});
    })
}

export function ProcessForumEditPage(req, res, next){
    let id = req.params.id;
    
    let newForum = forumModel({
        _id: req.body.id,
        name: req.body.name,
        topic: req.body.topic,
        description: req.body.description

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
        commentModel.remove({forumID: id}, (err) => {
            if (err){
                console.error(err);
                res.end(err);
            }
        });
        res.redirect('/forum-list');
    })
}

export function DisplayCommentsPage(req, res, next){
    let id = req.params.id;

    commentModel.find({forumID: id}, function(err, commentCollection){
        if(err){
            console.error(err);
            res.end(err);
        }
        res.render('index', {title: '', page: 'forums/forum-comments', comments: commentCollection, user: req.user, displayName: UserDisplayName(req), profileType: UserProfileType(req)});
    })

}

export function ProcessComments(req, res, next){
    let id = req.params.id;

    let comment = commentModel({
        forumID: id,
        username: req.body.username,
        comment: req.body.comment
    });

    commentModel.create(comment, (err, Comment) => {
        if(err){
            console.error(err);
            res.end(err);
        };
        res.redirect('/forum-comments/'+id);
    })
}

export function ProcessCommentDelete(req, res, next){
    let id = req.params.id;
    
    commentModel.remove({forumID: id}, (err) => {
        if (err){
            console.error(err);
            res.end(err);
        }
        res.redirect('/forum-comments/:id');
    })
}
