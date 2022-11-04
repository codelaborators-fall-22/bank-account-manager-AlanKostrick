import { Route, Switch } from 'react-router-dom'

import AccountDetailsScreen from '../../pages/account-details-screen';
import BankAccountsScreen from '../../pages/bank-accounts-screen';
import React from 'react'

const AppRouter = () => {
    return (
        <Switch>
            <Route exact path={'/accounts'} component={BankAccountsScreen} />
            <Route exact path={'/accounts/:id'} component={AccountDetailsScreen} />
        </Switch>
    )
}

export default AppRouter;