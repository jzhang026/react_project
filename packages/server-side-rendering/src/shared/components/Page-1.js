import React from 'react';
import css from './Page-1.css';

const Page = () => {
	console.log('called');
	return <div className={css.wrapper}>Page 1</div>;
};

export default Page;
