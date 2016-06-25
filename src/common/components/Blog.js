import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class Blog extends Component {

  render () {
    const { results, isFetching, lastUpdated, error } = this.props;
    return (
      <div>

      	  <div className="post">

      	  	<h1>Blog coming soon!</h1>

	      </div>

      </div>
    );
  }
}
export default Blog;
