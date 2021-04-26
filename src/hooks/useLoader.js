
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { startSetExpenses } from '../actions/expenses'
import { login, logout } from '../actions/auth'; 
import {firebase} from '../firebase/firebase';

const useLoader = () => {

    const [isLoading, setIsLoading] = useState(true);


    const dispatch = useDispatch();

    useEffect(() => {

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                dispatch(login(user.uid))
                dispatch(startSetExpenses()).then(() => {
                    setIsLoading(false);
                })
            } else {
                dispatch(logout())
                setIsLoading(false);
            }
        })

    }, [])

    return isLoading;

}


export default useLoader;
