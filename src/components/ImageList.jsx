import React from 'react';

export function ImageList({ data, setArtData, loading }) {
	return (
		<>
			<ul>
				{loading
					? 'Loading...'
					: data.map((item) => (
							<li key={item.id} className="artdetails">
								<button onClick={() => setArtData(item)}>
									<p>Title: {item.title}</p>
									<p>artist: {item.artist_title}</p>
								</button>
							</li>
					  ))}
			</ul>
		</>
	);
}
