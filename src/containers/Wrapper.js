import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';
import Complete from '../components/Complete';
import Review from '../components/Review';
import Place from '../components/Place';
import Duck from '../components/Duck';
import Home from '../components/Home';
import Food from '../components/Food';
import Time from '../components/Time';
import Result from '../containers/Result';
import { sendError, clearError } from '../actions/commonActions';
import { submitForm } from '../actions/formActions';

class Wrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            place: '',
            numberOfDucks: 0,
            food: '',
            foodType: '',
            foodAmount: '',
            fedTime: moment().format(),
            repeat: false,
            step: 1
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
     * update repeat checkbox on Time component
     */
    handleRepeatChange = e => {
        const checked = e.target.checked;
        this.setState({ repeat: checked });
    }

    /**
     * check if the value is not empty
     * push to the next page
     */
    pushToPlace = () => {
        const { fedTime } = this.state;
        if (fedTime !== '') {
            this.props.clearError();
            this.setState({ step: 2 }, () => this.props.history.push('/place'));
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
            this.setState({ step: 3 }, this.props.history.push('/duck'));
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
            this.setState({ step: 4 }, this.props.history.push('/food'));
        } else {
            this.sendEmptyFieldError();
        }
    }

    /**
     * Reset the step of the survey
     * if the user try to access the page by url
     * to skip the questionnaire
     */
    resetStep = () => {
        this.setState({ step: 1 })
    }

    /**
     * check if the values are not empty
     * push to the next page
     */
    pushToReview = () => {
        const { food, foodType, foodAmount } = this.state;
        if (food !== '' && foodType !== '' && foodAmount !== '') {
            this.props.clearError();
            this.setState({ step: 5 }, this.props.history.push('/review'));
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

    /**
     * submit form with the data in state
     */
    submitForm = () => {
        const { fedTime, place, numberOfDucks, foodType, food, foodAmount, repeat } = this.state;
        const model = { fedTime, place, numberOfDucks, foodType, food, foodAmount, repeat };
        this.props.submitForm(model);
        this.props.history.push('/complete');
    }

    render() {
        const errorMessage = this.props.error.status && this.props.error.message;
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
                                    handleRepeatChange={this.handleRepeatChange}
                                    handleDateChange={this.handleDateChange}
                                    pushToNext={this.pushToNext}
                                    error={errorMessage}
                                    resetStep={this.resetStep}
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
                                    error={errorMessage}
                                    resetStep={this.resetStep}
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
                                    error={errorMessage}
                                    resetStep={this.resetStep}
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
                                    error={errorMessage}
                                    resetStep={this.resetStep}
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
                                    error={errorMessage}
                                    submitForm={this.submitForm}
                                    resetStep={this.resetStep}
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
                    <Route
                        exact
                        path="/result"
                        component={Result}
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
    submitForm: (model) => dispatch(submitForm(model)),
    sendError: (status, message) => dispatch(sendError(status, message)),
    clearError: () => dispatch(clearError())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Wrapper));