import React,{Component} from 'react';
import axios from 'axios';

const HouseList = props =>(
    <tr>
        <td>{props.houseprice.price}</td>
        <td>{props.houseprice.description}</td>
        <td>{props.houseprice.address}</td>
        <td>{props.houseprice.bhk}</td>
    </tr>
)
export default class HousePriceList extends Component {
    constructor(props) {
      super(props);

  
      this.state = {houseprice: []};
    }

    componentDidMount(){
        axios.get('http://localhost:5001/newpost/')
            .then(response=>{
            this.setState({ houseprice : response.data });
        })
        .catch(error =>{
            console.log('Error:'+error)
        });
    }

    houseList(){
        return this.state.houseprice.map(currenthouse =>{
            return <HouseList houseprice={currenthouse} key={currenthouse._id}/>;
        });
    }
render(){
    return(
        <div>
        <h3>Logged Exercises</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            { this.houseList() }
          </tbody>
        </table>
      </div>
    )
}
}