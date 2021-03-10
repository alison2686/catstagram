// Exercise 2: Set It Up
	// write a class component
	// make it a div with a class name of App
	// import Header and Homepage
	// include them inside of App
	// export the App component!

// Exercise 6: Provide Context
    // create PhotosContext outside of the component
    // Wrap the entirety of the contents of the App component with the PhotosContext provider
    // To the PhotosContext provider, pass in a prop of value that is equal to an object with key photos and value of the photos data

// Exercise 6: Provide Context BONUS
    // Create an addPhoto function here to pass into the context provider to be used in ImageUploaderForm, that accepts the new photo url as a param
    // You can follow along with this tutorial: https://mindsers.blog/en/updating-react-context-from-consumer/ for how to do that
    // You will need to create an entire newPhoto object with the url that gets added to the photos array
    // BUT!  There is an issue that the above tutorial does not address, which is that when you update state, you
    // CANNOT mutate the photos state array directly by using something like photos.push
    // You can read more here to give you some ideas about how to do it: https://blog.logrocket.com/a-guide-to-usestate-in-react-ecb9952e406c/#usinganobjectasastatevariablewithusestatehook
    // Hint: Use Concat
    // EXTRA EXTRA BONUS: Can you figure out how to add it to the beginning of the array instead of the end?

// Exercise 7: API It
    // change the PhotosContext from accepting the data.photos to an empty array, which will be the default data
    // use the useEffect hook from React to fetch the data
    // the url to fetch data from is: https://api.jsonbin.io/b/5f95dcdbbd69750f00c37370
    // on successful fetch, then convert the response from a response object to a json object
    // once the data is successfully fetched and converted,set the photos to the state
    // don't forget to pass in an empty array as a second argument to useEffect so that it only runs once per component mount

// Exercise 8: Routing
// Allow your user to route to different pages!
	// need to import BrowserRouter and Router from react-router-dom
	// Create basic class components on AboutPage and Profile Page, export them
	// import them in this file
	// set up BrowserRouter
	// set up Route to with paths to each page (hint: HomePage should "/") and with the appropriate component


import React, { createContext, useState, useEffect } from 'react'
import Header from './components/Header/Header'
import HomePage from './pages/HomePage.jsx'
import { BrowserRouter, Route } from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import ProfilePage from './pages/ProfilePage'

export const PhotosContext = createContext()

function App() {
    const [photos, setPhotos] = useState([])
    const addPhoto = (url) => {
        setPhotos((prevState) => {
            const newPhoto = {
                url: url,
                likes: 0
            }
            return prevState.concat(newPhoto)

        })
    }

    useEffect(() => {
        fetch('https://api.jsonbin.io/b/600f8e05bca934583e41c665')
            .then(response => response.json())
            .then((data) => {
                setPhotos(data.photos)
            })
    }, [])

    return (
        <BrowserRouter>
            <PhotosContext.Provider value={{photos, addPhoto}} >
                <div>
                    <Header />
                    <Route exact path="/" component={HomePage} />
                    <Route path="/about" component={AboutPage} />
                    <Route path="/profile" component={ProfilePage} />
                </div>
            </PhotosContext.Provider>
        </BrowserRouter>
        
    );
}

export default App;