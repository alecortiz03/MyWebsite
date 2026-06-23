import Home from '../Pages/Home';
import Projects from '../Pages/Projects';
import Photography from '../Pages/Photography';
import Contact from '../Pages/Contact';
export default function Main() {
	return (
		<>
			<div className='flex flex-col'>
				<Home />
				<Projects />

				<Photography />
				<Contact />
			</div>
		</>
	);
}
