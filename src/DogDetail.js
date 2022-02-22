import React, {Component} from "react";
import {Link} from "react-router-dom";
import './DogDetail.css';

class DogDetail extends Component {
    render() {
        let {dog} = this.props;
        return (
            <div className='DogDetail-row row justify-content-center mt-5'>
                <div className='DogDetail-col col-11 col-lg-5'>
                    <div className='DogDetail-card card'>
                        <img className='DogDetail-img card-img-top' src={dog.src} alt={dog.name}/>
                        <div className='DogDetail-card-body card-body'>
                            <h2 className='DogDetail-card-title card-title'>{dog.name}</h2>
                            <h4 className='DogDetail-card-subtitle card-subtitle text-muted'>
                                {`${dog.age} year${dog.age === 1 ? '' : 's'} old`}
                            </h4>
                        </div>
                        <ul className='DogDetail-card-list list-group list-group-flush'>
                            {dog.facts.map((fact, idx) => (
                                <li className='DogDetail-card-list-item list-group-item' key={idx} style={{listStyleType: "none"}}>
                                    {fact}
                                </li>
                            ))}
                        </ul>
                        <div className='DogDetail-card-body card-body'>
                            <Link to='/dogs' className='DogDetail-link btn btn-info'>
                                Back
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

export default DogDetail;