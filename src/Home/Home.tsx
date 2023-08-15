import React from 'react';
import Navbar from '../Shared Components/NavBar';

function Home() {
  return (
    <div>
      <Navbar
        links={[
          { text: 'Favourites', url: '/about' },
          { text: 'Filter by Task',url:'#' },
          { text: 'My Services', url: '/services' },
          { text: 'Post Details', url: '/contact' },
        ]}
      />
    </div>
  );
}

export default Home;
