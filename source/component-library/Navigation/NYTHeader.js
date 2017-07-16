import React, { Component } from "react";
import { inject, observer } from "mobx-react";

@inject("store")
@observer
export default class NYTHeader extends Component {
	constructor(props) {
		super(props);
		this.store = this.props.store.appState;
	}

	render() {
		return (
			<header className="nyt-header">
				<div className="masthead">
					<div className="menus">
						<div className="sections"><img src={require('../../assets/menu.png')} />Menu</div>
						<span>
							Landing
						</span>
					</div>
					<div className="branding">
						<img className="logo" src={require('../../assets/logo.png')} />
					</div>
					<div className="profile">
						<span>
							<img src={require('../../assets/search.png')} />
						</span>
					</div>
				</div>
			</header>
		);
	}
}
