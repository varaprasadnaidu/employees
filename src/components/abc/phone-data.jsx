import React, { Component } from 'react'
import { Panel } from 'primereact/components/panel/Panel';
import 'primereact/resources/themes/omega/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'

class PhoneDeatails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            viewBil: [],
            modalIsOpen: false,
            historyData:[]
        }
        this.handleCheck = this.handleCheck.bind(this);
        this.handlePdf = this.handlePdf.bind(this);
        this.previousData = this.previousData.bind(this);
    }
    handleCheck = (data) => {  
        this.setState({
            slectedPdfData: null
        })
        this.props.selectedData(data)
       
    }
    //codefor previous data
    previousData =(previousdata) => {
     this.setState({
        historyData:previousdata.history,
     })
     console.log('previousdata', previousdata);
    }

    //code to handle pdf 
    handlePdf = (downloadData) => {
        this.setState({
            slectedPdfData: downloadData
        })
    }

    render() {
        const styles = { btn1: { marginLeft: '10px' } }
        return (
            <div>
                <div className="content-section implementation">
                    <Panel header={this.props.prodata.product_name} toggleable={true}  >
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <label>Phone No: </label> {this.props.prodata.mobile_number}<br />
                                    <label>Custome Name: </label> {this.props.prodata.customer_name}
                                    <br />

                                </div>
                                <div className="col-md-6">
                                    <label>Status: </label> {this.props.prodata.status}<br />
                                    <label>Bill Date: </label> {this.props.prodata.generate_bill_date}
                                </div>
                                <div>
                                </div>
                            </div>
                            <div className="row">
                                <button type="button" style={styles.btn1} className="btn btn-primary"
                                 onClick= {()=>this.handleCheck(this.props.prodata)}>
                                <Link  to="/ViewBill" > View Bill </Link> </button>
                                <button type="button" style={styles.btn1} className="btn btn-primary"> View Plan</button>
                                <button type="button" style={styles.btn1} className="btn btn-primary"> Support</button>
                            </div>
                        </div>

                    </Panel>
                </div>
            </div>
        )
    }
}

const mapDispatch = (dispatch)=>{
    return {
       
        selectedData: (data)=>{
            console.log('new Todo Text', data)
            dispatch({type:'SELECTEDdata', payload:data})
        }
    }
}
export default connect(null, mapDispatch)(PhoneDeatails);