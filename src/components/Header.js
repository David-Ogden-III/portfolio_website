import { Nav, NavItem } from 'reactstrap';
import { NavHashLink } from 'react-router-hash-link';

const Header = () => {
	return (
		<Nav
			horizontal='center'
			style={{
				backgroundColor: 'white',
				position: 'sticky',
				top: 0,
			}}>
			<NavItem>
				<NavHashLink
					smooth
					to='#home'
					style={{
						color: 'black',
						textDecoration: 'none',
						marginInline: 8,
						fontSize: 24,
					}}>
					Home
				</NavHashLink>
			</NavItem>
			<NavItem>
				<NavHashLink
					smooth
					to='#about'
					style={{
						color: 'black',
						textDecoration: 'none',
						marginInline: 8,
						fontSize: 24,
					}}>
					About Me
				</NavHashLink>
			</NavItem>
			<NavItem>
				<NavHashLink
					smooth
					to='#skills'
					style={{
						color: 'black',
						textDecoration: 'none',
						marginInline: 8,
						fontSize: 24,
					}}>
					Skills
				</NavHashLink>
			</NavItem>
			<NavItem>
				<NavHashLink
					smooth
					to='#projects'
					style={{
						color: 'black',
						textDecoration: 'none',
						marginInline: 8,
						fontSize: 24,
					}}>
					Projects
				</NavHashLink>
			</NavItem>
			<NavItem>
				<NavHashLink
					smooth
					to='#social'
					style={{
						color: 'black',
						textDecoration: 'none',
						marginInline: 8,
						fontSize: 24,
					}}>
					Social
				</NavHashLink>
			</NavItem>
		</Nav>
	);
};
export default Header;
