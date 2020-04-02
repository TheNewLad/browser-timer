import React from 'react';

import './App.css';
import DateTimePicker from './main/components/DateTimePicker/DateTimePicker';
import 'bulma/css/bulma.min.css';

function App() {
  return (
    <section className="section">
      <div className="columns">
        <div className="column">
          <DateTimePicker />
        </div>
        <div className="column">2</div>
      </div>
    </section>
  );
}

export default App;
