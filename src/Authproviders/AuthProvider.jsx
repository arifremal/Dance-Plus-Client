import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../Firebase/firebase.config";


export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);



  const createUser = (email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
  }
  const signIn = (email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(email,password)
  }
const logout =()=>{
    setLoading(true)
    return signOut(auth)
}

const gProvider = new GoogleAuthProvider();
const gUser=()=>{
   setLoading(true)
    return signInWithPopup(auth,gProvider)
}
const updateProfile =(name,photo)=>{
 return updateProfile(auth.currentUser,{
    displayName: name, photoUrl: photo
  })

}

useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth,currentUser =>{
        setUser(currentUser)
        console.log(currentUser);
        setLoading(false)
    }) 
    return ()=>{
        return unsubscribe()
    }
},[])


  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logout,
    gUser,
    updateProfile

  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
