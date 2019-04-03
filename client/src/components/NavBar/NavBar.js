import React, { Component } from "react";
// import "../styles/Navbar.css";


class NavBar extends Component {
 state = {
   Email: '',
   Password: ''
 };
 render() {
   return (
     <div>

         <form className="px-4 py-3">
           <div className="form-group">
            <div className="row">
                <div className="col-md-7"/>
                <div className="col-md-2"><input type="email" className="form-control" id="exampleDropdownFormEmail1" placeholder="Email" /></div>
                <div className="col-md-1"><input type="password" className="form-control" id="exampleDropdownFormPassword1" placeholder="Password" /></div>
                <button type="submit" className="btn btn-dark">Sign in</button>
                <div className="col-md-2"/>
           </div>
         </div>
        </form>
       </div>
   );
 }
};

export default NavBar;