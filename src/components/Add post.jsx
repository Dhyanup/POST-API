import React from 'react'
import Navheader from './Navheader'

const Addpost = () => {
  return (
    <div>
        <Navheader />
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                            <label htmlFor="" className="form-label">userid</label>
                            <input type="number" className="form-control" />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                        <label htmlFor="" className="form-label">id</label>
                        <input type="number" name="" id="" className="form-control" />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                            <label htmlFor="" className="form-label">title</label>
                            <input type="text" className="form-control" />

                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            <label htmlFor="" className="form-label">body</label>
                           <textarea name="" id="" cols="30" rows="10" className="form-control"></textarea>


                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                            <button className="btn btn-primary">submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Addpost