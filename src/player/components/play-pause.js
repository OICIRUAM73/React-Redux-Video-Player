import React from 'react';
import './play-pause.css';
import Play from '../../icons/components/play.js';
import Pause from '../../icons/components/pause.js';

const PlayPause = (props) => (
	<div className="PlayPause">
	{
		props.pause ?
			<button
				onClick={props.handleClick}
			>
				<Play 
					size={25}
					color="white"
				/>
			</button>
		:
			<button
				onClick={props.handleClick}
			>
				<Pause
					size={25}
					color="white"
				/>
			</button>
	}
	</div>
)

export default PlayPause;