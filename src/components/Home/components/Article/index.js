import React from 'react';
import Moment from 'react-moment';
import './article.css';
import {Link} from "react-router-dom";

const Article = ({article}) => {
    return (
         <div className="article">
             <div className="article-action-btns">
                 <Link className="button-style" to={`/article-info/${article.articleName}`}>View more about</Link>
                 <Link className="button-style" to={`/edit/${article.articleName}`}>Edit</Link>
             </div>
            <div className="article-title-wrapper">
                <h1 className="article-title">Title: {article.title}</h1>
            </div>
             <div className="article-text-wrapper">
                 <p className="article-text">Text: {article.text}</p>
             </div>
             <div className="article-version-wrapper">
                 <span className="article-version">Version: {article.version}</span>
             </div>
             <div className="article-date-wrapper">
                 <span className="article-date">Updated at:
                     <Moment format="YYYY/MM/DD">{article.updatedAt}</Moment>
                 </span>
             </div>
        </div>
    );
}

export default Article;
