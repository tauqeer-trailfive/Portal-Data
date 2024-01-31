import React, { useEffect } from 'react'
import image from "../assets/NotFound.avif"
import { useNavigate } from 'react-router-dom'

type Props = {}

const PageNotFound = (props: Props) => {
    const navigate = useNavigate()

    useEffect(() => {
        const redirectTimer = setTimeout(() => {
            navigate('/');
        }, 2000);

        return () => clearTimeout(redirectTimer);
    }, [navigate])

    return (
        <div className='w-full h-[100vh] flex justify-center items-center'>
            <img src={image} className="" />
        </div>
    )
}

export default PageNotFound