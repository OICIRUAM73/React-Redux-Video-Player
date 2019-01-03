import React from 'react';
//import Media from './media';
import MediaContainer from '../containers/media.js';
import './playlist.css';
import Play from '../../icons/components/play';
import Pause from '../../icons/components/pause';
import Volume from '../../icons/components/volume';

function Playlist(props) {
	const { playlist} = props
	return(
		<div className="Playlist">
		
			{
				playlist.map((mediaId) => {
					return <MediaContainer openModal = {props.handleOpenModal} id={mediaId} key={mediaId} />
				})
			}
		</div>
	)
}

// <Play
		// 	size={25}
		// 	color="gray"
		// />
		// <Pause
		// 	size={25}
		// 	color="gray"
		// />
		// <Volume
		// 	size={25}
		// 	color="gray"
		// />
		// <FullScreen
		// 	size={25}
		// 	color="gray"
		// />

export default Playlist;