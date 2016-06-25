import React, { Component } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

class Sidebar extends Component {


  constructor(props){
	super(props);
	this.eventCloseSidebar = this.eventCloseSidebar.bind(this)
  }

  eventCloseSidebar (e) {
  	this.props.toggleSidebar(!this.props.layout.sidebarOpen);
  }

  render() {

    return (

    	<div className="sidebar">

		  <div className="sidebar-item">
            <div className="logo"></div>
		  </div>

          <div className="social-icons">
              <a href="https://www.facebook.com/mary.staggs"><button className="si facebook"></button></a>
              <a href="https://twitter.com/CaptainPainway"><button className="si twitter"></button></a>
              <a href="https://github.com/captainpainway"><button className="si github"></button></a>
              <a href="http://codepen.io/captainpainway/"><button className="si codepen"></button></a>
              <a href="https://www.linkedin.com/in/maryknize"><button className="si linkedin"></button></a>
              <a href="mailto: maryknize@gmail.com"><button className="si email"></button></a>
          </div>

		  <nav className="sidebar-nav">
		    <Link to="/home" className="sidebar-nav-item" onClick={this.eventCloseSidebar} activeClassName="active">Home</Link>
		    <Link to="/portfolio" className="sidebar-nav-item" onClick={this.eventCloseSidebar} activeClassName="active">Portfolio</Link>
		    <Link to="/about" className="sidebar-nav-item" onClick={this.eventCloseSidebar} activeClassName="active">About</Link>
		    <Link to="/blog" className="sidebar-nav-item" onClick={this.eventCloseSidebar} activeClassName="active">Blog</Link>
		  </nav>

		</div>
    );
  }
}

export default Sidebar;
