import React from 'react';
import NoteCard from './NoteCard';

const NotesList = ({ notes, onDelete }) => {
  if (notes.length === 0) {
    return <p>Заметок пока нет...</p>;
  }

  return (
    <div className="notes-list">
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default NotesList;