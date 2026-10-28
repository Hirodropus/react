import React from 'react';

const NoteCard = ({ note, onDelete }) => {
  return (
    <div className="note-card">
      <button
        className="delete-btn"
        onClick={() => onDelete(note.id)}
        aria-label="Удалить заметку"
      >
        ✕
      </button>
      <p className="note-content">{note.content}</p>
    </div>
  );
};

export default NoteCard;