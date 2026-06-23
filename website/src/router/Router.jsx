import { createBrowserRouter } from 'react-router-dom';

import Layout from '../Layout/Layout';
import Main from '../Pages/Main';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				index: true,
				element: <Main />,
			},
		],
	},
]);

export default router;
