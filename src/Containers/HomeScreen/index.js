import Stampt from '../../images/Stampt.png';
import Vector from '../../images/Vector.png';
import Gpp from '../../images/gpp.png';
import ector from '../../images/ector.png';
import vv from '../../images/vv.png';
import Crcmw from '../../images/Crcmw.png';
import Verify from '../../images/Verify.png';
import Email from '../../images/Email.png';
import Password from '../../images/Password.png';
import Cow from '../../images/cow.png';

function HomeScreen() {
  return (
    <div style={{ overflowY: 'scroll' }}>
      <section className="header">
        <nav className="navbar navbar-expand-md navbar-light bg-light">
          <div className="container">
            <a className="navbar-brand"><img src={Stampt} alt="Stampt" /></a>
            <div className="collapse navbar-collapse" id="navbartarget">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a href="#" className="nav-link vector">
                    <img src={Vector} alt="Vector" />
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link btn btn-block text-dark">
                    <img className="tool" src={Gpp} alt="Gpp" />
                    <span className="tt">Tools</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link btn btn-bloak text-dark">
                    <img className="lan" src={ector} alt="ector" />
                    <img className="guag" src={vv} alt="vv" />
                    <span className="tt">Languages</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <hr className="line1" />
      </section>

      <section className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="form-container">
              <div className="heading text-center">
                <h3 style={{ fontSize: 35, fontWeight: 'bold', marginLeft: '60px' }}>
                  Create more watermark?
                </h3>
                <form>
                  <h6 className="headi"><img src={Verify} alt="Verify" /></h6>
                  <div className="form-group">
                    <label className="frst text-center"><img src={Email} alt="Email" /></label>
                    <input type="email" name="email" className="form-control" />
                    <span className="btn btn-dark btn-verify">
                      <p className="texs text-white">Verify</p>
                    </span>
                  </div>
                  <div className="form-group">
                    <label className="scnd text-center"><img src={Password} alt="Password" /></label>
                    <input type="Password" name="Password" className="form-control input2" />
                  </div>
                  <button className="btn btn-primary btn-md btn-block btn-enter">
                    <p className="cont text-white">Enter</p>
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="col-md-5">
            <div className="form-cont">
              <div className="heading2 text-center ">
                <h3 style={{ fontSize: 35, fontWeight: 'bold', marginLeft: '60px' }}>
                  Create one Watermark
                </h3>
              </div>
              <button className="btn btn-dark text-white create">
                Create 1 Watermark Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* -----------------buttons---------------- */}

      <section className="container">
        <div className="row">
          <div className="col">
            <button className="btn btn-ads1">ADS</button>
          </div>
          <div className="col">
            <button className="btn btn-ads">ADS</button>
          </div>
        </div>
      </section>

      {/* <!--------------image-------------> */}

      <section>
        <div className="fixer">
          <div className="fixbg ">
            <p className="text-center gif">How It Works gif</p>
          </div>
        </div>
      </section>

      {/* <!--------------ads--------------> */}

      <section className="container">
        <div className="row">
          <div className="col-md-2">
            <button className="btn btn-ads2">ADS</button>
          </div>
          <div className="col-md-2">
            <button className="btn btn-ads2">ADS</button>
          </div>
          <div className="col-md-2">
            <button className="btn btn-ads2">ADS</button>
          </div>
          <div className="col-md-2">
            <button className="btn btn-ads2">ADS</button>
          </div>
          <div className="col-md-2">
            <button className="btn btn-ads2">ADS</button>
          </div>
          <div className="col-md-2">
            <button className="btn btn-ads2">ADS</button>
          </div>
        </div>
      </section>

      {/* <!--------------img--------------> */}

      <section>
        <div className="fixer container">
          <div className="fixkg">
            <p className="text-center fig">100,0293 images secured</p>
          </div>
        </div>
      </section>

      <section>
        <div className="fixer container">
          <div className="fixmg">
            <p className="text-center mig">Roadmap</p>
          </div>
        </div>
      </section>

      <section>
        <div className="fixer container">
          <div className="fixlg">
            <p className="text-center lig">Brands we work with</p>
          </div>
        </div>
      </section>

      {/* <!--------------footer--------------> */}

      <footer className="container-fluid footer">
        <div>
          <h3 className="foot">stampt it</h3>
        </div>
        <div>
          <span className="about">About</span>
          <span className="tou">Term of Use</span>
          <span className="lp">Legal and Privacy</span>
          <span className="ct">Contact</span>

        </div>
      </footer>

    </div>
  );
}

export default HomeScreen;
