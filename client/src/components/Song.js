import React from 'react';

const Song = ({ id, rank, name, updateSongs, deleteSongs }) => (
  <div className="col s12">
    <div className="col m8">
      <div className="center">
        {name}
      </div>
    </div>
    <div className="col m2">
      <input
        id={`song-${id}`}
        type="checkbox"
        // defaultChecked={complete}
        onClick={() => updateSongs(id)}
      />
      <label htmlFor={`song-${id}`}>Complete?</label>
    </div>
    <div style={ styles.pointer } className="col m1" onClick={() => deleteSongs(id)}>
      X
    </div>
  </div>
)

const styles = {
  complete: {
    textDecoration: 'line-through',
    color: 'grey'
  },
  pointer: { cursor: 'pointer' }
}

export default Song;
