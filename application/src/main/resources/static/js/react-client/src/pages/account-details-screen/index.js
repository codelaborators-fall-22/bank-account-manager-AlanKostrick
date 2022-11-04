import React, { useEffect, useState } from 'react'

import Axios from 'axios';
import { useParams } from 'react-router-dom';

const AccountDetailsScreen = () => {

    const id = useParams();

    const [account, setAccount] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const result = await Axios(`http://localhost:8080/all-accounts/${id.id}`);
            console.log(result);
        }

        fetchData();
    }, []);



    return (
        <div>AccountDetailsScreen</div>
    )
}

export default AccountDetailsScreen;