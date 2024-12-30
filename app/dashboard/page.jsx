import Dashboard from '@/components/Dashboard';
import Main from '@/components/Main'
import React from 'react'
import Login from '@/components/Login';

export const metadata = {
    title: "Moodly Dashboard",
}
const page = () => {

    const isAuthenticated = false;

    let children = (
        <Login />
    )

    if (isAuthenticated) {
        children = (
            <Dashboard />
        )
    }
    return (
        <Main>
            {children}
        </Main>
    )
}

export default page