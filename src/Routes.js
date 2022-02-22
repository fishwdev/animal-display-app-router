import React, {Component} from "react";
import DogList from "./DogList";
import DogDetail from "./DogDetail";
import {Redirect, Route, Switch} from "react-router-dom";

class Routes extends Component {
    render(){
        const getDog = (routeProps) => {
            let name = routeProps.match.params.name;
            let dogResult = this.props.dogs.find(
                (dog) => dog.name.toLowerCase() === name.toLowerCase()
            );
            return <DogDetail {...routeProps} dog={dogResult}/>;
        }

        return(
            <Switch>
                <Route exact path='/dogs' render={() => <DogList dogs={this.props.dogs}/>}/>
                <Route exact path='/dogs/:name' render={getDog}/>
                <Redirect to='/dogs' />
            </Switch>
        )
    }
}

export default Routes;