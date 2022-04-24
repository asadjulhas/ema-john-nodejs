import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './Shipment.css';

const Shipment = () => {

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');


  const handleName = event => {
    setName(event.target.value);
  }

  const handleAddress = event => {
    setAddress(event.target.value);
  }
  const handlPhone = event => {
    setPhone(event.target.value);
  }


  const shipmentForm = event => {
    event.preventDefault();

  }
const [user] = useAuthState(auth);
  return (
    <div>
      <div className="login_form shipment">
        <h3>Shiping information</h3>
        <form onSubmit={shipmentForm}>
          <label>Your Name</label><br />
          <input onChange={handleName} required type="text" /><br />
          <label>Email</label><br />
          <input required type="email" value={user?.email} readOnly /><br />
          <label>Address</label><br />
          <input required onChange={handleAddress} type="text" /><br />
          <label>Phone</label><br />
          <input required onChange={handlPhone}  type="text" /><br />
          <button className='login_btn'>Add Shipping</button>
        </form>
      </div>
    </div>
  );
};

export default Shipment;