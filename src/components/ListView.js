import React, {Component} from 'react';

export default class ListView extends Component {
    render() {
        return (
            <ul>
                {Object.keys(this.props.redirects).map(this.renderRowByPath.bind(this))}
            </ul>
        )
    }

    renderRowByPath(path) {
        return (
            <li key={path}>
                {this.props.renderRow(this.props.redirects[path])}
            </li>
        )
    }
}
