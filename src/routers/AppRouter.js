
import React from 'react';
import { Router, Route, Switch, BrowserRouter } from 'react-router-dom';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import ExpenseDarshboardPage from '../components/ExpenseDarshboardPage';
import LoginPage  from '../components/LoginPage';
import NotFoundPage from '../components/NotFoundPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import useLoader from '../hooks/useLoader';
import LoadingPage from '../components/LoadingPage';

const AppRouter = () => {

    const isLoading = useLoader();

    if (isLoading) {
        return (
            <LoadingPage />
        )
    } 
    return (
    
        <BrowserRouter>
            <Switch> 
                <PublicRoute path="/" component={LoginPage} exact={true} />
                <PrivateRoute path="/dashboard" component={ExpenseDarshboardPage} />
                <PrivateRoute path="/create" component={AddExpensePage} />
                <PrivateRoute path="/editExpense/:id" component={EditExpensePage} />
                <Route component={NotFoundPage} />
            </Switch>
    </BrowserRouter>

    )
};


export default AppRouter;