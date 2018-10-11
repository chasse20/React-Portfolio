import React, { Component } from "react";
import Button from "./Button";
import "./Project.css";

export default class Project extends Component
{
	shouldComponentUpdate( tNextProps, tNextState )
	{
		return tNextProps.project !== this.props.project;
	}

	render()
	{
		const tempProject = this.props.project;
		if ( tempProject == null )
		{
			return null;
		}

		return (
			<article>
				<div id="bottom-bg">
					<div className="overlay"/>
				</div>
				<div id="top-bg" style={ { backgroundImage: "url(" + tempProject.tileImage + ")" } }>
					<div className="overlay"/>
				</div>
				<header>
					<h1>{ tempProject.name }</h1>
					<h2>{ tempProject.platform }</h2>
				</header>
				<div id="content">
					<section>
						{
							tempProject.links.map(
								( tLink ) =>
								(
									<a className="link" key={ tLink.url } href={ tLink.url } target="_blank">
										<Button text={ tLink.name } icon={ tLink.icon }/>
									</a>
								)
							)
						}
					</section>
					<section>
						{
							tempProject.video != null &&
								<div id="video">
									<iframe src={ tempProject.video } frameBorder="0" allow="encrypted-media" allowFullScreen title="video" aria-hidden="true"></iframe>
								</div>
						}
						{
							tempProject.images != null &&
								tempProject.images.map(
									( tImage ) =>
									(
										<a className="image" key={ tImage.url } href={ tImage.url } target="_blank">
											<img src={ tImage.thumbnail } alt=""/>
										</a>
									)
								)
						}
					</section>
					<section>
						<Button text="Overview" icon="images/overview.svg"/>
						<p>{ tempProject.description }</p>
					</section>
					<section>
						<Button text="Tools" icon="images/tools.svg"/>
						<ul>
							{
								tempProject.tools.map(
									( tTool ) =>
									(
										<li className="tool" key={ tTool }>
											{ tTool }
										</li>
									)
								)
							}
						</ul>
					</section>
					{
						tempProject.credits != null &&
							<section>
								<Button text="Credits" icon="images/credits.svg"/>
								<ul>
									{
										tempProject.credits.map(
											( tCredit ) =>
											(
												<li className="credit" key={ tCredit.name }>
													<b>{ tCredit.name }:</b>
													<span>{ tCredit.role }</span>
												</li>
											)
										)
									}
								</ul>
							</section>
					}
				</div>
			</article>
		);
	}
}