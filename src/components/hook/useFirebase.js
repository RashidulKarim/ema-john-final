import { getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInit from "../../Firebase/Firebase.init";

firebaseInit();

const useFirebase = () => {
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const auth = getAuth();
    const [user, setuser] = useState({});

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const signInWithGithub = () => {
        return signInWithPopup(auth, githubProvider)
    }

    const logOut = () => {
        signOut(auth).then(()=>{
            console.log("successfully signOut");
        }).catch(err => {
            console.log(err.message);
            
        })
    }

    useEffect(()=>{
        onAuthStateChanged(auth, user => {
            if(user){
                setuser(user)
            }else{
                setuser({})
            }
        })
    }, [])

    return{
        logOut,
        user,
        signInWithGoogle,
        signInWithGithub
    }
}

export default useFirebase;