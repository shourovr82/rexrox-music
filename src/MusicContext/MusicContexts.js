import React, { createContext, useState } from 'react';
import app from '../firebase.config';
import { getAuth } from 'firebase/auth'

export const RexroxContexts = createContext();
const auth = getAuth(app)
const MusicContexts = ({ children }) => {
  const [musicFile, setMusicfile] = useState('');

  const musicInfo = {
    musicFile,
    setMusicfile
  }

  return (
    <RexroxContexts.Provider value={musicInfo}>
      {children}
    </RexroxContexts.Provider>
  );
};

export default MusicContexts;