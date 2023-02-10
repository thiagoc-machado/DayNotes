import React, { useState, useEffect } from 'react';

import api from './services/api';

import './app.css';
import './global.css';
import './sidebar.css';
import './main.css';
import Notes from './components/Notes';
import RadioButton from './components/RadioButton';

function App() {
  const [selectedValue, setSelectedValue] = useState('all');
  const [title, setTitle] = useState('');
  const [notes, setNotes] = useState('');
  const [allNotes, setAllNotes] = useState([]);

  useEffect(() => {
    getAllNotes();
  }, []);

  async function getAllNotes() {
    const response = await api.get('/annotations');
    setAllNotes(response.data.reverse());
  }

  async function handleDelete(id) {
    const deletedNote = await api.delete(`/annotations/${id}`);

    if (deletedNote) {
      setAllNotes(allNotes.filter((note) => note._id !== id));
    }
  }

  async function loadNotes(option) {
    const params = { priority: option };
    const response = await api.get(`/priorities`, { params });

    if (response) {
      setAllNotes(response.data);
    }
  }

  function handleChange(e) {
    setSelectedValue(e.value);
    if (e.checked && e.value !== 'all') {
      loadNotes(e.value);
    } else {
      getAllNotes();
    }
  }

  async function handleChangePriority(id) {
    const note = await api.post(`/priorities/${id}`);

    if (note && selectedValue !== 'all') {
      loadNotes(selectedValue);
    } else if (note) {
      getAllNotes();
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await api.post('/annotations', {
      title,
      notes,
      priority: false,
    });

    setTitle('');
    setNotes('');

    if (selectedValue !== 'all') {
      getAllNotes();
    } else {
      setAllNotes([...allNotes, response.data]);
    }
    setSelectedValue('all');
  }

  useEffect(() => {
    function enableSubmitButton() {
      let btn = document.getElementById('btn_submit');
      btn.style.background = '#FFD3CA';
      if (title && notes) {
        btn.style.background = '#EB8F7A';
      }
    }
    enableSubmitButton();
  }, [title, notes]);

  return (
    <div className='App' id='app'>
      <aside>
        <strong>DayNotes</strong>
        <form onSubmit={handleSubmit}>
          <div className='input-block'>
            <label htmlFor='title'>Note title</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              maxLength='30'
            />
          </div>
          <div className='input-block'>
            <label htmlFor='note'>Notes</label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              required
            />
          </div>
          <button type='submit' id='btn_submit'>
            Save
          </button>
        </form>
        <RadioButton
          selectedValue={selectedValue}
          handleChange={handleChange}
        />
      </aside>
      <main>
        <ul>
          {allNotes.map((data) => (
            <Notes
              data={data}
              key={data.id}
              handleDelete={handleDelete}
              handleChangePriority={handleChangePriority}
            />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
