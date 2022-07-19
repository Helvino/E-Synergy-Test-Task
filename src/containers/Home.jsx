import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {

	// Store document data
	const [documents, setDocuments] = useState([]);

	// Collect document data on mount
	useEffect(() => {
			axios.get('http://localhost:3000/api/v1/documents')
				.then(res => {
					setDocuments(res.data);
				})
				.catch(error => console.error(`Error: ${error}`));
		}, []);

	return (
		<>
		<Link to="/create">Izveidot jaunu dokumentu</Link>

		<div>

			<table>
				<tr>
					<th>ID</th>
					<th>Dokumenta Nosaukums</th>
					<th>Izveidošanas datums</th>
					<th>Dokumenta lielums</th>
					<th>...</th>
				</tr>
				<tr>
					{documents.map( document => (
						<div>
							<td>{document?.id}</td>
							<td>{document?.document_name}</td>
							<td>{document?.created_at}</td>
							<td>{document?.field_count}</td>
							<td><Link to={`/view/${document?.id}`}>Atvērt dokumentu</Link></td>
						</div>
					))}
				</tr>
			</table>

		</div>

		</>
	);
};

export default Home;