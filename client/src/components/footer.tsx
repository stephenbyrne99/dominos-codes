import React from 'react';


//libraries
import styled from 'styled-components';


//images

//styles
import '.././App.css';

const Img = styled.img`
  height:50px;
`;


const Footer: React.FC = () => {
  return (
    <div className="Footer">
          <p>Yours truly -<a href="https://www.linkedin.com/in/stephen-byrne-429267167/" target="_blank" rel="noopener noreferrer">Stephen Byrne</a> xx</p>
          <div className="row">
            <a href="https://www.instagram.com/stephenbyrne99/" target="_blank" rel="noopener noreferrer"><Img alt = "instagram" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fe%2Fe7%2FInstagram_logo_2016.svg%2F1200px-Instagram_logo_2016.svg.png&f=1&nofb=1"/></a>
            <a href="https://www.linkedin.com/in/stephen-byrne-429267167/" target="_blank" rel="noopener noreferrer"><Img alt = "linkedin" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fc%2Fc9%2FLinkedin.svg%2F1200px-Linkedin.svg.png&f=1&nofb=1"/></a>
          </div>
    </div>
  );
}

export default Footer;
