import React from 'react';
import avatar from '../../images/avatar.png';
import premium from '../../images/premium.png';

const SideBar = () => {
  return (
    <div style={{ backgroundColor: '#EEEEEE', paddingLeft: '25%', paddingTop: '25%', paddingBottom: '20%' }}>
      <img src={avatar} alt="avatar" />
      <img style={{ marginLeft: '-25px', marginBottom: '50px' }} src={premium} alt="premium" />
      <p>Reuse the user profile<br /> from last project</p>
      <br />
      <div style={{ marginBottom: '30px', fontWeight: '400' }}>Username</div>
      <div style={{ marginBottom: '30px' }}>Organization</div>
      <div style={{ marginBottom: '30px' }}>Image Count</div>
      <div style={{ marginBottom: '30px' }}>Watermark Count</div>
      <div style={{ marginBottom: '30px' }}>Download</div>
      <div>
        <button style={{
          paddingLeft: '20px',
          paddingRight: '20px',
          paddingTop: '10px',
          paddingBottom: '10px',
          background: '#909090',
          boxShadow: '5px 5px 15px rgba(66, 66, 66, 0.25)',
          borderRadius: '50px'
        }}>
          <a style={{ textDecoration: 'none', color: 'white' }}>Edit Info</a>
        </button>
      </div>
    </div>
  );
}

export default SideBar;
