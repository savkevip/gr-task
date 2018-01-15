import React from 'react';
import './articleMessage.css';
import {Link} from "react-router-dom";

const ArticleMessage = ({message}) => {
    return (
        <div className={ message ? 'article-message-wrapper' : 'article-message-hidden'}>
            <h1 className='article-message'>{message}</h1>
            <Link className="button-style" to={'/'}>Back to home</Link>
        </div>
    );
}

export default ArticleMessage;
