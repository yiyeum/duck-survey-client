import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Complete from '../components/Complete';
import Review from '../components/Review';
import Result from '../containers/Result';
import Place from '../components/Place';
import Duck from '../components/Duck';
import Home from '../components/Home';
import Food from '../components/Food';
import Time from '../components/Time';

class Wrapper extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/time" component={Time} />
                    <Route exact path="/place" component={Place} />
                    <Route exact path="/duck" component={Duck} />
                    <Route exact path="/food" component={Food} />
                    <Route exact path="/review" component={Review} />
                    <Route exact path="/complete" component={Complete} />
                    <Route exact path="/result" component={Result} />
                </Switch>
            </div>
        );
    }
}

export default Wrapper;