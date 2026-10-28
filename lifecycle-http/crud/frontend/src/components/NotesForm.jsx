import React, { useState } from 'react';

const NotesForm = ({ onAdd, isLoading }) => {
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content.trim()) return;

    onAdd(content.trim());
    setContent('');
  };

  return (
    <div className="notes-form-container">
      <h3>New Note</h3>
      <form onSubmit={handleSubmit} className="notes-form">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Введите текст заметки..."
          disabled={isLoading}
        />
        <button type="submit" className="submit-btn" disabled={isLoading || !content.trim()}>
          ➤
        </button>
      </form>
    </div>
  );
};

export default NotesForm;