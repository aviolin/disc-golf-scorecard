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

const status = ref('loading');

const useFirebase = () => {

  // Initialize Firebase
  const initializeFirebase = () => {
    app.value = initializeApp(firebaseConfig);
    auth.value = getAuth(app.value);
    db.value = getFirestore(app.value);

    onAuthStateChanged(auth.value, async (_user) => {
      if (_user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        // const uid = user.uid;
        console.log('Auth state changed:')
        user.value = _user;
        getGames().then(() => {
          status.value = 'loaded';
        })
        
      } else {
        // User is signed out
        console.log('Auth state changed: user signed out')
        user.value = false;
        userGames.value = [];
        status.value = 'loaded';
      }
    });

    console.log('Firebase initialized')
  }
  if (!app.value) initializeFirebase();


  /* User Account Functions */

  const createAccount = (email, password, displayName) => {
    createUserWithEmailAndPassword(auth.value, email, password)
      .then((userCredential) => {
        // Signed up 
        const _user = userCredential.user;
        console.log('Account created:')

        updateProfile(_user, {
          displayName,
        }).catch(function(error) {
          console.log(error)
        }).then(() => {
          login(email, password)
        })

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.warn('Account creation failed:', errorMessage, errorCode)
      });
  }

  const login = (email, password) => {
    signInWithEmailAndPassword(auth.value, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log('Logged in:')
        router.push('/');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.warn('Login failed:', errorMessage, errorCode)
      });
  }

  const logout = () => {
    signOut(auth.value)
      .then(() => {
        console.log('Logged out')
        user.value = false;
        status.value = 'loaded';
        router.push('/');
      })
      .catch((error) => {
        console.warn('Logout failed:', error)
      });
  }

  const reauthenticate = (password) => {
    const credential = EmailAuthProvider.credential(user.value.email, password);
    return reauthenticateWithCredential(user.value, credential)
  }


  /* Database Functions */

  const addDocument = async (collectionName, values) => {
    try {
      const docRef = await addDoc(collection(db.value, collectionName), values);
      console.log("Document written with ID: ", docRef.id);
      getGames();
      return docRef.id;
    } catch (e) {
      console.error("Error adding document: ", e);
    }    
  }

  const getDocument = async (collectionName, id) => {
    const querySnapshot = await getDocs(collection(db.value, collectionName));
    const doc = querySnapshot.find(doc => doc.id === id);
    console.log(doc);
  }

  const deleteDocument = async (collectionName, id) => {
    try {
      console.log('id:', id)
      console.log('collection:', collectionName)
      await deleteDoc(doc(db.value, collectionName, id));
      console.log("Document deleted: ", id);
    } catch (e) {
      console.error("Error deleting document: ", e);
    }
  }

  const getGames = async () => {
    const q = query(collection(db.value, "games"), where("owner", "==", user.value.uid));
    const querySnapshot = await getDocs(q);

    const games = [];

    querySnapshot.forEach((doc) => {
      console.log(doc.id)
      games.push(doc.data());
      games[games.length - 1].id = doc.id;
    });

    userGames.value = games;
  }


  return { 
    app, auth, user, db, status,
    updateProfile,updateEmail, updatePassword, deleteUser,
    createAccount, login, logout, reauthenticate, sendPasswordResetEmail,
    addDocument, getDocument, deleteDocument,
    userGames, getGames
  };
}

export { useFirebase };
