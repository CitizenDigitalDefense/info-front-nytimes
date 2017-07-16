import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { inject, observer } from "mobx-react";
import LazyRoute from "lazy-route";
import DevTools from "mobx-react-devtools";
import { Helmet } from "react-helmet";

import NYTHeader from "../component-library/Navigation/NYTHeader";
import NYTFooter from '../component-library/Navigation/NYTFooter';
import EdFooter from '../component-library/Navigation/EdFooter';

@inject("store")
@observer
export default class App extends Component {
	constructor(props) {
		super(props);
		this.store = this.props.store;
	}
	render() {
		return (
			<div className="wrapper">
				<Helmet>
					<link rel="icon" href={require('../assets/favicon.png')} />
				</Helmet>
				<NYTHeader />
				<main>
					<Route
						path="/:id"
						render={props => (
							<LazyRoute {...props} component={import("./Story")} />
						)}
					/>
				</main>
				<NYTFooter />
				<EdFooter />
			</div>
		);
	}
}
