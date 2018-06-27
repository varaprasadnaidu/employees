import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Phone</Link>
        </li>
        <li>
          <Link to="/about">Broad Band</Link>
        </li>
        <li>
          <Link to="/topics">Digital Tv</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Phone} />
      <Route path="/about" component={BroadBand} />
      <Route path="/topics" component={DigitalTv} />
    </div>
  </Router>
);

const Phone = () => (
  <div>
    <h2>Phone</h2>
    <table>
      <tr>
        <th>Phone Id</th>
        <th>Phone Number</th>
        <th>Customer Name</th>
        <th>Phone Bill</th>
        <th>Biling Date</th>
      </tr>
      <tbody>
        <td>1</td>
        <td>9490987334</td>
        <td>Nagaraja</td>
        <td>3000</td>
        <td>26/05/2018</td>
      </tbody>
    </table>
  </div>
);

const BroadBand = () => (
  <div>
    <h2>BroadBand</h2>
    <table>
      <tr>
        <th>Broadband Id</th>
        <th>Broadband Number</th>
        <th>Customer Name</th>
        <th>Broadband Bill</th>
        <th>Biling Date</th>
      </tr>
      <tbody>
        <td>1</td>
        <td>135555</td>
        <td>Naidu</td>
        <td>3000</td>
        <td>26/0/2018</td>
      </tbody>
    </table>
  </div>
);

const DigitalTv = ({ match }) => (
  <div>
    <h2>DigitalTv</h2>
    const data=>axios.get('http://demo3297396.mockable.io/product_details')
    .then((res)=>{
      this.setState({
        productDate:res.data
      })
    })
    .catch(err)
  </div>
);


export default BasicExample;