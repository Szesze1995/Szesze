import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@szesze/ui';
import Cells from './pages/Cells';
import Swarms from './pages/Swarms';
import Calendar from './pages/Calendar';

export default function App() {
  return (
    <ThemeProvider>
      <nav>
        <ul>
          <li><Link to="/">Sejtek/Fészkek</Link></li>
          <li><Link to="/events">Rajzás/Vonulás</Link></li>
          <li><Link to="/calendar">Naptár</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Cells />} />
        <Route path="/events" element={<Swarms />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
    </ThemeProvider>
  );
}
