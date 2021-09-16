import React from "react";

export default ({ comments }) => {
    const renderedComments = comments.map(Comment => {
        let content;
        if(Comment.status === 'approved'){
            content = Comment.content;
        }
        if(Comment.status === 'pending'){
            content = 'This comment is awaiting moderation'
        }
        if(Comment.status === 'rejected'){
            content = 'This comment has been rejected'
        }
        return <li key={Comment.id}>{content}</li>
    });
    return <ul>
        {renderedComments}
    </ul>
};