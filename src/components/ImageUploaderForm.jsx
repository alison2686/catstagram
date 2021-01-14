// Exercise 2: Set It Up
	// write a class component
	// make it a form element with class name ImageUploaderForm
	// write one input element and button element inside
	// export default the component!

// Exercise 5: Get InFormation
// Rewrite this component to accept user input
// The goal: When the user inputs a url, the component should log it to the console
    // You might want to read a little bit more about forms here: https://reactjs.org/docs/forms.html
    // but essentially, there are two parts to this:
    // 1) the input reflecting it's current value when the input changes
    // 2) and submitting the form.
    // For 1), you will need to create an handleChange function and pass it as a prop to the <input> element.
    // handleChange will set the state with the value of the target of the event passed to it.
    // For 2) you will need to create a handleSubmit function and pass it as an onClick prop to the button.
    // handleSubmit will be the one submitting - ie console.log the current url in the state for now.
    // and on handleSubmit, you will want to reset the state.

// Exercise 6: Provide Context BONUS
    // Goal: make the ImageUploaderForm actually upload an image to the feed!
    // When a user inputs a full image url, it should update the
    // feed to include the image as a FeedItem!  How can we do this? Using context!
    // You will need to create an addPhoto function in App.jsx (see instructions there).
    // In this component, you will need to pull out addPhoto from context and call it on handleSubmit and pass in the url.

import React from 'react';

function ImageUploaderForm() {
    return (
        <form className="ImageUploaderForm">
            <input>
                <button></button>
            </input>
        </form>
    )
};

export default ImageUploaderForm;