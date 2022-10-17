import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { LineChart, Line } from 'recharts';

const Summury = () => {
    const { isLoading, error, data: datas, refetch } = useQuery(['repoData'], () =>
        fetch('http://localhost:5000/services').then(res =>
            res.json()
        )
    )
    // console.log(datas?.length);
    const data = [{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 }];
    return (
        <div>
            <h2>Charts</h2>
            <h2>Charts</h2>
            <h2>Charts</h2>
            <h2>Charts</h2>
            <h2>Charts</h2>
            <h2>Charts</h2>
            <h2>Charts</h2>
            <h2>Charts</h2>
            <h2>Charts</h2>
            <h2>Charts</h2>
            <h2>Charts</h2>
            <h2>Charts</h2>
        </div>
    );
};

export default Summury;