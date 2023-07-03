import { Col, Container, Row } from 'reactstrap';
import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons';
import useScrollSnap from 'react-use-scroll-snap';
import { useRef } from 'react';
import Header from './components/Header';

const HomePage = () => {
	const scrollRef = useRef(null);
	useScrollSnap({ ref: scrollRef, duration: 250, delay: 50 });

	return (
		<>
			<Header />
			<Container
				style={{
					width: '100%',
					height: window.innerHeight * 4,
				}}>
				<section
					style={{ height: window.innerHeight * 4, width: '100%' }}
					ref={scrollRef}>
					<Row align='center' id='home' style={{ height: window.innerHeight }}>
						<Col>
							<h3 style={{ fontSize: 70 }}>Hello, I'm</h3>
							<h1 style={{ fontSize: 120 }}>David Ogden</h1>
							<h4 style={{ fontSize: 40 }}>Full Stack Developer</h4>
						</Col>
					</Row>
					<Row
						id='about'
						align='center'
						style={{
							backgroundColor: 'grey',
							height: window.innerHeight,
						}}>
						<h4>About Me</h4>
					</Row>
					<Row id='skills' style={{ height: window.innerHeight }}>
						<Col>
							<h4>Skills</h4>
						</Col>
					</Row>
					<Row
						id='projects'
						style={{
							backgroundColor: 'grey',
							height: window.innerHeight,
						}}>
						<Col>
							<h4>Projects</h4>
						</Col>
					</Row>
					<Row id='social' style={{ height: window.innerHeight }}>
						<Col>
							<h4>Social</h4>
							<HashLink smooth to='#top'>
								<FontAwesomeIcon
									icon={faAnglesUp}
									size='2xl'
									style={{ color: 'black' }}
								/>
							</HashLink>
						</Col>
					</Row>
				</section>
			</Container>
		</>
	);
};

export default HomePage;
