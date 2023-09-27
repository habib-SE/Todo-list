import React from "react";
function Form(props){
    return(
        <div>
        <form className="form" >
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input type="text" className="form-control" id="username" placeholder="Enter your username" />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" placeholder="Enter your password" />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Confirm Password</label>
              {!props.isRegisterd &&<input type="password" className="form-control" id="password" placeholder="Enter your password" />}
            </div>
            <button type="submit" className="btn btn-primary">{props.isRegisterd ? "Login" : "Register"}</button>
          </form>
        </div>
      </div>
    </div>

        </form>
        </div>
    )
}
export default Form;