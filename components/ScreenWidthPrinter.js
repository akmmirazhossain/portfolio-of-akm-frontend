import { useEffect, useState } from 'react';

const centerBottomStyle = {
	position: 'fixed',
	left: '50%',
	transform: 'translateX(-50%)',
	bottom: 0,
	backgroundColor: 'white',
	fontSize: '11px',
	padding: '0 5px 0 5px',
};

const ScreenWidthPrinter = () => {
	const [screenSize, setScreenSize] = useState('');

	useEffect(() => {
		const handleResize = () => {
			const width = window.innerWidth;
			if (width < 640) {
				setScreenSize('xs');
			} else if (width < 768) {
				setScreenSize('sm');
			} else if (width < 1024) {
				setScreenSize('md');
			} else if (width < 1280) {
				setScreenSize('lg');
			} else {
				setScreenSize('xl');
			}
		};

		handleResize(); // Initialize state on component mount
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<div style={centerBottomStyle}>
			{screenSize === 'xs' && <p>xs: 640px Below</p>}
			{screenSize === 'sm' && <p>sm: 640px - 768px</p>}
			{screenSize === 'md' && <p>md: 768px - 1024px</p>}
			{screenSize === 'lg' && <p>lg: 1024px - 1280px</p>}
			{screenSize === 'xl' && <p>xl: 1280px Above</p>}
		</div>
	);
};

export default ScreenWidthPrinter;
