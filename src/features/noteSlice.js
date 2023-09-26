import { createSlice } from '@reduxjs/toolkit';

let nextNoteId = 1; 

const initialState = {
  notes: [],
};

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, action) => {
      const newNote = {
        id: nextNoteId++, 
        content: action.payload.content,
      };
      state.notes.push(newNote);
    },
    editNote: (state, action) => {
      const { id, content } = action.payload;
      const note = state.notes.find(note => note.id === id);
      if (note) {
        note.content = content;
      }
    },
    deleteNote: (state, action) => {
      const id = action.payload;
      state.notes = state.notes.filter(note => note.id !== id);
    },  
     
  },
});

export const { addNote, editNote, deleteNote } = notesSlice.actions;

export default notesSlice.reducer;
