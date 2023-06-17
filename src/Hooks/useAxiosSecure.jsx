import axios from 'axios';
import { useEffect } from 'react';
import useAuth from './useAuth';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})

const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { auth, user } = useAuth();
    useEffect(() => {
        axiosSecure.interceptors.request.use(config => {
            const token = localStorage.getItem('bistro-token');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`
            }
            return config;
        });

        axiosSecure.interceptors.response.use((response) => response,
            async (error) => {
                // Check if the error status is 401 or 403 
                if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                    if (user) {
                        await signOut(auth)
                        navigate('/login')
                    }
                }
                return Promise.reject(error);
            }
        );
    }, [signOut, navigate])
    return [axiosSecure]
};

export default useAxiosSecure;