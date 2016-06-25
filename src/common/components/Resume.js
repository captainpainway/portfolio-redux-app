import React, { Component } from 'react';
import { getResume } from '../api/resume';
import classNames from 'classnames';

class Resume extends Component {

  render() {

  	const resume = getResume();
	const RoleRows = (roles) => {
		return roles.map((role) => {
			return (
				<div key={role.title} className="role_wrapper clearfix">
					<p className="role_title">{role.title}<br />
					<span className="role_skills">{role.skills}</span></p>
				</div>
			)
		});
	}

    const ResumeRows = resume.map((row) => {
    	const classname = classNames('resume_item','clearfix',row.classname);
        return (
            <div key={row.title} className={classname}>
				<a href={row.link} target="_blank"><h2>{row.title}</h2></a>
				{RoleRows(row.roles)}
			</div>
        )
    });

    return (
        <div className="posts">
            <h1 className="post-title">Resumé</h1>
    	    <p><a href="#">Check out my LinkedIn</a></p>
        	{ResumeRows}
        </div>
    );

  }
}

export default Resume;
