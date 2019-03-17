import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyCBfmQS_yElr43rU0YRGF8w0veTPClkjas",
  authDomain: "news-474b2.firebaseapp.com",
  databaseURL: "https://news-474b2.firebaseio.com",
  projectId: "news-474b2",
  storageBucket: "news-474b2.appspot.com",
  messagingSenderId: "839306392000"
  };
export const firebaseApp = firebase.initializeApp(config);


// class Fire {
//     constructor() {
//         this.init();
//         //this.observeAuth();
//     }

//     init() {
//         firebase.initializeApp({
//             apiKey: "AIzaSyDNzm78YGX5AeINrKB6ovCGmy2RBuZf-7o",
//             authDomain: "appchat-60635.firebaseapp.com",
//             databaseURL: "https://appchat-60635.firebaseio.com",
//             projectId: "appchat-60635",
//             storageBucket: "appchat-60635.appspot.com",
//             messagingSenderId: "715240248475"
//         })

//     }

//     // observeAuth() {
//     //     firebase.auth().onAuthStateChanged(this.onAuthStateChanged);
//     // }

//     // onAuthStateChanged(user) {
//     //     if (user) {
            
//     //     } else {
//     //         try {
//     //             //firebase.auth().signInAnonymously();
//     //             //() => this.props.navigation.navigate('Login')
//     //           } catch ({ erorr }) {
//     //             alert(erorr);
//     //           }
//     //     }
//     // }
// }

// Fire.share = new Fire();
// export default Fire
