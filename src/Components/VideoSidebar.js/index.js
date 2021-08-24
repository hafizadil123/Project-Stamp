import logo from '../../images/i6.png';


function VideoSidebar() {
  return (
    <div className="box1" style={{
      width: '50%',
      marginLeft: '25%',
      border: '1px solid #E6E6E6',
      padding: '20px'
    }}>
      <div className="box2" style={{ backgroundColor: '#F6F6F6', border: '1px solid #E6E6E6' }}>
        <h3 className="hh">Watermark</h3>
      </div>
      <div className="box3" style={{ backgroundColor: '#FFFFFF', boxShadow: '0px 4px 8px rgba(170, 170, 170, 0.25)', borderRadius: '5px', width: '50%', marginTop: '25px' }}>
        <input className="hh1" type="text" placeholder="3546523.56323564" />
      </div>
      <hr />
      <div className="box3">
        <select>
          <option defaultValue value="text">Text</option>
          <option value="image">Image</option>
          <option value="longtext">Long Text</option>
          <option value="wave">Wave</option>
        </select>
      </div>
      <div style={{ padding: '16px', marginTop: '30px' }}>
        <img style={{ width: '90px' }} src={logo} alt="logo" />
        <h3>Watermark Image</h3>
        <p>A transparent, PNG, Minimum 800px is required</p>
      </div>
      <div className="box4" style={{ height: '40px', backgroundColor: '#F6F6F6F6', borderTop: '1px solid #E6E6E6', borderBottom: '1px solid #E6E6E6' }}>
        <h5>SPECIAL TEXT</h5>
      </div>
      <div className="form-group">
        <input type="checkbox" value="username" />
        <label> User Name</label><br />
        <input type="checkbox" value="useremail" />
        <label> User Email</label><br />
        <input type="checkbox" value="userip" />
        <label> User IP Address</label><br />
        <input type="checkbox" value="orgname" />
        <label> Organization Name</label><br />
        <input type="checkbox" value="orgaemail" />
        <label> Organization Name</label><br />
        <input type="checkbox" value="accountname" />
        <label> Account Name</label>
      </div>
      <div className="box5" style={{
        height: '80px',
        backgroundColor: '#F6F6F6',
        border: '1px solid #E6E6E6',
      }}>
        <button className="btn btn-1" style={{ backgroundColor: '#909090', boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.25)', marginLeft: '30px', marginTop: '20px' }}>Customize</button>
        <button className="btn btn-1" style={{ backgroundColor: '#909090', boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.25)', marginLeft: '30px', marginTop: '20px' }}>Save</button>
        <button className="btn btn-1" style={{ backgroundColor: '#909090', boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.25)', marginLeft: '30px', marginTop: '20px' }}>Cancel</button>
      </div>
    </div>
  );
}

export default VideoSidebar;
