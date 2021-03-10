// Exercise 2: Set It Up
	// write a class component
	// make it a div with a class name of Likes
	// write a span and a button element inside
	// export default the component!

// Exercise 3: Prop It Up
// Likes should take in number of likes as a prop and display it.

// Exercise 4: State It
// Create a button that toggles between two states: "Liked" and "Not liked (yet)"
	 // add a constructor with initial state
	 // add a button to the rendered JSX with an onClick attribute
	 // add a method to handle the click/ change the state
	 // hook up the button text to the state
// BONUS: Create a likes counter
	 // take in a prop for the number of likes
	 // increase or decrease the likes based on whether button click is like/ unlike
	 // hint: take the total likes as a prop, and convert it to state

import React, { useState } from 'react';

function Likes(props) {
	const {totalLikes} = props;
	const [likeCount, setLikeCount] = useState(totalLikes)
	const [isLiked, setIsLiked] = useState(false)
	

	const handleLikeButton = () => {
		if (isLiked) {
			setLikeCount(likeCount - 1)
		} else {
			setLikeCount(likeCount + 1)
		}

		setIsLiked(!isLiked)
	
		
	}
	return (
		<div className="Likes">
			<span>{likeCount} likes</span>
			<button onClick={handleLikeButton}>{ isLiked ? 'Liked' : 'Not Liked (yet)' }</button>
		</div>
	)
};

export default Likes;
