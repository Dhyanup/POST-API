import React from 'react'
import Navheader from './Navheader'

const Deletepost = () => {
  return (
    <div>
        <Navheader />
        <div className="container">
            <row>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            <label htmlFor="" className="form-label">title</label>
                            <input type="text" className="form-control" />

                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success">delete</button>
                        </div>
                    </div>
                </div>
            </row>
        </div>
    </div>
  )
}

export default Deletepost