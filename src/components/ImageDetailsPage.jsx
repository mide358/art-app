import React from 'react';

export const ImageDetailsPage = ({ setArtData, image_id, title, loading }) => {
	return (
		<div className="image-details">
			{loading ? (
				'loading...'
			) : (
				<img
					alt={title}
					src={`https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`}
				/>
			)}
			<button onClick={() => setArtData(null)}>Go back</button>
		</div>
	);
};
