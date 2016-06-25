import React, { Component } from 'react';

class Home extends Component {

  constructor(props){
    super(props);
    this.eventToggleSidebar = this.eventToggleSidebar.bind(this)
  }

  eventToggleSidebar(e) {
    e.preventDefault();
    this.props.toggleSidebar(!this.props.layout.sidebarOpen);
  }

  render() {

    return (

      	<div className="posts">

  			<div className="post banner">
			    <h1 className="post-title">I am a front-end JavaScript and WordPress developer.</h1>

			</div>

		  	<div className="post clearfix">

				<h2>I have experience with:</h2>

				<div className="skill-item clearfix">
					<ul>
						<li><em>JavaScript</em>
							<ul>
								<li><em>jQuery</em></li>
								<li><em>ES2015</em></li>
							</ul>
                        </li>
						<li><em>HTML5</em></li>
						<li><em>CSS3</em>
							<ul>
								<li><em>SCSS</em></li>
							</ul>
						</li>
						<li><em>REST APIs</em></li>
						<li><em>Git</em></li>
					</ul>
				</div>

				<div className="skill-item clearfix">
					<ul>
						<li><em>Node</em>
							<ul>
								<li><em>NPM</em></li>
							</ul>
                        </li>
						<li><em>React</em>
							<ul>
								<li><em>Redux</em></li>
							</ul>
                        </li>
                        <li><em>PureMVC</em></li>
						<li><em>Webpack</em></li>
						<li><em>Grunt</em></li>
						<li><em>Subversion</em></li>
					</ul>
				</div>

				<div className="skill-item clearfix">
					<ul>
                      <li><em>PHP</em></li>
                      <li><em>MySQL</em></li>
						<li><em>WordPress</em>
                            <ul>
		                      <li><em>Custom Themes</em></li>
		                      <li><em>Genesis Framework</em></li>
		                      <li><em>Custom Plugins</em></li>
                            </ul>
                        </li>
                      <li><em>Bootstrap</em></li>
					</ul>
				</div>
            </div>

            <div className="post clearfix">
                <h2>My current setup:</h2>
                <p>Dual-boot Windows 10 and Ubuntu 15.10 laptop. I use Vim and Atom with Vim controls for editing and Git for version control. I also have experience programming on MacOS.</p>
            </div>

            <div className="post clearfix">
      	  	    <h2>About This Site:</h2>
      	  	    <p>This site is an Isomorphic one-page web app built with React and Redux.</p>
            </div>

  		</div>

    );
  }
}

export default Home;
