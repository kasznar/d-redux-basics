import React from 'react';
import './App.css';
import {CommentsPage} from "./features/comments/CommentsPage";

export type InputEvent = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

function App() {
  return (
    <div className="App">
        <CommentsPage/>
    </div>
  );
}

export default App;
