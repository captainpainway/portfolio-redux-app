import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Repos from './about/Repos';

import Loader from './layout/Loader';
import Banner from './layout/Banner';

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchReposIfNeeded();
  }

  render () {
    const { results, isFetching, lastUpdated, error } = this.props;
    return (
      <div>

      	  <div className="about">

      	  	<h3>About Me</h3>

            <p>I have gone, in the past 10+ years, from web development hobbyist, to freelancer, to full-time front-end webdev employee. While I was still in high school I would view the source of websites in order to see how they worked. From there I created small hobby sites for myself and friends.</p>

            <p>While I was in college, WordPress was released, and I began creating WordPress blogs. I found that I was not a diligent blogger, but I did love creating new themes for my sites. I turned this into a side business creating custom WordPress themes.</p>

            <p>Despite earning a Bachelor's Degree in Graphic Design, I was unsure how to parlay my experience with WordPress, HTML, CSS, and PHP into a full-time career, and began a career calculating pension benefits at Macy's. After a move to Florida I started a career in marketing, eventually achieving a management role.</p>

            <p>While working in these other roles I still wanted to learn more about web development, and taught myself JavaScript, MySQL, Node.js, and some basic Python and Ruby. In 2015 I made the career switch to full-time Front-End JavaScript Developer at BlueToad.</p>

	      </div>

	      <div className="repos post">
	      	<h3><a href="https://github.com/captainpainway?tab=repositories" target="_blank">My GitHub</a> Repos</h3>
	        {isFetching && results.length === 0 &&
	          	<Loader />
	        }
	        {!isFetching && error && results.length === 0 &&
	          <h3 className="post-error">There has been an Error</h3>
	        }
	        {!isFetching && !error && results.length === 0 &&
	          <h3>Empty</h3>
	        }
	        {results.length > 0 &&
	          <div style={{ opacity: isFetching ? 0.5 : 1 }}>
	            <Repos results={results} />
	          </div>
	        }
	      </div>

      </div>
    );
  }
}

About.propTypes = {
  results: PropTypes.array.isRequired,
  error: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired
};

export default About;
