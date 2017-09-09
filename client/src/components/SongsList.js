import React from 'react';
import Songs from './Song';

const SongsList = ({ songs, updateSong, deleteSong }) => (
  <div className="row">
    { songs.map( todo =>
        <Songs
          key={songs.id}
          {...songs}
          updateSong={updateSong}
          deleteSong={deleteSong}
        />
      )
    }
  </div>
)

export default SongsList;
