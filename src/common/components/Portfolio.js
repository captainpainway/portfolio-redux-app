import React, { Component } from 'react';
import { getPortfolio } from '../api/portfolio';
import classNames from 'classnames';

class Portfolio extends Component {

  render() {

  	const portfolio = getPortfolio();
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

    const PortfolioRows = portfolio.map((row) => {
    	const classname = classNames('portfolio_item','clearfix',row.classname);
        return (
            <div key={row.title} className={classname}>
                <div className="buffer"></div>
                <div className="row_info">
    				<a href={row.link} target="_blank"><h2>{row.title}</h2></a>
    				{RoleRows(row.roles)}
                </div>
			</div>
        )
    });

    return (
        <div className="posts">
        	{PortfolioRows}
        </div>
    );

  }
}

export default Portfolio;
