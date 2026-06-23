import { useState } from 'react';
export default function Contact() {
	const [contactStatus, setContactStatus] = useState('');
	async function handleContactSubmit(e) {
		e.preventDefault();

		const form = e.target;
		const formData = new FormData(form);

		setContactStatus('Sending...');

		try {
			const response = await fetch(
				'https://formsubmit.co/ajax/alecortiz03@gmail.com',
				{
					method: 'POST',
					body: formData,
				},
			);

			if (!response.ok) {
				throw new Error('Message failed');
			}

			setContactStatus('Message sent successfully!');
			form.reset();

			document
				.getElementById('contact')
				?.scrollIntoView({ behavior: 'smooth' });
		} catch (error) {
			setContactStatus('Something went wrong. Please try again.');
		}
	}
	return (
		<>
			<section
				id='contact'
				className='flex flex-col items-center justify-center min-h-screen px-20 py-20'>
				<div className='flex flex-col items-center justify-center w-full'>
					<h1
						className='text-[clamp(2.5rem,7vw,4.5rem)] font-bold text-white mb-6 text-center'
						style={{
							textShadow: '0 0 5px #d89cff, 0 0 15px #d89cff, 0 0 30px #d89cff',
						}}>
						Contact
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

				<form
					onSubmit={handleContactSubmit}
					className='flex flex-col gap-6 w-[70vw] h-[60vh] max-w-7xl bg-[#6d3d64]/20 backdrop-blur-xl rounded-3xl border border-[#d89cff] shadow-[0_0_5px_#d89cff,0_0_15px_#d89cff,0_0_30px_#d89cff] p-10'>
					<input
						type='hidden'
						name='_captcha'
						value='false'
					/>
					<input
						type='hidden'
						name='_subject'
						value='Portfolio Contact Form'
					/>
					<input
						type='hidden'
						name='_template'
						value='table'
					/>

					<input
						name='name'
						type='text'
						placeholder='Your Name'
						required
						className='bg-white/10 text-white placeholder-white/60 border border-[#d89cff] rounded-2xl px-6 py-4 outline-none focus:shadow-[0_0_10px_#d89cff]'
					/>

					<input
						name='email'
						type='email'
						placeholder='Your Email'
						required
						className='bg-white/10 text-white placeholder-white/60 border border-[#d89cff] rounded-2xl px-6 py-4 outline-none focus:shadow-[0_0_10px_#d89cff]'
					/>

					<input
						name='subject'
						type='text'
						placeholder='Subject'
						required
						className='bg-white/10 text-white placeholder-white/60 border border-[#d89cff] rounded-2xl px-6 py-4 outline-none focus:shadow-[0_0_10px_#d89cff]'
					/>

					<textarea
						name='message'
						placeholder='Your Message'
						required
						className='flex-1 bg-white/10 text-white placeholder-white/60 border border-[#d89cff] rounded-2xl px-6 py-4 outline-none resize-none focus:shadow-[0_0_10px_#d89cff]'
					/>

					<button
						type='submit'
						className='mt-auto self-center px-10 py-3 rounded-full text-white font-bold bg-[#6d3d64]/30 border border-[#d89cff] shadow-[0_0_5px_#d89cff,0_0_15px_#d89cff,0_0_30px_#d89cff] hover:bg-white/20 transition-all duration-200'>
						Send Message
					</button>

					{contactStatus && (
						<p className='text-center text-white [text-shadow:0_0_10px_#d89cff]'>
							{contactStatus}
						</p>
					)}
				</form>
			</section>
		</>
	);
}
