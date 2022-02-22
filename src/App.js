import React from "react";
import Navbar from "./Navbar";
import Routes from "./Routes";
import './App.css';

function App(props) {
    return (
        <div>
            <Navbar dogs={props.dogs}/>
            <div className='container'>
                <Routes dogs={props.dogs}/>
            </div>
        </div>
    );

}

App.defaultProps = {
    dogs: [
        {
            name: 'Whiskey',
            age: 5,
            src:
                'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80',
            facts: ['Whiskey loves eating popcorn.', 'Whiskey is a terrible guard dog.', 'Whiskey wants to cuddle with you!']
        },
        {
            name: 'Hazel',
            age: 3,
            src:
                'https://images.unsplash.com/photo-1549291981-56d443d5e2a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
            facts: ['Hazel has soooo much energy!', 'Hazel is highly intelligent.', 'Hazel loves people more than dogs.']
        },
        {
            name: 'Tubby',
            age: 4,
            src:
                'https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80',
            facts: ['Tubby is not the brightest dog', 'Tubby does not like walks or exercise.', 'Tubby loves eating food.']
        }
    ]
};

export default App;
