import React, {Component} from 'react';
import Table from "react-bootstrap/Table";

class TableView extends Component {

    constructor(props, context) {
        super(props, context);
        this.data = this.props.data;
    }

    render() {
        return (
            <Table striped bordered hover responsive>
                <thead>
                <tr>
                    {Object.keys(this.props.data['stoloto']).map((key, index) => <td key={index}>{key}</td>)}
                </tr>
                </thead>
                <tbody>
                {Object.keys(this.props.data).map(this.renderRowByPath.bind(this))}
                </tbody>
            </Table>
        )
    }

    renderRowByPath(path) {
        const row = this.props.data[path];
        return (
            <tr key={path}>
                {Object.values(row).map(this.renderCell.bind(this))}
            </tr>
        )
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

export default TableView
