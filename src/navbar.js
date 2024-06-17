import {useState} from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
const Navbar = () => {
  let [learnMore, setLearnMore] = useState('Learn More')
  const changename = ()=>{
    setLearnMore('Get Started')
  }
  return (
    <nav className="navbar bg-success">
      <div className="container-fluid">
        <a className="navbar-brand mx-auto " href="#id">
         <h4 className="text-light"> Px Farms</h4>
        </a>
        <div className="wrap d-flex align-items-center gap-2">
          <Link to = "/About">
           <div className="about" style={{cursor:'pointer'}}>About</div>
          </Link>
       
        <Link to="/">
        <div className="btn btn-outline-dark p3" onClick={changename}>{learnMore}</div>
        </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
