import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Create from './containers/Create';
import View from './containers/View';
import Home from './containers/Home';

const App = () => {
	return (
		<div className="main">
					<Routes>

						<Route exact path="/" element={<Home />} />

						<Route path="/create" element={<Create />} />

						<Route path="/view/:slug" element={<View />} />
							
					</Routes>
		</div>
	);
};

export default App;