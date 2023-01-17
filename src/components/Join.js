import React from 'react'
import PhoneInput from 'react-phone-input-2';

export default function Join(props) {
  return (
//     <form className="row g-3 my-4" id="formContainer">
//       <div >
//         <label htmlFor="inputName4" className="form-label" id="nameId" >{props.name}</label>
//         <input type="text" className="form-control" style={{width:'370px'}} id="inputName4" />
//       </div>
//       <div >
//         <label htmlFor="inputEmail4" className="form-label" id="emailId" >{props.email}</label>
//         <input type="email" className="form-control" style={{width:'370px'}} id="inputEmail4"/>
//       </div>
//       {/* <div className="col-md-6">
//         <label htmlFor="inputPassword4" className="form-label">Password</label>
//         <input type="password" className="form-control" id="inputPassword4"/>
//       </div> */}
//       {/* <div className="col-12">
//         <label htmlFor="inputAddress" className="form-label" id="addressId">{props.address}</label>
//         <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
//       </div> */}
//       {/* <div className="col-12">
//         <label htmlFor="inputAddress2" className="form-label">Address 2</label>
//         <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
//       </div> */}
//       {/* <div className="col-md-6">
//         <label htmlFor="inputCity" className="form-label" id="cityId">{props.city}</label>
//         <input type="text" className="form-control" id="inputCity"/>
//       </div> */}
//       {/* <div className="col-md-4">
//         <label htmlFor="inputState" className="form-label">State</label>
//         <select id="inputState" className="form-select">
//           <option selected>Choose...</option>
//           <option>...</option>
//         </select>
//       </div> */}
//       {/* <div className="col-md-2">
//         <label htmlFor="inputZip" className="form-label">Zip</label>
//         <input type="text" className="form-control" id="inputZip"/>
//       </div> */}
//       {/* <div className="col-12">
//         <div className="form-check">
//           <input className="form-check-input" type="checkbox" id="gridCheck"/>
//           <label className="form-check-label" htmlFor="gridCheck">
//             Check me out
//           </label>
//         </div>
//       </div> */}
//       <div className="col-12">
//         <button type="submit" className="btn btn-primary">{props.joinUs}</button>
//       </div>
// </form>

<div className="card text-center" id="joinCardContainer">
  <div className="card-header">
    <b>Join Us</b>
  </div>
  <div className="card-body">
    {/* <h5 className="card-title">Special title treatment</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a> */}
      <div>
        <label htmlFor="inputName4" className="form-label" id="nameId" >{props.name}</label>
        <input type="text" className="form-control"  id="inputName4" placeholder='Name '/> 
        {/* style={{width:'400px'}} */}
       </div>
       <div>
         <label htmlFor="inputEmail4" className="form-label my-2" id="emailId" >{props.email}</label>
         <input type="email" className="form-control"  id="inputEmail4" placeholder='example@gmail.com'/>
         {/* style={{width:'400px'}} */}
       </div>
       <div>
         {/* <label htmlFor="inputContact4" className="form-label" id="contactId" >{props.phone}</label> */}
         <PhoneInput className="my-2"
         placeholder='1234567891'
          // country={'india'}
          // value={this.state.phone}
          // onChange={phone => this.setState({ phone })}
          />
         {/* <input type="email" className="form-control"  id="inputContact4"/> */}

         {/* style={{width:'400px'}} */}
       </div>
       <div className="col-12 my-4 ">
         <button type="submit" className="btn btn-primary">{props.submit}</button>
       </div>
  </div>
  {/* <div className="card-footer text-muted">
    2 days ago
  </div> */}
</div>
  )
}
