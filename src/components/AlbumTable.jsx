import React from 'react';

const AlbumTable = (props) => {
    return(
        <ol>
            {props.albums.map(album => <li key={album.id}>{album.title}</li>)}
        </ol>
    );
}

export default AlbumTable;
