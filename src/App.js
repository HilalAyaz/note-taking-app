import React from 'react';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './App.css';

function App() {
  return (
    <div className="app container-fluid d-flex justify-content-center align-items-center vh-100">
      <div className="app-container border rounded p-4 shadow">
        <h1 className="text-center mb-4">Note Taking App</h1>
        <div className="row">
          <div className="col-md-12">
            <NoteForm />
          </div>
          <div className="col-md-12">
            <NoteList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
