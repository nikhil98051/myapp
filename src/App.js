import React, { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Output from './components/Output';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');

  const handleFormSubmit = (value) => {
    setOutputValue(value);
  };

  return (
    <div className="App">
      <Header />
      <Form onFormSubmit={handleFormSubmit} />
      <Output result={outputValue} />
    </div>
  );
};

export default App;
