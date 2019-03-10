import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import moment from 'moment';
import Complete from '../components/Complete';
import Review from '../components/Review';
import Place from '../components/Place';
import Duck from '../components/Duck';
import Home from '../components/Home';
import Food from '../components/Food';
import Time from '../components/Time';

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

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/time" render={routerProps => <Time {...routerProps} {...this.state} />} />
                    <Route exact path="/place" render={routerProps => <Place {...routerProps} {...this.state} />} />
                    <Route exact path="/duck" render={routerProps => <Duck {...routerProps} {...this.state} />} />
                    <Route exact path="/food" render={routerProps => <Food {...routerProps} {...this.state} />} />
                    <Route exact path="/review" render={routerProps => <Review {...routerProps} {...this.state} />} />
                    <Route exact path="/complete" render={routerProps => <Complete {...routerProps} {...this.state} />} />
                </Switch>
            </div>
        );
    }
}

export default withRouter(Wrapper);