import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCDAhnqQ7MJtxiQu5qumTLqlFohKnSR73o",
    authDomain: "berryberri-994fc.firebaseapp.com",
    databaseURL: "https://berryberri-994fc.firebaseio.com",
    projectId: "berryberri-994fc",
    storageBucket: "berryberri-994fc.appspot.com",
    messagingSenderId: "143646474505",
    appId: "1:143646474505:web:9af5a09026a823bfb813d8",
    measurementId: "G-HY5W0720TF"
};

const cartItemFirebase = async userId => {
    const cartsRef = firestore.collection('carts').where('userId', '==', userId);
    const snapShot = await cartsRef.get();
    return snapShot;
}

export const updateCartItemsDocument = async userId => {
    const snapShot = await cartItemFirebase(userId);
    if (snapShot.empty) {
        const cartDocRef = firestore.collection('carts').doc();
        await cartDocRef.set({ userId, cartItems: [] });
        return cartDocRef;
    } else {
        return snapShot.docs[0].ref;
    }
}

export const getCartItemsFromFirebase = async userId => {
    const snapShot = await cartItemFirebase(userId);
    if (snapShot.empty) {
        const cartDocRef = firestore.collection('carts').doc();
        await cartDocRef.set({ userId, cartItems: [] });
        return cartDocRef;
    } else {
        return snapShot.docs[0].data();
    }
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
          await userRef.set({
              displayName,
              email,
              createdAt,
              ...additionalData
          })  
        }
        catch(error) {
            console.log("Error creating user", error.message)
        
        }
    }
    return userRef;
};

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    console.log(collectionRef);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    })

    return await batch.commit();
};

export const convertCategoriesSnapshotToMap = (categories) => {
    const transformedCategories = categories.docs.map(doc => {
        const { title, items } = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    });
    return transformedCategories.reduce((accumulator, category) => {
        accumulator[category.title.toLowerCase()] = category;
        return accumulator;
    },{});
};

firebase.initializeApp(config);

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth);
        }, reject);
    });
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({prompt : 'select_account'});
export const signInWithGoogle = ()=> auth.signInWithPopup(googleProvider);

export default firebase;
