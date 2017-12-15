import React from 'react'
import { connect } from 'react-redux'

import TuiGuang from '../components/TuiGuang'

function mapStateToProps(state) {
  return {
    wxinfo:state.wxinfo
  }
}

export default connect(
    mapStateToProps
)(TuiGuang)