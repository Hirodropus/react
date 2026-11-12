import React from 'react';
import { ServiceForm } from './components/ServiceForm';
import { ServiceList } from './components/ServiceList';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <h1>Управление услугами</h1>
      <ServiceForm />
      <ServiceList />
    </div>
  );
};

export default App;