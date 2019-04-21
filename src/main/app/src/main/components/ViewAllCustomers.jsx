import React, {Component} from 'react';

class ViewAllCustomers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            persons: []
        }
    }

    componentDidMount() {
      this.loadAllPerson();
    }


    loadAllPerson = () => {
        
        fetch('/customer-profile/api/persons')
        .then( results => {
                return results.json();
            }).then(data => {
                console.log("data         : ", data);
                console.log("data.length : ", data.length);

                let persons = data.map((person, i) => {
                    return (
                        <tr>
                            <td>{person.id}</td>
                            <td>{person.name}</td>
                            <td>{person.location}</td>
                        </tr>    
                    )
                })
                
                this.setState({persons: persons});
                console.log("this.state.person : ", this.state.persons);
            })
    }
    
      

    render() {

        return (
            <div>
                <div>List of Customers</div>
                <table>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>LOCATION</th>
                    </tr>
                    {this.state.persons}
                </table>    
            </div>
        )
    }

}

export default ViewAllCustomers;