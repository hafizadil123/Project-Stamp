import React from "react";
import { Link } from 'react-router-dom';

function LoginScreen() {
  return (
    <>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh'
      }}>
        <div style={{
          padding: '3% 10% 3% 10%',
          backgroundColor: '#E5E5E5',
          boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
        }}>
          <header style={{ fontSize: 20, fontWeight: 'bold' }}>
            Sign In
          </header>
          <hr />
          <div style={{ marginTop: '30%' }}>
            <div>
              <label style={{ fontSize: 20, fontWeight: 'bold' }}>Email</label>
              <div style={{ float: 'right' }}>
                <input className="login-input" placeholder="Email" />
              </div>
            </div>
            <br />
            <div style={{ marginTop: '10%' }}>
              <label style={{ fontSize: 20, fontWeight: 'bold' }}>Password</label>
              <div style={{ float: 'right' }}>
                <input className="login-input" placeholder="Password" />
              </div>
            </div>
            <div style={{ textAlign: 'center', marginTop: '15%' }}>
              <Link
                className="login-button"
                role="button"
                to="/dashboard"
                >
                LOGIN
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}

export default LoginScreen;
