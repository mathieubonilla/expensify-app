import React from 'react';
import selectExpenses from '../selectors/expenses';
import expensesAmount from '../selectors/expenses-total';
import { connect } from 'react-redux';
import numeral from 'numeral';
import { Link } from 'react-router-dom';

const ExpensesSummary = (props) => {

    const formattedExpenseTotal= numeral(props.expensesTotal / 100 ).format('$0,0.00');
    return (
        <div className="page-header">
            <div className="content-container">
                  <h1 className="page-header__title">Viewing <span>{props.expensesCount}</span>  {props.expensesCount > 1 ? 'expenses' : ' expense '} totalling <span>{formattedExpenseTotal}</span></h1>

                    <div className="page-header__actions">
                        <Link className="button" to="/create" >Add Expense</Link>
                    </div>

            </div>
        </div>
    )
}

const mapSateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters)
    return {
        expensesCount: visibleExpenses.length
        , expensesTotal: expensesAmount(visibleExpenses)
        
    }
    
};

export default connect(mapSateToProps)(ExpensesSummary);