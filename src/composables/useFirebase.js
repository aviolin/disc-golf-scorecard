// Import the functions you need from the SDKs you need
import { ref } from "vue";
import { router } from '@/router';
import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword, 
  onAuthStateChanged,
  signOut,
  updateProfile,
  updateEmail,
  updatePassword,
  deleteUser,
  reauthenticateWithCredential,
  EmailAuthProvider,
  sendPasswordResetEmail
} from "firebase/auth";
import { 
  getFirestore, 
  collection, 
  doc,
  query,
  where,
  addDoc,
  getDocs,
  deleteDoc,
} from "firebase/firestore";

import { useGameStore } from "@/stores/game";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

const app = ref(null);
const auth = ref(null);
const user = ref(null);
const db = ref(null);

const userGames = ref([]);
const gamesStatus = ref('loading');

const status = ref('loading');
const error = ref(null);

const useFirebase = () => {

  const gameStore = useGameStore();

  // Initialize Firebase
  const initializeFirebase = () => {
    app.value = initializeApp(firebaseConfig);
    auth.value = getAuth(app.value);
    db.value = getFirestore(app.value);

    onAuthStateChanged(auth.value, async (_user) => {
      if (_user) {
        console.log('Auth state changed:')
        user.value = _user;
        getGames().then(() => {
          status.value = 'loaded';
          error.value = null;
        })
        
      } else {
        // User is signed out
        console.log('Auth state changed: user signed out')
        user.value = false;
        userGames.value = [];
        status.value = 'loaded';
        error.value = null;
        gameStore.removeLocalStorage();
      }
    });
  }
  if (!app.value) initializeFirebase();


  /* User Account Functions */

  const createAccount = (email, password, displayName) => {
    error.value = null;
    createUserWithEmailAndPassword(auth.value, email, password)
      .then((userCredential) => {
        // Signed up 
        const _user = userCredential.user;
        console.log('Account created:')

        updateProfile(_user, {
          displayName,
        }).catch(function(err) {
          console.error(err)
        }).then(() => {
          login(email, password)
        })

      })
      .catch((err) => {
        console.warn('Account creation failed:', err.message, err.code)
        error.value = err.code;
      });
  }

  const login = (email, password) => {
    error.value = null;
    signInWithEmailAndPassword(auth.value, email, password)
      .then((userCredential) => {
        // Signed in 
        const _user = userCredential.user;
        router.push('/');
      })
      .catch((err) => {
        console.warn('Login failed:', err.message, err.code)
        error.value = err.code;
      });
  }

  const logout = () => {
    error.value = null;
    signOut(auth.value)
      .then(() => {
        user.value = false;
        status.value = 'loaded';
        router.push('/');
        error.value = null;
      })
      .catch((err) => {
        console.warn('Logout failed:', err)
      });
  }

  const reauthenticate = (password) => {
    error.value = null;
    const credential = EmailAuthProvider.credential(user.value.email, password);
    return reauthenticateWithCredential(user.value, credential)
  }


  /* Database Functions */

  const addDocument = async (collectionName, values) => {
    try {
      const docRef = await addDoc(collection(db.value, collectionName), values);
      getGames();
      return docRef.id;
    } catch (e) {
      console.error("Error adding document: ", e);
    }    
  }

  const deleteDocument = async (collectionName, id) => {
    try {
      await deleteDoc(doc(db.value, collectionName, id));
    } catch (err) {
      console.error("Error deleting document: ", err);
    }
  }

  const getGames = async () => {
    gamesStatus.value = 'loading';
    const q = query(collection(db.value, "games"), where("owner", "==", user.value.uid));
    const querySnapshot = await getDocs(q);

    const games = [];

    querySnapshot.forEach((doc) => {
      games.push(doc.data());
      games[games.length - 1].id = doc.id;
    });

    userGames.value = games;
    gamesStatus.value = 'loaded';
  }


  return { 
    app, auth, user, db, 
    status, error,
    updateProfile, updateEmail, updatePassword, deleteUser,
    createAccount, login, logout, reauthenticate, sendPasswordResetEmail,
    addDocument, deleteDocument,
    userGames, getGames, gamesStatus,
  };
}

export { useFirebase };
