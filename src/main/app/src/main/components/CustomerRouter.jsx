import React, {Component} from 'react'
import { 
    Route
} from "react-router-dom";

//import {ROUTES} from '../../utils/constants';
import ViewAllCustomers from './ViewAllCustomers';
class CustomerRouter extends Component {

    render() {
        return (
            <div>
                {/* <Route exact path={ROUTES.CUSTOMER_PROFILE_ROOT} component={ViewAllCustomers}/> */}
                <Route exact path='/customer-profile' component={ViewAllCustomers}/>
                <Route exact path='/customer-profile/customers' component={ViewAllCustomers}/>
                
            </div>    
        )
    }
}

export default CustomerRouter;