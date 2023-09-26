import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../features/noteSlice';
import './NoteForm.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const NoteForm = () => {
  const dispatch = useDispatch();
  const [content, setContent] = useState('');

  const handleAddNote = () => {
    if (content.trim() !== '') {
      dispatch(addNote({ content })); // Pass content as payload
      setContent('');
    }
  };

  return (
    <div className="note-form my-3">
      <h2>Add a Note</h2>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter your note"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <div className="input-group-append">
          <button className="btn btn-primary" type="button" onClick={handleAddNote}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteForm;
