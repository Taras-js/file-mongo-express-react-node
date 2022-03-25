import React, {useCallback, useContext, useEffect, useState} from 'react';
import {useHttp} from "../hooks/http.hook";
import {AuthContext} from "../context/AuthContext";
import {PreLoader} from "../components/PreLoader";
import {ImagesList} from "../components/ImagesList";

export const AllImgPage = () => {

    const auth = useContext(AuthContext)
    const {request, loading} = useHttp()
    const [images, setImages] = useState(null)
    const getImages = useCallback(async () => {
        try {
           const fetched = await request('/api/images', 'GET', null, {
                Authorization: `Bearer ${auth.token}`
            })

            setImages(fetched)
            console.log('fetched', fetched)
        } catch (e) {
        }
    }, [auth.token, request])
    useEffect(() => {
        getImages()
    }, [getImages])


    return (
        <>
            { !images
                ? <PreLoader/>
                :  (
                    <>
                    <ImagesList props={images} />
                </>
                )
            }
        </>
    )
}