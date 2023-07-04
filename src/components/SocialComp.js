import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons';

const SocialComp = () => {
	return (
		<div
			id='social'
			style={{ height: window.innerHeight }}
			className='snap-center'>
			<div>
				<h4>Social</h4>
			</div>

			<HashLink smooth to='#top'>
				<FontAwesomeIcon
					icon={faAnglesUp}
					size='2xl'
					style={{ color: 'black' }}
				/>
			</HashLink>
		</div>
	);
};
export default SocialComp;
