import React from 'react';

import './app.css';
import './global.css';
import './sidebar.css';
import './main.css';
import Notes from './components/Notes';

function App() {
  return (
    <div className='App' id='app'>
      <aside>
        <strong>DayNotes</strong>
        <form>
          <div className='input-block'>
            <label htmlFor='title'>Note title</label>
            <input></input>
          </div>
          <div className='input-block'>
            <label htmlFor='note'>Notes</label>
            <textarea></textarea>
          </div>
          <button type='submit'>Save</button>
        </form>
      </aside>
      <main>
        <ul>
          <Notes/>
        </ul>
      </main>
    </div>
  );
}

export default App;
