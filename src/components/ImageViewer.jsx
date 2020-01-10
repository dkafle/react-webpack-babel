import React from 'react';

const ImageViewer = (props) => (
    <div>
        <div>
            <button
                onClick={() =>props.getRemoteData()}
                disabled={props.isFetching}
            >Get Next</button>
        </div>
        <h3>{props.giffy.data ? props.giffy.data.title : 'No title'}</h3>
        <img src={props.giffy.data ? props.giffy.data.image_url : ''} />
    </div>
);

export default ImageViewer;
