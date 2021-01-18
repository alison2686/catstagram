// Exercise 2: Set It Up
	// write a class component
	// make it a div with a class name of HomePage
	// import ImageUploaderForm and FeedList
	// include them inside of Homepage
	// export default the Homepage component!

// Exercise 3: Prop It Up
// Need to extract photos from data and then pass it into FeedList

// Exercise 6: Provide Context
    // Since you are now taking the data out of the context directly, delete the import data from data.json statement
    // and don't pass it in as props to FeedList

import React from 'react';
import ImageUploaderForm from '../components/ImageUploaderForm.jsx';
import FeedList from '../components/FeedList.jsx';


function HomePage(props) {
	const {photos} = props;
	return (
		<div className="HomePage">
			<ImageUploaderForm />
			<FeedList photos={photos} />
		</div>
	);
}

export default HomePage;