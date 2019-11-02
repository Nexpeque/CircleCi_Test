import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

var render = () => {
  return (
    <div className="App">
      <h1>Cosas</h1>
    </div>
  );
}
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(render(), div);
});
