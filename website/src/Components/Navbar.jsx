import { useEffect, useRef, useState } from 'react';

export default function Navbar() {
	const [activeSection, setActiveSection] = useState('home');
	const [blobStyle, setBlobStyle] = useState({ left: 0, width: 0 });

	const buttonRefs = useRef({});
	const navbarOffset = 60;

	const navItems = [
		{ name: 'Home', id: 'home' },
		{ name: 'Projects', id: 'projects' },
		{ name: 'Photography', id: 'photography' },
		{ name: 'Contact', id: 'contact' },
	];

	const unselectedClasses =
		'text-white hover:bg-white/20 hover:text-white hover:shadow-[0_0_10px_#d89cff]';

	function updateBlobPosition(id) {
		const button = buttonRefs.current[id];
		if (!button) return;

		setBlobStyle({
			left: button.offsetLeft,
			width: button.offsetWidth,
		});
	}

	function scrollToSection(id) {
		if (id === 'home') {
			window.scrollTo({ top: 0, behavior: 'smooth' });
			window.history.replaceState(null, '', window.location.pathname);
			setActiveSection('home');
			return;
		}

		const section = document.getElementById(id);
		if (!section) return;

		window.scrollTo({
			top: section.offsetTop - navbarOffset,
			behavior: 'smooth',
		});

		window.history.replaceState(null, '', `#${id}`);
		setActiveSection(id);
	}

	useEffect(() => {
		updateBlobPosition(activeSection);
	}, [activeSection]);

	useEffect(() => {
		function handleScroll() {
			const sections = navItems.map((item) => document.getElementById(item.id));

			const currentSection = sections.find((section) => {
				if (!section) return false;

				const rect = section.getBoundingClientRect();

				return (
					rect.top <= window.innerHeight / 2 &&
					rect.bottom >= window.innerHeight / 2
				);
			});

			if (currentSection) {
				setActiveSection(currentSection.id);
			}
		}

		function handleResize() {
			updateBlobPosition(activeSection);
		}

		handleScroll();
		window.addEventListener('scroll', handleScroll);
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('resize', handleResize);
		};
	}, [activeSection]);

	return (
		<div className='fixed top-15 left-1/2 -translate-x-1/2 z-50'>
			{' '}
			<nav className='w-[clamp(10vw,70vw,90vw)] relative flex justify-evenly items-center p-3 rounded-3xl bg-[#EEF2FF]/20 backdrop-blur-xl border border-[#d89cff] shadow-[0_0_5px_#d89cff,0_0_15px_#d89cff,0_0_30px_#d89cff] overflow-hidden'>
				{' '}
				<div
					className='absolute top-3 bottom-3 rounded-full bg-[#6d3d64]/20 backdrop-blur-xl border border-[#d89cff] shadow-[0_0_5px_#d89cff,0_0_15px_#d89cff,0_0_30px_#d89cff] transition-all duration-500 ease-out'
					style={{
						left: `${blobStyle.left}px`,
						width: `${blobStyle.width}px`,
					}}
				/>
				{navItems.map((item) => (
					<button
						key={item.id}
						ref={(el) => {
							buttonRefs.current[item.id] = el;
						}}
						type='button'
						onClick={() => scrollToSection(item.id)}
						className={`relative z-10 w-36 flex items-center justify-center py-1 rounded-full transition-all duration-200 border border-transparent ${
							activeSection === item.id ? 'text-white' : unselectedClasses
						}`}>
						<p className='text-center text-[clamp(6px,2.5vw,18px)]'>
							{item.name}
						</p>
					</button>
				))}
			</nav>
		</div>
	);
}
