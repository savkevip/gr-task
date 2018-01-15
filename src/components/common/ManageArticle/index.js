import React, { Component } from 'react';
import './manageArticle.css';
import axios from "axios/index";
import configConst from "../../../configs/config";
import Form from "./components/Form";
import ArticleMessage from "../ArticleMesage";

class ManageArticle extends Component {

    state = {
        title: '',
        text: '',
        active: false,
        message: ''
    }

    componentDidMount() {
        let name = this.props.match.params.name;
        if(name) {
            axios
                .get(`${configConst.API_URL}articles/${name}`)
                .then((response) => {
                    let activeArticle = response.data.filter((specific) => {
                        return specific.active;
                    });
                    this.setState({
                        title: activeArticle[0].title,
                        text: activeArticle[0].text,
                        active: activeArticle[0].active
                    });

                })
                .catch((error) => console.log(error));
        }
    }

    createNewArticle = () => {
        let url = this.props.match.params.name ? 'articles/' + this.props.match.params.name : 'articles';
        axios
            .post(`${configConst.API_URL}${url}`, {
              title: this.state.title,
              text: this.state.text,
              active: this.state.active
            })
            .then((response) => {
                this.setState({
                    message: response.data.message
                })
            })
            .catch((error) => console.log(error));
    }

    getValue = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }



    render() {
        return (
            <div>
                <Form message={this.state.message} title={this.state.title} text={this.state.text} active={this.state.active} onChange={this.getValue} onClick={this.createNewArticle} />
                <ArticleMessage message={this.state.message } />
            </div>
        );
    }
}

export default ManageArticle;
