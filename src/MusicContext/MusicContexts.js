import React, { createContext } from 'react';
import app from '../firebase.config';
import { getAuth } from 'firebase/auth'

export const RexroxContexts = createContext();
const auth = getAuth(app)
const MusicContexts = ({ children }) => {

  const musicInfo = {
    name: 'shafin'
  }

  return (
    <RexroxContexts.Provider value={musicInfo}>
      {children}
    </RexroxContexts.Provider>
  );
};

export default MusicContexts;