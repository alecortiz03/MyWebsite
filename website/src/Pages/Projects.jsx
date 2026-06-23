import ProjectVideoOne from '../Assets/Videos/projectVideoOne.mov';
import ProjectTwoImage from '../Assets/Images/Projects/ProjectTwo.png';
import ProjectThreeVideo from '../Assets/Videos/projectThree.mov';

export default function Projects() {
	const cardClass =
		'w-full max-w-[520px] flex flex-col items-center bg-[#6d3d64]/20 backdrop-blur-xl rounded-3xl border border-[#d89cff] shadow-[0_0_5px_#d89cff,0_0_15px_#d89cff,0_0_30px_#d89cff] p-5 sm:p-7 lg:p-8 gap-4';

	const innerBoxClass =
		'w-full bg-[#6d3d64]/20 backdrop-blur-xl rounded-3xl border border-[#d89cff] shadow-[0_0_5px_#d89cff,0_0_15px_#d89cff,0_0_30px_#d89cff] p-4';

	const mediaClass =
		'w-full aspect-video object-cover rounded-3xl border border-white/10 shadow-lg';

	const titleClass =
		'text-[clamp(1.2rem,2vw,1.8rem)] text-center text-white font-bold [text-shadow:0_0_15px_rgba(0,0,0,0.8)]';

	const descriptionClass =
		'text-white/80 text-center text-[clamp(0.9rem,1vw,1rem)] leading-relaxed';

	const projects = [
		{
			title: 'MacEwan Smart Digital Signage System',
			type: 'video',
			src: ProjectVideoOne,
			description:
				'A centralized digital signage platform designed for campus-wide information delivery, featuring real-time weather, transit updates, Spotify integration, operating hours, guest Wi-Fi access, live news feeds, and dynamic content management.',
		},
		{
			title: 'Voice-Driven AI Companion Framework',
			type: 'image',
			src: ProjectTwoImage,
			description:
				'A real-time AI companion platform built in Unreal Engine 5, featuring locally hosted language models, speech recognition, voice synthesis, configurable personality systems, context-aware conversations, adaptive companion behaviors, natural player interactions, and an immersive 3D game environment.',
		},
		{
			title: 'MacEwan Smart Digital Signage Control Center',
			type: 'video',
			src: ProjectThreeVideo,
			description:
				'A web-based control center for managing the digital signage ecosystem. It allows root users to create new screens, customize component layouts, assign displays to specific monitors, and remotely deploy screen configurations across multiple locations.',
		},
	];

	return (
		<section
			id='projects'
			className='flex flex-col items-center justify-center min-h-screen px-4 sm:px-8 lg:px-16 xl:px-20 py-20'>
			<div className='flex flex-col items-center justify-center w-full'>
				<h1
					className='text-[clamp(2.5rem,7vw,4.5rem)] font-bold text-white mb-6 text-center'
					style={{
						textShadow: '0 0 5px #d89cff, 0 0 15px #d89cff, 0 0 30px #d89cff',
					}}>
					Projects
				</h1>

				<div
					className='w-[clamp(180px,45vw,384px)] h-[2px] mb-10 rounded-full'
					style={{
						background:
							'linear-gradient(to right, transparent, #d89cff, transparent)',
						boxShadow: '0 0 5px #d89cff, 0 0 15px #d89cff, 0 0 30px #d89cff',
					}}
				/>
			</div>

			<div className='w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10 xl:gap-12 place-items-center'>
				{projects.map((project, index) => (
					<div
						key={index}
						className={cardClass}>
						<div className={innerBoxClass}>
							<h2 className={titleClass}>{project.title}</h2>
						</div>

						{project.type === 'video' ?
							<video
								autoPlay
								loop
								muted
								playsInline
								src={project.src}
								className={mediaClass}
							/>
						:	<img
								src={project.src}
								alt={project.title}
								className={mediaClass}
							/>
						}

						<div className={innerBoxClass}>
							<p className={descriptionClass}>{project.description}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
