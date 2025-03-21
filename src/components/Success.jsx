import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'reactstrap';

export default function Success() {
  const history = useHistory();

  const handleLogout = () => {
    history.push('/'); 
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Login Successful!</h1>
      <p>Welcome to the application.</p>
      <Button color="danger" onClick={handleLogout}>Logout</Button>
    </div>
  );
}