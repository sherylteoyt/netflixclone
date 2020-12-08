import React from 'react';
import { FaqsContainer } from './containers/faqs';
import { FooterContainer } from './containers/footer';
import { JumbotronContainer } from './containers/jumbotron';

// Jumbotron.Pane - to split content into panels. Direction will tell us when the info will be flipped (right panel to left panel)
export default function App() {
  return (
    <>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
