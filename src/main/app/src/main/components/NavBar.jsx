import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Customer Profile</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            {/* <a class="nav-link" href="#" onClick={this.navigateToListOfCustomers}>Home <span class="sr-only">(current)</span></a> */}
                            <Link to="/customer-profile/customers">List Customers</Link>
                        </li>
                    </ul>
                    {this.props.value}
                </div>        
            </nav>            
        </div>)
    }

}

export default NavBar;