import './App.css';

import { searchArtworks } from '../utils/api';
import { SearchForm } from './SearchForm';
import { Footer } from './Footer';
import { useState } from 'react';
import { ImageDetailsPage } from './ImageDetailsPage';
import { ImageList } from './ImageList';

export function App() {
	const [data, setData] = useState(null);
	const [artData, setArtData] = useState(null);
	const [loading, setLoading] = useState(false);
	function onSearchSubmit(query) {
		// Search for the users's query.
		// TODO: render the results, instead of logging them to the console.
		// NOTE: `searchArtworks` currently returns local data, so that we
		// don't make too many requests to the API! Once we've built out
		// our UI, we need to make real requests!
		// @see: ./src/uitls/api.js
		setLoading(true);
		searchArtworks(query).then((json) => {
			console.log(json.data);
			setData(json.data);
			setLoading(false);
		});
	}

	return (
		<div className="App">
			<h1>TCL Career Lab Art Finder</h1>
			{!artData && <SearchForm onSearchSubmit={onSearchSubmit} />}

			{data && !artData && (
				<ImageList data={data} loading={loading} setArtData={setArtData} />
			)}

			{artData && (
				<ImageDetailsPage
					data={data}
					image_id={artData.image_id}
					loading={loading}
					setArtData={setArtData}
					title={artData.thumbnail.alt_text}
				/>
			)}
			<Footer />
		</div>
	);
}
