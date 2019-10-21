import React, {Component} from 'react';
import {connect} from "react-redux";
import * as redirectsActions from '../store/redirects/actions';
import * as redirectsSelectors from "../store/redirects/reducer";
import TableView from "../components/TableView";

class RedirectScreen extends Component {


    componentDidMount() {
        this.props.dispatch(redirectsActions.fetchRedirects())
    }

    render() {
        if (!this.props.redirects) return this.renderLoading();
        return (
            <div className="TopicsScreen">
                <TableView
                    data={this.props.redirects}
                />
            </div>
        );
    }

    renderLoading() {
        return (
            <p>Loading...</p>
        );
    }
}

function mapStateToProps(state) {
    return redirectsSelectors.getRedirects(state);
}

export default connect(mapStateToProps)(RedirectScreen)
