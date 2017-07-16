import React, { Component } from 'react';
import ReactDOMServer from 'react-dom/server';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Parser as HtmlToReactParser } from 'html-to-react';

import DataWrapper from "./StoryDataWrapper";

@DataWrapper
@observer
export default class StoryPage extends Component {
	constructor(props) {
		super(props);
		this.store = this.props.store;
	}
	render() {
		const story = this.store.storyState.story;
		const scraped = this.store.storyState.story.scraped;
		console.log(story)
		return (
			<div className="page">
				<Helmet>
					<title>{story.headline}</title>
				</Helmet>
				{!scraped && <div className="story">
					<div className="story-header">
						<h1>Your article is being converted!</h1>
						<h2>Check back to this URL in a few minutes.</h2>
					</div>
				</div>}
				{scraped && <div className="story">
					<div className="story-header">
						<h2>{story.category || 'Politics'}</h2>
						<h1>{story.headline}</h1>
						<div className="story-header-meta">
							{story.byLine && story.byLine.length > 0 && <div className="byline">
								<p>
									By&ensp;
									{Array.prototype.map.call(story.byLine, (by, index, arr) => {
										return (
											<span>
												<strong>
													{by.name}
												</strong>
												{(index !== arr.length - 1) ? ' and ' : '' }
											</span>
										);
									})}
								 &ensp;• Published {story.dateline} • <a href={`http://www.foxnews.com${story.slug}`} target="_blank">Fox</a>
								</p>
							</div>}
							{story.byLine && story.byLine.name && <div className="byline">
								{story.byLine.image ? <img src={`${story.byLine.image}`} /> : ''}
								{story.byLine.name ? <p>By <strong>{story.byLine.name}</strong> • Published {story.dateline} • <a href={`http://www.foxnews.com${story.slug}`} target="_blank">Fox</a></p> : <p>Published {story.dateline} • <a href={`http://www.foxnews.com${story.slug}`} target="_blank">Fox</a></p>}
							</div>}
							{!story.byLine && <div className="byline">
								<p>Published {story.dateline} • <a href={`http://www.foxnews.com${story.slug}`} target="_blank">Fox</a></p>
							</div>}
							<div className="extras">
								<div>
									<img src={require('../../assets/share-facebook.png')} />
									<img src={require('../../assets/share-twitter.png')} />
									<img src={require('../../assets/share-email.png')} />
									<img src={require('../../assets/share-basic.png')} />
								</div>
								<div>
									<img src={require('../../assets/bookmark.png')} />
								</div>
							</div>
						</div>
					</div>
						<article>
							<div className="story-content">
								{story.leadImage && <div className="lead-image">
									<img src={story.leadImage.thumb} />
									{(story.leadImage.caption || story.leadImage.credit) && <div>
										{story.leadImage.caption}<span>&ensp;{story.leadImage.credit}</span>
									</div>}
								</div>}
								{story.story && story.story.paragraphs && Array.prototype.map.call(story.story.paragraphs, (html, index) => {
									const htmlToReactParser = new HtmlToReactParser();
									const reactElement = htmlToReactParser.parse(html);
									return (
										<p>
											{reactElement}
										</p>
									);
								})}
							</div>
							<div className="sidebar">
								<div className="more-content">
									<h4>Related Content</h4>
									<ul>
										{story.more && Array.prototype.map.call(story.more, (more) => {
											console.log(more.thumb)
											return (
												<li>
													<a href={more.href}>
														{more.thumb && <div><img src={more.thumb} /></div>}
														<span>{more.headline}<p>2017</p></span>
													</a>
												</li>
											);
										})}
									</ul>
								</div>
								<div className="trending-content">
									<h4>Trending</h4>
									<ul>
										{story.trending && Array.prototype.map.call(story.trending, (trend, index) => {
											return (
												<li>
													<h5>{index + 1}.</h5><a href={trend.href}>{trend.headline}</a>
												</li>
											);
										})}
									</ul>
								</div>
							</div>
					</article>
				</div>}
			</div>
		);
	}
}
