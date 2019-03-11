import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { getForms } from '../actions/formActions';

const tableHead = [
    { id: 1, title: 'Survey submitted date' },
    { id: 2, title: 'Fed time' },
    { id: 3, title: 'Fed place' },
    { id: 4, title: '# of ducks fed' },
    { id: 5, title: 'Food' },
    { id: 6, title: '' }
];

class Result extends Component {
    constructor(props) {
        super(props);
        this.props.getForms();
    }

    restartSurvey = () => {
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="survey-wrapper">
                <button
                    type="button"
                    className="restart-survey-btn"
                    onClick={this.restartSurvey}
                >Restart Survey</button>
                <p className="subtitle">Result</p>
                <Table>
                    <TableHead className="result-th">
                        <TableRow>
                            {
                                tableHead.map((th => <TableCell
                                    key={th.id}
                                    colSpan="3"
                                    rowSpan={th.id === 5 ? "" : 2}
                                >{th.title}
                                </TableCell>))
                            }
                        </TableRow>
                        <TableRow>
                            <TableCell>Type</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Amount</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.forms.map(form => (
                            <TableRow key={form._id}>
                                <TableCell
                                    align="center"
                                    colSpan="3"
                                >
                                    {form.createdAt.split('.')[0]}
                                </TableCell>
                                <TableCell
                                    align="center"
                                    colSpan="3"
                                >
                                    {form.fedTime}
                                </TableCell>
                                <TableCell
                                    align="center"
                                    colSpan="3"
                                >
                                    {form.place}
                                </TableCell>
                                <TableCell
                                    align="center"
                                    colSpan="3"
                                >
                                    {form.numberOfDucks}
                                </TableCell>
                                <TableCell
                                    align="center"
                                >
                                    {form.foodType}
                                </TableCell>
                                <TableCell
                                    align="center"
                                >
                                    {form.food}
                                </TableCell>
                                <TableCell
                                    align="center"
                                >
                                    {form.foodAmount}
                                </TableCell>
                                <TableCell
                                    align="center"
                                >
                                    {form.repeat && <span className="repeat-mark">Repeated</span>}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    forms: state.data.forms
})

const mapDispatchToProps = (dispatch) => ({
    getForms: () => dispatch(getForms())
})

export default connect(mapStateToProps, mapDispatchToProps)(Result);