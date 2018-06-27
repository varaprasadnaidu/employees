import React, { Component } from 'react'
import { connect } from 'react-redux'
import ViewBillDeatails from './viewBill-Deatils'

 class ViewBill extends Component {
  render() {
    
    return (
      <div className="ui model">
       <ul>
        {this.props.viewBill.map(data => <ViewBillDeatails key = {data.id} data={data} /> )}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      viewBill: state.vBillData    
  }
}
export default connect(mapStateToProps)(ViewBill)