import React, { useState } from 'react'

const ListDisplay = ({artist, handleDelete}) => {
  return (
    <>
    <ul>
    {artist.map((item)=><li key={item.id}>{item.name}
    <button onClick={() => handleDelete(item.id)}>Delete</button>
    </li>)}
    </ul>
    </>
  )
}

export default ListDisplay