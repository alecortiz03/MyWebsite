import { useEffect, useState } from 'react';
import Avatar from '../Assets/Models/Avatar.png';

export default function Home() {
	const titles = [
		'Software Developer',
		'Photographer',
		'App Developer',
		'Tech Enthusiast',
	];

	const [titleIndex, setTitleIndex] = useState(0);
	const [visibleCharacters, setVisibleCharacters] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);

	useEffect(() => {
		const currentTitle = titles[titleIndex];

		let delay = isDeleting ? 50 : 100;

		if (!isDeleting && visibleCharacters === currentTitle.length) {
			delay = 1500;
		}

		const timeout = setTimeout(() => {
			if (!isDeleting && visibleCharacters < currentTitle.length) {
				setVisibleCharacters(visibleCharacters + 1);
			} else if (!isDeleting && visibleCharacters === currentTitle.length) {
				setIsDeleting(true);
			} else if (isDeleting && visibleCharacters > 0) {
				setVisibleCharacters(visibleCharacters - 1);
			} else if (isDeleting && visibleCharacters === 0) {
				setIsDeleting(false);
				setTitleIndex((currentIndex) =>
					currentIndex === titles.length - 1 ? 0 : currentIndex + 1,
				);
			}
		}, delay);

		return () => clearTimeout(timeout);
	}, [visibleCharacters, isDeleting, titleIndex]);

	return (
		<section
			id='home'
			className='flex flex-col items-center justify-center min-h-screen gap-4'>
			<div className='flex flex-col lg:flex-row items-center justify-center w-full gap-12'>
				{' '}
				<div className='w-full lg:w-1/2 flex flex-col justify-center items-center'>
					{' '}
					<div className='w-[clamp(30vw,50vw,60vw)] lg:mt-30 bg-[#6d3d64]/20 flex justify-center items-center backdrop-blur-xl rounded-3xl border border-[#d89cff] shadow-[0_0_5px_#d89cff,0_0_15px_#d89cff,0_0_30px_#d89cff] lg:ml-40'>
						<img
							src={Avatar}
							alt='Avatar'
							className='w-full h-auto rounded-3xl p-4'
						/>
					</div>
				</div>
				<div className='w-full lg:w-1/2 lg:pl-30 flex justify-center items-center'>
					<div className='w-[clamp(300px,50vw,700px)] flex flex-col items-center lg:mr-30'>
						{' '}
						<h1 className='text-9xl font-bold text-white text-shadow-lg text-[clamp(2rem,4vw,4.5rem)] whitespace-nowrap'>
							Hi, I'm{' '}
							<span
								className='text-9xl font-bold text-[#d89cff] whitespace-nowrap animate-pulse text-center text-[clamp(2rem,4vw,4.5rem)]'
								style={{
									textShadow: `
										-2px -2px 0 #ffffff,
										 2px -2px 0 #ffffff,
										-2px  2px 0 #ffffff,
										 2px  2px 0 #ffffff,
										 0 0 5px #d89cff,
										 0 0 15px #d89cff,
										 0 0 30px #d89cff
									`,
								}}>
								Alec
							</span>
							!
						</h1>
						<h1 className='w-[13ch] text-center text-[clamp(2rem,4vw,4.5rem)] text-white whitespace-nowrap text-[clamp(2rem,4vw,4.5rem)]'>
							{' '}
							{titles[titleIndex].slice(0, visibleCharacters)}
							<span className='text-[#d89cff] animate-pulse text-[clamp(2rem,4vw,4.5rem)]'>
								|
							</span>
						</h1>
					</div>
				</div>
			</div>
		</section>
	);
}
