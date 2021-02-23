import React, { Component } from 'react';
import './LoadingBar.css';

const LoadingBar = ({ targetTime, remainingTime }) => {
	let barPercentage = targetTime ? 1-remainingTime/targetTime : 0;
	console.log(targetTime, remainingTime);
	document.documentElement.style.setProperty('--bar-width', `${100*barPercentage}vw`);
	document.documentElement.style.setProperty('--movbar-glow', targetTime ? 'inline-block' : 'none');
	return (
		<div id='loadBar'>
			<div id='movBar'>
				<div className="tg-1 trail-glow"></div>
				<div className="tg-2 trail-glow"></div>
				<div className="tg-3 trail-glow"></div>
			</div>
		</div>
	);
}

export default LoadingBar;