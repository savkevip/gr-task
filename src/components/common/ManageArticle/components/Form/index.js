import React from 'react';
import './form.css';
import {Link} from "react-router-dom";

const Form = ({title, text, active, message, onChange, onClick}) => {
    return (
        <form className={message ? 'create create-hidden' : 'create'}>
            <label>Title:
                <input name="title" value={title} onChange={onChange} type="text"/>
            </label>
            <label>Text:
                <textarea value={text} onChange={onChange} name="text" cols="30" rows="10"></textarea>
            </label>
            <label>Publish:
                <input name="active" checked={active} onChange={onChange} type="checkbox"/>
            </label>
            <div className='article-action-btns'>
                <Link className="button-style" to={'/create'} onClick={onClick}>Save</Link>
                <Link className="button-style" to={'/'}>Cancel</Link>
            </div>
        </form>
    );
}

export default Form;
