import { FirebaseAppProvider } from 'reactfire';
import '../styles/globals.css';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCfWWb2nOtVhGxQh5XgTMRsya0KqfEqWJ0',
  authDomain: 'vote123-c429f.firebaseapp.com',
  projectId: 'vote123-c429f',
  storageBucket: 'vote123-c429f.appspot.com',
  messagingSenderId: '77956546251',
  appId: '1:77956546251:web:e00558cff93c00fc41254e',
};

function MyApp({ Component, pageProps }) {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Component {...pageProps} />
    </FirebaseAppProvider>
  );
}

export default MyApp;
