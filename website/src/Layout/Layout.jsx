import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Background from '../Assets/background.png';

export default function Layout() {
	return (
		<div className='relative min-h-screen overflow-x-hidden bg-[#120914]'>
			<img
				src={Background}
				alt='Background'
				className='fixed inset-0 w-full h-full object-cover blur-xl scale-105'
			/>

			<div className='fixed inset-0 bg-black/50' />

			<div className='relative z-10 min-h-screen'>
				<Navbar />
				<Outlet />
			</div>
		</div>
	);
}
