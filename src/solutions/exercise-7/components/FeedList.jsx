import React, {useContext} from 'react';
import FeedItem from './FeedItem.jsx';
import {PhotosContext} from '../App.jsx';

function FeedList() {
    const {photos} = useContext(PhotosContext)
    return (
        <div className="FeedList">
            {
                photos.map((photos, i) =>
                    <FeedItem photo={photos} key={i} />
                )
            }
        </div>
    );
};

export default FeedList;
