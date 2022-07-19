import React, { useState } from 'react';
import axios from 'axios';

const Create = () => {

	// Store document's data
	const [data, setData] = useState({
		field_seq: '',
		is_mandatory: false,
		field_type: '',
		field_name: '',
		selected_values: ''
	})

	// Input onChange handler
	const onChange = event => {
		let isChecked = event.target.checked;
		const {  name, value } = event.target;
		setData({ ...data, [name]: value });
	};

	// Create document with recieved data
	const handleSubmit = async (event) => {
		event.preventDefault();

			await axios.post('http://localhost:3060/api/seasons', data)
				.then(res => {
					alert('Dokuments izveidots!');
				})
				.catch(error => console.error(`Error: ${error}`));
	};

	return (
			<div>

				<form onSubmit={handleSubmit}>

					<label htmlFor="field_seq">Secība:</label>
					<input type="text" name="field_seq" value={data.field_seq} onChange={onChange} placeholder='Secība'/>

					<label htmlFor="field_type">Lauka tips:</label>
					<select name='field_type' value={data.field_type} onChange={onChange}>
						<option value="1" name='Input'>Input</option>
						<option value="2" name='Select'>Select</option>
						<option value="3" name='NumberInput'>NumberInput</option>
					</select>

					<label htmlFor="name">Nosaukums:</label>
					<input type="text" name="field_name" value={data.field_name} onChange={onChange} placeholder='Lauka nosaukums'/>

					<input type="checkbox" value={data.is_mandatory} onChange={onChange}/>
					<label htmlFor="checkbox">Obligāts</label>

					<button submit>Saglabāt</button>

				</form>

			</div>
	);
};

export default Create;