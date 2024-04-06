import React from 'react'

const DeleteMovies = ({deleteId, deleteHandler }) => {
  return (
    <div>
       <button onClick={()=>deleteHandler(deleteId)}>❎</button>
    </div>
  )
}

export default DeleteMovies
