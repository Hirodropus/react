import React, { useState, useEffect, useCallback } from 'react';
import NotesList from './components/NotesList';
import NotesForm from './components/NotesForm';
import './App.css';

const API_URL = 'http://localhost:7070/notes';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // GET: Загрузка списка заметок
  const fetchNotes = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error('Ошибка при загрузке заметок');
      const data = await response.json();
      setNotes(data);
    } catch (err) {
      setError(err.message || 'Неизвестная ошибка. Сервер запущен?');
    } finally {
      setIsLoading(false);
    }
  }, []);


  useEffect(() => {
    fetchNotes();
  }, [fetchNotes]);

  // POST: Добавление заметки
  const addNote = async (content) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: 0, content }),
      });

      if (!response.ok) throw new Error('Ошибка при добавлении заметки');

      await fetchNotes();
    } catch (err) {
      setError(err.message || 'Неизвестная ошибка');
      setIsLoading(false);
    }
  };

  // DELETE: Удаление заметки
  const deleteNote = async (id) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('Ошибка при удалении заметки');

      await fetchNotes();
    } catch (err) {
      setError(err.message || 'Неизвестная ошибка');
      setIsLoading(false);
    }
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1>Notes</h1>
        <button
          className="refresh-btn"
          onClick={fetchNotes}
          disabled={isLoading}
          title="Обновить список"
        >
          ↻
        </button>
      </header>

      {error && <div className="error-message">{error}</div>}

      {isLoading && notes.length === 0 ? (
        <div className="loading">Загрузка...</div>
      ) : (
        <NotesList notes={notes} onDelete={deleteNote} />
      )}

      <NotesForm onAdd={addNote} isLoading={isLoading} />
    </div>
  );
};

export default App;