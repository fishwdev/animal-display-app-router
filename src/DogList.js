import React, {Component} from "react";
import './DogList.css';
import {Link} from "react-router-dom";

class DogList extends Component {
    render() {
        return (
            <div className='DogList'>
                <h1 className='display-1 text-center mt-3 mb-5'>Dog List</h1>
                <div className='row'>
                    {this.props.dogs.map(dog => {
                        let dogName = dog.name;
                        return (
                            <div className='Dog col-lg-4 text-center' key={dogName}>
                                <Link to={`/dogs/${dogName}`}>
                                    <img src={dog.src} alt={dogName}/>
                                    <h3 className='DogList-dog-link mt-3'>{dogName}</h3>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    };
}

export default DogList;