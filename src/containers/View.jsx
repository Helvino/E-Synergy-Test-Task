import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

const View = () => {

	const { id } = useParams();

	// Store document data
	const [document, setDocument] = useState([]);

	// Collect document data on mount
	useEffect(() => {
			axios.get(`http://localhost:3000/api/v1/document/${id}`)
				.then(res => {
					setDocument(res.data);
				})
				.catch(error => console.error(`Error: ${error}`));
		}, []);

	return (
			<div>

					<h1>{document?.name}</h1>

					<div>
						<label htmlFor="field_type">{document?.field_type}</label>
						<h2>{document?.field_name}</h2>
					</div>

					<Link to={'/'}>Atpakaļ</Link>

			</div>
	);
};

export default View;