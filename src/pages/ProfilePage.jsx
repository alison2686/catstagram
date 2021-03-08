import React, { useState } from 'react';

function ProfilePage() {
    const [bio, setBio] = useState('');

    const handleChange = (e) => setBio(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        setBio(e.target.value)
        setBio('');
    }

    return (
        <div className="ProfilePage">
            <h1>Profile</h1>
            <form className="BioUploader">
            <input 
            placeholder={"Add your bio here"} 
            value={bio} 
            onChange={handleChange} />
                <button 
                className="SubmitButton" 
                onClick={handleSubmit} 
                type="submit">
                    Submit
                </button>
                <h2>{bio}</h2>
        </form>
        </div>
    )}


export default ProfilePage
