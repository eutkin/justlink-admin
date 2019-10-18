import React, {Component} from 'react';
import {connect} from "react-redux";
import * as redirectsActions from '../store/redirects/actions';
import * as redirectsSelectors from "../store/redirects/reducer";
import ListView from "../components/ListView";

class RedirectScreen extends Component {


    componentDidMount() {
        this.props.dispatch(redirectsActions.fetchRedirects())
    }

    render() {
        if (!this.props.redirects) return this.renderLoading();
        return (
            <div className="TopicsScreen">
                <ListView
                    redirects={this.props.redirects}
                    renderRow={this.renderRow} />
            </div>
        );
    }

    renderLoading() {
        return (
            <p>Loading...</p>
        );
    }

    renderRow(row) {
        return (
            <div>
                <h3>{row.path}</h3>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        redirects: redirectsSelectors.getRedirects(state)
    };
}

export default connect(mapStateToProps)(RedirectScreen)
