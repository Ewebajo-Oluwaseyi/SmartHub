/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, createContext } from 'react';


const AuthContextProvider = (props) => {
  const [show, setShow] = useState(false);
  const [isSignup, setSignup] = useState(false);

  const toggleModal = () => {
    setShow(!show);
  };

    const signIn = () => {
    setSignup(false);
    setShow(true);
  };

  const signUp = () => {
    setSignup(true);
    setShow(true);
    
  };

  return (
    <AuthContext.Provider value={{
      signIn,
      toggleModal,
      show,
      signUp,
      isSignup
    }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
export const AuthContext = createContext();
