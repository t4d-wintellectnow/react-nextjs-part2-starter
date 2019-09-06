import React from 'react';

import { MenuBar } from '../components/MenuBar';

const Home = () => {

  return (
    <>
      <h1>Home</h1>
      <MenuBar />
      <p>
        Home
        <img src="/static/bumblebee.jpg" alt="Bumblebee on a Flower" />
      </p>
    </>
  );

};

export default Home;