import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import moment from 'moment';
import Complete from '../components/Complete';
import Review from '../components/Review';
import Place from '../components/Place';
import Duck from '../components/Duck';
import Home from '../components/Home';
import Food from '../components/Food';
import Time from '../components/Time';
import { sendError, clearError } from '../actions/commonActions';

class Wrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            place: '',
            numberOfDucks: 0,
            food: '',
            foodType: '',
            foodAmount: '',
            fedTime: moment().format()
        }
    }

    /**
     * update state with the value from the input
     */
    handleForm = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });
    };

    /**
     * update the fedTime value from time select
     * (this time select component from material-ui
     * gets time value directly)
     */
    handleDateChange = time => {
        this.setState({ fedTime: time });
    };

    /**
     * check if the value is not empty
     * push to the next page
     */
    pushToPlace = () => {
        const { fedTime } = this.state;
        if (fedTime !== '') {
            this.props.clearError();
            this.props.history.push('/place');
        } else {
            this.sendEmptyFieldError();
        }
    }

    /**
     * check if the value is not empty
     * push to the next page
     */
    pushToDuck = () => {
        const { place } = this.state;
        if (place !== "") {
            this.props.clearError();
            this.props.history.push('/duck');
        } else {
            this.sendEmptyFieldError();
        }
    }

    /**
     * check if the value is not empty
     * push to the next page
     */
    pushToFood = () => {
        const { numberOfDucks } = this.state;
        if (numberOfDucks !== '' && numberOfDucks > 0) {
            this.props.clearError();
            this.props.history.push('/food');
        } else {
            this.sendEmptyFieldError();
        }
    }

    /**
     * check if the values are not empty
     * push to the next page
     */
    pushToReview = () => {
        const { food, foodType, foodAmount } = this.state;
        if (food !== '' && foodType !== '' && foodAmount !== '') {
            this.props.clearError();
            this.props.history.push('/review');
        } else {
            this.sendEmptyFieldError();
        }
    }

    /**
     * dispatch an action to send an error
     * of an empty field
     */
    sendEmptyFieldError = () => {
        this.props.sendError(true, "Please fill the field");
    }

    /**
     * get the status of the component
     * and return a function for each status
     */
    pushToNext = status => {
        switch (status) {
            case 'time':
                return this.pushToPlace();
            case 'place':
                return this.pushToDuck();
            case 'duck':
                return this.pushToFood();
            case 'food':
                return this.pushToReview();
            default:
                return null;
        }
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route
                        exact
                        path="/"
                        component={Home}
                    />
                    <Route
                        exact
                        path="/time"
                        render={
                            routerProps =>
                                <Time
                                    {...routerProps}
                                    {...this.state}
                                    handleDateChange={this.handleDateChange}
                                    pushToNext={this.pushToNext} 
                                />}
                    />
                    <Route
                        exact
                        path="/place"
                        render={
                            routerProps =>
                                <Place
                                    {...routerProps}
                                    {...this.state}
                                    handleForm={this.handleForm}
                                    pushToNext={this.pushToNext} 
                                />}
                    />
                    <Route
                        exact
                        path="/duck"
                        render={
                            routerProps =>
                                <Duck
                                    {...routerProps}
                                    {...this.state}
                                    handleForm={this.handleForm}
                                    pushToNext={this.pushToNext} 
                                />}
                    />
                    <Route
                        exact
                        path="/food"
                        render={
                            routerProps =>
                                <Food
                                    {...routerProps}
                                    {...this.state}
                                    handleForm={this.handleForm}
                                    pushToNext={this.pushToNext} 
                                />}
                    />
                    <Route
                        exact
                        path="/review"
                        render={
                            routerProps =>
                                <Review
                                    {...routerProps}
                                    {...this.state}
                                />}
                    />
                    <Route
                        exact
                        path="/complete"
                        render={
                            routerProps =>
                                <Complete
                                    {...routerProps}
                                    {...this.state}
                                />}
                    />
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    error: state.common.error
});

const mapDispatchToProps = (dispatch) => ({
    sendError: (status, message) => dispatch(sendError(status, message)),
    clearError: () => dispatch(clearError())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Wrapper));