import { Stars } from './components/Stars'
import './App.css'
import { Dropdown } from './components/DropDown'
import { useState } from 'react';

function App() {
  const [selectedOption, setSelectedOption] = useState(0);

  const handleChange = (event: any) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <Stars count={(selectedOption)} />
      <Dropdown selectedOption={selectedOption} handleChange={handleChange}/>
    </>
  )
}

export default App
