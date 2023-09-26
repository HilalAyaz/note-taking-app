import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteNote, editNote } from '../features/noteSlice';
import './NoteList.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const NoteList = () => {
  const notes = useSelector((state) => state.notes.notes);
  const dispatch = useDispatch();
  const [editedNoteId, setEditedNoteId] = useState(null);
  const [editedContent, setEditedContent] = useState('');

  const handleEditNote = (noteId, content) => {
    setEditedNoteId(noteId);
    setEditedContent(content);
  };

  const saveEditedNote = (noteId) => {
    if (editedContent.trim() !== '') {
      dispatch(editNote({ id: noteId, content: editedContent }));
      setEditedNoteId(null);
      setEditedContent('');
    }
  };

  const cancelEdit = () => {
    setEditedNoteId(null);
    setEditedContent('');
  };

  return (
    <div className="note-list my-3">
      <h2>Notes</h2>
      <ul className="list-group">
        {notes.map((note) => (
          <li key={note.id} className="list-group-item d-flex justify-content-between align-items-center">
            {editedNoteId === note.id ? (
              <>
                <input
                  type="text"
                  className="form-control"
                  value={editedContent}
                  onChange={(e) => setEditedContent(e.target.value)}
                />
                <div>
                  <button className="btn btn-success btn-sm mr-2" onClick={() => saveEditedNote(note.id)}>
                    Save
                  </button>
                  <button className="btn btn-secondary btn-sm" onClick={cancelEdit}>
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <>
                {note.content}
                <div>
                  <button className="btn btn-danger btn-sm ml-2" onClick={() => dispatch(deleteNote(note.id))}>
                    Delete
                  </button>
                  <button className="btn btn-warning btn-sm ml-2" onClick={() => handleEditNote(note.id, note.content)}>
                    Edit
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NoteList;
