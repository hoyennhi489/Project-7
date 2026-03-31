import { useState } from 'react';

function App() {
  const [notes, setNotes] = useState([
    { title: 'Buy coffee', body: 'Remember to get 2 packs of milk coffee' },
    { title: 'Call mom', body: 'Ask about weekend dinner plans' }
  ]);
  const [noteTitle, setNoteTitle] = useState('');
  const [noteBody, setNoteBody] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const visibleNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase())
      || note.body.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddNote = () => {
    if (!noteTitle || !noteBody) {
      return;
    }

    const newNote = {
      title: noteTitle,
      body: noteBody
    };

    setNotes([newNote, ...notes]);
    setNoteTitle('');
    setNoteBody('');
  };

  const handleDelete = (title) => {
    setNotes(notes.filter((note) => note.title !== title));
  };

  return (
    <main className="app-shell">
      <header className="top-bar">
        <h1>Simple Notes App</h1>
        <input
          type="text"
          className="search-input"
          placeholder="Search notes..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </header>

      <section className="note-form">
        <div className="field-group">
          <label>Title</label>
          <input
            value={noteTitle}
            onChange={(event) => setNoteTitle(event.target.value)}
            placeholder="Enter title"
          />
        </div>

        <div className="field-group">
          <label>Content</label>
          <textarea
            value={noteBody}
            onChange={(event) => setNoteBody(event.target.value)}
            placeholder="Write something..."
          />
        </div>

        <button className="primary-button" onClick={handleAddNote}>
          Add Note
        </button>
      </section>

      <section className="note-list">
        {visibleNotes.length === 0 ? (
          <div className="empty-state">No matching notes found.</div>
        ) : (
          visibleNotes.map((note) => (
            <article key={note.title} className="note-card">
              <h2>{note.title}</h2>
              <p>{note.body}</p>
              <button className="delete-button" onClick={() => handleDelete(note.title)}>
                Delete
              </button>
            </article>
          ))
        )}
      </section>
    </main>
  );
}

export default App;
