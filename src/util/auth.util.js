import authInstance from './axios.util';
import { Navigate } from 'react-router';
import React, { useState, useEffect } from 'react';



const ProtectedRoute = ({children}) => {
    let executeBlock = false;
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true)
        const token = localStorage.getItem('token');
        if (!token) {
            console.log('hello')
            setIsAuthenticated(false);
            executeBlock = true;
            window.location.href = '/#/login';
            return;
        }
        async function checkAuth() {
            const isAuthenticated = await authInstance.post('/authResource/isAuthenticated' , {
                token: token
            }).then((response) => {
                setIsAuthenticated(response.data.isAuthenticated);
                return response.data.isTokenValid;
            }).catch((error) => {
                console.log(error);
                setIsAuthenticated(false);
                localStorage.removeItem('token');
                localStorage.removeItem('user');
                localStorage.removeItem('userName');
                window.location.href = '/#/login'
            });
            return isAuthenticated;
        }
        checkAuth().then(() => {
            setLoading(false);
            executeBlock = true;
        });   
    }, [])
    return (
        <>
        <div></div>
        {  loading ? <div className='text-center mt-5'><h1 className=''>Loading...</h1></div> : <div></div>}
        {executeBlock && !isAuthenticated ? <Navigate to="/login" /> : children}
        </>
    )
}

export async function isAuth() {
    const token = localStorage.getItem('token');
    if (!token) {
        return false;
    }
    const isAuthenticated = await authInstance.post('/authResource/isAuthenticated' , {
        token: token
    }).then((response) => {
        return response.data.isTokenValid;
    }).catch((error) => {
        console.log(error);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        return false;
    });
    console.log(isAuthenticated);
    return isAuthenticated;
}

export function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/#/';
    window.location.reload();
}
    



export default ProtectedRoute;