import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { firebaseConfig } from '../firebase/config';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);;
}

const db = firebase.firestore();

export const saveAUser = async (user) => {

    const returnData = {
        code: 404,
        message: 'Saving not successful',
        result: null

    }
    // const result = db.collection('users').add(user);
    const result = db.collection('users').doc(user.uid).set({user}, {merge: true});

    if (result) {
        returnData.code = 200;
        returnData.message = "Saving is successful"
        returnData.result = result;
    }

    return returnData;
}

export const retrieveAUser = async (user) => {
    const retrievedUser = {
        uid: null,
        fullname: null,
    }

    await db.collection('users')
        .doc(user.id)
        .get()
        .then(documentSnapshot => {
            if (documentSnapshot.exists) {
                retrievedUser.uid = documentSnapshot.id,
                    retrievedUser.fullname = documentSnapshot.data().fullname
            }
        })

    return retrievedUser;
}