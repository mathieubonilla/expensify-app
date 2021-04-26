import firebase from 'firebase'

const firebaseConfig = {

    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
googleAuthProvider.addScope('profile');
googleAuthProvider.addScope('email');


export { firebase, googleAuthProvider,  database as default };







// database.ref().set({
//     name: 'Esteban Mathieu',
//     age: 28,
//     isSingle: false,
//     job: {
//         title: 'Software developer',
//         company: 'facebook'
//     },
//     stressLevel: 6,
//     location: {
//         country: 'Costa Rica',
//         city: 'Alajuela'
//     },
//     attributes: {
//         height: 166,
//         weight: 70
//     }
// }).then(() => {
//     console.log('data is saved!')
// }).catch((e) => {
//     console.log('HERE IS THE ERROR', e)
// })

// database.ref('isSingle').set(27)

// database.ref('isSingle').remove().then(() =>
//     console.log('Data was removed'), (e) => {
//         console.log('Something went wrong!')
//     }
// );


// database.ref().update({
//     isSingle: null,
//     stressLevel: 9,
//     'job/company': 'Amazon!',
//     'location/city': 'US'
// })

// database.ref().update({
//     'location/city': 'Moncho'
// })



// database.ref('location/city').set('Moncho')


// database.ref('attributes').set({   
//     height: 166,
//     weight: 70
// })


// const root = database.ref()
//     .once('value')
//     .then((snapshot) => {
//         console.log(snapshot.val())
//     }).catch((e) => {
//         console.log('Errror fetching data: ', e)
//     })



// const location = database.ref('location')
//     .once('value')
//     .then((snapshot) => {
//         console.log(snapshot.val())
//     }).catch((e) => {
//         console.log('Errror fetching data: ', e)
//     })


// const onValueChange = database.ref()
//     .on('value', (snapshot) => {
//         console.log(snapshot.val())
//     }, (e) => {
//         console.log('Error: ', e)
//     })

// setTimeout(() => {
//     database.ref().update({
//         stressLevel: 3
//     })
// }, 2000)



// setTimeout(() => {
//     database.ref().off('value', onValueChange)
// }, 3500)



// setTimeout(() => {
//     database.ref().update({
//         stressLevel: 100
//     })
// }, 7000)

// const onValueChange = database.ref()
//     .on('value', (snapshot) => {
//         const data = snapshot.val();
//         console.log(`${data.name} is a ${data.job.title} at ${data.job.company}.`)
//     }, (e) => {
//         console.log('Error: ', e)
//     })



// const firebaseNotes = {
//     notes: {
//         '1': {
//             body: 'My note',
//             title: 'first note'
//         },
//         '2': {
//             body: 'My other note',
//             title: 'second note'
//         }
//     }
// }


// const notes = [
//     {
//         id: '12',
//         body: 'My note',
//         title: 'first note'
//     }, {
//         id: '14',
//         body: 'My other note',
//         title: 'second note'
//     }
// ]


// database.ref('notes').set(notes)



// database.ref('notes').push({
//     title: 'To do 2 ',
//     body: 'running 2'
// });
// //Using push automatically generates an ID for each list item



// database.ref('notes/-MW73dT8cBaiAPUT2amQ').update({
//     body: 'Buy food'
// })


// database.ref('notes/-MW73dT8cBaiAPUT2amQ').remove();


// Setup "expenses" with three items (description, note, amount, createdAt)

// const expense1 = {
//     description: 'Apartment',
//     note: 'January apartment bill',
//     amount:  1700,
//     createdAt: 100000
// }

// const expense2 = {
//     description: 'food',
//     note: 'Food for the week',
//     amount:  500,
//     createdAt: 2000
// }

// const expense3 = {
//     description: 'phone',
//     note: 'iphone',
//     amount:  500,
//     createdAt: 30000
// }


// database.ref('expenses').push(expense1);
// database.ref('expenses').push(expense2);
// database.ref('expenses').push(expense3);


// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         })

//         console.log(expenses)
//     })


// database.ref('expenses')
//     .on('value',(snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         })

//         console.log(expenses)
//     })


// database.ref('expenses').on('child_removed', (snapshot) =>{
//     console.log(snapshot.key, snapshot.val())
// })


// database.ref('expenses').on('child_changed', (snapshot) =>{
//     console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').on('child_added', (snapshot) =>{
//     console.log(snapshot.key, snapshot.val())
// })