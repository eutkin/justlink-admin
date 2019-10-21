import React, {Component} from 'react';

    constructor(props, context) {
        super(props, context);
        this.data = this.props.data;
    }

    render() {
        return (
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Object.keys(this.props.data).map(this.renderRowByPath.bind(this))}
                    </TableBody>
                </Table>
            </Paper>
        )
    }

    renderRowByPath(path) {
        const row = this.props.data[path];
        return (
            <TableRow key={path}>
                {Object.values(row).map(this.renderCell.bind(this))}
            </TableRow>
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
        return <TableCell key={index}>{valueElement}</TableCell>
    }
}
