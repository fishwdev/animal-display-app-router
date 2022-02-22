import React, {Component} from "react";
import {Link, NavLink} from "react-router-dom";
import './Navbar.css';

class Navbar extends Component {
    render() {
        const dogLinks = this.props.dogs.map(dog => (
            <li className='Navbar-nav-item nav-item' key={dog.name}>
                <NavLink
                    exact
                    to={`/dogs/${dog.name}`}
                    className='Navbar-nav-item-link nav-link'
                >
                    {dog.name}
                </NavLink>
            </li>

        ));

        return (
            <nav className='Navbar navbar navbar-expand-lg navbar-dark bg-dark'>
                <Link to='/dogs' className='Navbar-brand navbar-brand'>
                    Animal List
                </Link>
                <button className='Navbar-toggler navbar-toggler'
                        type='button'
                        data-bs-toggle="collapse"
                        data-bs-target='#navbarNav'
                        aria-controls='navbarNav'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                >
                    <span className='Navbar-toggler-icon navbar-toggler-icon'></span>
                </button>

                <div className='Navbar-collapse collapse navbar-collapse' id='navbarNav'>
                    <ul className='Navbar-nav navbar-nav'>
                        <li className='Navbar-nav-item nav-item'>
                            <NavLink exact to='/dogs' className='Navbar-nav-item-link nav-link'>Home</NavLink>
                        </li>
                        {dogLinks}
                    </ul>
                </div>
            </nav>
        )
    };
}

export default Navbar;