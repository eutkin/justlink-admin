import React, {Component} from 'react';
import {connect} from "react-redux";
import * as redirectsActions from '../store/redirects/actions';
import * as redirectsSelectors from "../store/redirects/reducer";
import Table from "react-bootstrap/Table";

class RedirectScreen extends Component {

    static #FIELDS_LEVEL_ONE = {
        path: 'Путь',
        type: 'Тип редиректа',
        random: 'Случайный выбор направления',
        blackList: 'Черный список'
    };

    componentDidMount() {
        this.props.dispatch(redirectsActions.fetchRedirects())
    }

    render() {
        if (!this.props.redirects) return this.renderLoading();
        return (
            <Table striped bordered hover responsive>
                <thead>
                <tr id="one-table-header">
                    {Object.keys(RedirectScreen.#FIELDS_LEVEL_ONE).map((key, index) => <td key={index}>{key}</td>)}
                </tr>
                </thead>
                <tbody>
                {Object.keys(this.props.redirects).map(this.renderRowByPath.bind(this))}
                </tbody>
            </Table>
        );
    }

    renderLoading() {
        return (
            <p>Loading...</p>
        );
    }

    renderRowByPath(path) {
        const row = this.props.redirects[path];
        return (
            <tr key={path} onClick={this.click.bind(this)}>
                {Object.keys(RedirectScreen.#FIELDS_LEVEL_ONE).map(key => row[key]).map(this.renderCell.bind(this))}
            </tr>
        )
    }

    click(e) {
        console.log(e)
    }

    renderCell(value, index) {
        let valueElement;
        if (Array.isArray(value)) {
            valueElement =
                <ul>
                    {value.map((elem, index) => <li key={index}>{value}</li>)}
                </ul>
        } else {
            valueElement = value
        }
        return <td style={{height: "auto"}} key={index}>{valueElement}</td>
    }
}

function mapStateToProps(state) {
    return redirectsSelectors.getRedirects(state);
}

export default connect(mapStateToProps)(RedirectScreen)
