import React, { Component } from 'react';
import './home.css';
import axios from 'axios';
import configConst from "../../configs/config";
import Article from './components/Article';
import Pagination from '../common/Pagination';
import {Link} from "react-router-dom";

class Home extends Component {

    componentWillMount() {
        this._getAllArticles();
    };

    _getAllArticles = () => {
        axios
            .get(`${configConst.API_URL}articles`)
            .then((response) => {
                this.setState({ data: response.data });
                this.getPaginatedArticles();

            })
            .catch((error) => console.log(error));
    };

    getPaginatedArticles = (pageNumber = 0) => {
        const pageSize = configConst.ARTICLES_PER_PAGE;
        this.setState((prevState) => {
            return {
                listOfArticles: prevState.data.slice(pageNumber * pageSize, (pageNumber + 1) * pageSize)
            }
        });
    };

    render() {
        const listOfArticles = this.state ? this.state.listOfArticles : null;
        return (
            <div>
                <Link className="button-style create-article-btn" to="/create">Create new article</Link>
                <div className="home">
                    {listOfArticles ? listOfArticles.map((article) => {
                        return <Article key={article.ID} article={article} />
                    }) : null}
                </div>
                <Pagination total={this.state ? this.state.data.length : 0} perPage={configConst.ARTICLES_PER_PAGE} setActivePage={this.getPaginatedArticles} />
            </div>
        );
    }
}

export default Home;
