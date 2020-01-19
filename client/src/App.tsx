import React, {useEffect, useState} from 'react';

//components
import Footer from './components/footer';

//libraries
import styled from 'styled-components';


//images
import logo from './logo.png';

//styles
import './App.css';

const H1 = styled.h1`
  
`;

const Code = styled.h2`
  font-style: italic;
`;

const App: React.FC = () => {

  const [code, setCode] = useState('N/A');

  useEffect(()=>{
    fetch("http://localhost:9000/codesAPI")
        .then(res => res.text())
        .then(res => setCode(res))
        .catch(err => err);  
  })

  return (
    <div className="App">
      <header className="App-header">
        <H1>Dominos Code Ireland</H1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Latest code: </p>
        <Code>{code}</Code>
        <Footer />
      </header>
    </div>
  );
}

export default App;
