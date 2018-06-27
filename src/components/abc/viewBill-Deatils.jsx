import React, { Component } from 'react'
import './viewBill-Deatils.css'

class ViewBillDeatails extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 card">
                        <div className="">
                            <p className="text-info"> <label> Produt Deatils :</label>  {this.props.data.product_name} </p>
                            <p className="text-info"> <label>  Customer Name:</label>  {this.props.data.customer_name} </p>
                            <p className="text-info"> <label> Customer Mobile Number :</label>  {this.props.data.mobile_number} </p>
                            <button className="btn btn-success">Previous Bill</button>
                        </div>
                    </div>
                    <div className="col-md-6 card">
                        <p className="text-success"> <label> Produt Status :</label>  {this.props.data.status} </p>
                        <p className="text-info"> <label> Produt Due Bill Date :</label>  {this.props.data.due_bill_date} </p>
                        <button className="btn btn-success">Download Bill</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default ViewBillDeatails