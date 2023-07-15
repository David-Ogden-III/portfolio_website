import {
	faHouse,
	faBriefcase,
	faUser,
	faEnvelope,
	faScrewdriverWrench,
} from '@fortawesome/free-solid-svg-icons';
import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Tooltip } from 'reactstrap';

const Header = () => {
	const [homeOpen, setHomeOpen] = useState(false);
	const [aboutOpen, setAboutOpen] = useState(false);
	const [skillsOpen, setSkillsOpen] = useState(false);
	const [projectsOpen, setProjectsOpen] = useState(false);
	const [socialOpen, setSocialOpen] = useState(false);

	return (
		<div className='hidden sm:flex w-full sticky top-0 flex items-center justify-center px-8 sm:px-8 lg:px-20 z-40'>
			<ul className='flex justify-between items-center bg-white rounded-b-lg'>
				<li
					className='px-3 sm:px-4 md:px-5 rounded-lg py-3.5 items-center'
					style={{ opacity: 1, transform: 'none' }}
					id='homeIcon'>
					<HashLink smooth to='#home'>
						<span className='p-3 transition-all rounded-md'>
							<FontAwesomeIcon
								icon={faHouse}
								className='fa-lg fa-fw hover:scale-110 fas text-black'
							/>
						</span>
					</HashLink>
				</li>
				<Tooltip
					placement='bottom'
					isOpen={homeOpen}
					toggle={() => setHomeOpen(!homeOpen)}
					target='homeIcon'>
					Home
				</Tooltip>
				<li
					className='px-3 sm:px-4 md:px-5 rounded-lg py-3.5'
					style={{ opacity: 1, transform: 'none' }}
					id='aboutIcon'>
					<HashLink smooth to='#about'>
						<span className='text-black p-3 transition-all rounded-md'>
							<FontAwesomeIcon
								icon={faUser}
								className='fa-lg fa-fw hover:scale-110 fas text-black'
							/>
						</span>
					</HashLink>
				</li>
				<Tooltip
					placement='bottom'
					isOpen={aboutOpen}
					toggle={() => setAboutOpen(!aboutOpen)}
					target='aboutIcon'>
					About Me
				</Tooltip>
				<li
					className='px-3 sm:px-4 md:px-5 rounded-lg py-3.5'
					style={{ opacity: 1, transform: 'none' }}
					id='skillsIcon'>
					<HashLink smooth to='#skills'>
						<span className='text-black p-3 transition-all rounded-md'>
							<FontAwesomeIcon
								icon={faScrewdriverWrench}
								className='fa-lg fa-fw hover:scale-110 fas text-black'
							/>
						</span>
					</HashLink>
				</li>
				<Tooltip
					placement='bottom'
					isOpen={skillsOpen}
					toggle={() => setSkillsOpen(!skillsOpen)}
					target='skillsIcon'>
					Skills
				</Tooltip>
				<li
					className='px-3 sm:px-4 md:px-5 rounded-lg py-3.5'
					style={{ opacity: 1, transform: 'none' }}
					id='projectsIcon'>
					<HashLink smooth to='#projects'>
						<span className='text-black p-3 transition-all rounded-md'>
							<FontAwesomeIcon
								icon={faBriefcase}
								className='fa-lg fa-fw hover:scale-110 fas text-black'
							/>
						</span>
					</HashLink>
				</li>
				<Tooltip
					placement='bottom'
					isOpen={projectsOpen}
					toggle={() => setProjectsOpen(!projectsOpen)}
					target='projectsIcon'>
					Projects
				</Tooltip>
				<li
					className='px-3 sm:px-4 md:px-5 rounded-lg py-3.5'
					style={{ opacity: 1, transform: 'none' }}
					id='socialIcon'>
					<HashLink smooth to='#social'>
						<span className='text-black p-3 transition-all rounded-md'>
							<FontAwesomeIcon
								icon={faEnvelope}
								className='fa-lg fa-fw hover:scale-110 fas text-black'
							/>
						</span>
					</HashLink>
				</li>
				<Tooltip
					placement='bottom'
					isOpen={socialOpen}
					toggle={() => setSocialOpen(!socialOpen)}
					target='socialIcon'>
					Contact
				</Tooltip>
			</ul>
		</div>
	);
};
export default Header;
