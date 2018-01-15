import React, { Component } from 'react';
import './articleInfo.css';
import axios from "axios/index";
import configConst from "../../configs/config";
import {Link} from "react-router-dom";
import ArticleMessage from "../common/ArticleMesage";

class ArticleInfo extends Component {

    state = {
        message: ''
    };

    componentWillMount() {
        let {match} = this.props;
        this._getArticles(match);
    };

    _getArticles = (match) => {
        let {params} = match;
        axios
            .get(`${configConst.API_URL}articles/${params.name}`)
            .then((response) => {
                let versions = response.data.map(({version}) => version)
                this.setState({
                    data: response.data[0],
                   versions
                });

            })
            .catch((error) => console.log(error));
    };

    _selectVersion = (event) => {
        let {match} = this.props;
        let version = event.target.value;
        axios
            .get(`${configConst.API_URL}articles/${match.params.name}/${version}`)
            .then((response) => {
                this.setState({
                    data: response.data
                })
            })
            .catch((error) => console.log(error));
    };

    _changeStatus = () => {
        axios
            .put(`${configConst.API_URL}articles/${this.state.data.articleName}/${this.state.data.version}/${this.state.data.active ? 'unpublish' : 'publish'}`)
            .then((response) => {
                this.setState({
                    message: response.data.message
                })
            })
            .catch((error) => console.log(error));
    }

    render() {
        return (
            <div>
                {this.state && this.state.data ?
                    <div className={this.state.message ? 'article-wrapper-hidden' : 'article-wrapper'}>
                        <h1>Title: {this.state.data.title}</h1>
                        <p>Text: {this.state.data.text}</p>
                        <select onChange={this._selectVersion}>
                            <option defaultValue="selected">Select Your Version</option>
                            {
                                this.state.versions.map((version) => <option key={version} value={version}>{version}</option>)
                            }
                        </select>
                        <button onClick={this._changeStatus}>{this.state.data.active ? 'Unpublish' : 'Publish'}</button>
                        <Link className="button-style" to={'/'}>Back</Link>
                    </div> : ''
                }
                <ArticleMessage message={this.state.message} />
            </div>
        );
    }
}

export default ArticleInfo;
