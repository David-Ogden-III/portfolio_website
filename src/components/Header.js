import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Header = () => {
	return (
		<div>
			<Navbar color='secondary' sticky='top' dark>
				<NavbarBrand>David Ogden III</NavbarBrand>
				<Nav>
					<NavItem>
						<NavLink style={{ color: 'white' }}>About Me</NavLink>
					</NavItem>
					<NavItem>
						<NavLink style={{ color: 'white' }}>Skills</NavLink>
					</NavItem>
					<NavItem>
						<NavLink style={{ color: 'white' }}>Education</NavLink>
					</NavItem>
					<NavItem>
						<NavLink style={{ color: 'white' }}>Projects</NavLink>
					</NavItem>
					<NavItem>
						<NavLink style={{ color: 'white' }}>Contact</NavLink>
					</NavItem>
				</Nav>
				<Nav>
					<NavItem>
						<NavLink
							style={{ color: 'white' }}
							href='https://www.linkedin.com/in/david-o-5a601224a/'>
							<FaLinkedin />
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink
							style={{ color: 'white' }}
							href='https://github.com/David-Ogden-III'>
							<FaGithub />
						</NavLink>
					</NavItem>
				</Nav>
			</Navbar>
		</div>
	);
};
export default Header;
