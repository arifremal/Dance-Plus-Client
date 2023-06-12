import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllUser = () => {
    const {}= useQuery(['users'], async ()=>{
        const res = await fetch('http://localhost:5000/users')
    })
    return (
        <div>
            users
            
        </div>
    );
};

export default AllUser;