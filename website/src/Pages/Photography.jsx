export default function Photography() {
	const photos = Object.values(
		import.meta.glob('../Assets/Images/Photography/*.{jpg,jpeg,png,webp}', {
			eager: true,
			query: '?url',
			import: 'default',
		}),
	);

	return (
		<>
			<section
				id='photography'
				className='flex flex-col items-center min-h-screen px-20 py-20 scroll-mt-20'>
				<div className='flex flex-col items-center justify-center w-full'>
					<h1
						className='text-[clamp(2.5rem,7vw,4.5rem)]  font-bold text-white mb-6'
						style={{
							textShadow: '0 0 5px #d89cff, 0 0 15px #d89cff, 0 0 30px #d89cff',
						}}>
						Photography
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

				<div className='columns-1 md:columns-2 xl:columns-3 gap-8 space-y-8 w-full mb-8 overflow-hidden rounded-3xl'>
					{' '}
					{photos.map((photo, index) => (
						<div
							key={index}
							className='overflow-hidden rounded-3xl border border-[#d89cff] shadow-[0_0_5px_#d89cff,0_0_15px_#d89cff,0_0_30px_#d89cff] mb-8'>
							<img
								src={photo}
								alt={`Photography ${index + 1}`}
								className='w-full h-auto transition-transform duration-300 hover:scale-105'
							/>
						</div>
					))}
				</div>
			</section>
		</>
	);
}
