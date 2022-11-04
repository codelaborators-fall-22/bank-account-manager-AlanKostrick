import React, { useEffect, useState } from 'react'

import Axios from 'axios';

const BankAccountsScreen = () => {

    const [loadingAccounts, setLoadingAccounts] = useState(true);
    const [accounts, setAccounts] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
            const result = await Axios('http://localhost:8080/all-accounts');
            console.log(result);
        }

        fetchData();
    }, []);


    return (
        <div>BankAccountsScreen</div>
    )
}

export default BankAccountsScreen;