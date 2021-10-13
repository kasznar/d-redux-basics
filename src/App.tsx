import React, {useState} from 'react';
import './App.css';
import {useAppDispatch} from "./store/hooks";
import {InputEvent} from "./shared/types";
import {CommentList} from "./features/comments/CommentList";

function App() {
  const [newComment, setNewComment] = useState('');
  const dispatch = useAppDispatch();

  const handleChange = (e: InputEvent) => {
    setNewComment(e.target.value)
  }
  const handleAdd = () => {
    dispatch({
      type: 'comments/commentAdded',
      payload: newComment
    })
  }

  return (
    <div className="App">
      <div className="NewComment">
        <h2>Write comment</h2>
        <input value={newComment} onChange={handleChange}/>
        <button onClick={handleAdd}>Add Comment</button>
      </div>

      <CommentList/>
    </div>
  );
}

export default App;
