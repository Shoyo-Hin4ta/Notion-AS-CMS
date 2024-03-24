import React from 'react'
import { useParams } from 'react-router-dom'
import useGetPage from '../utils/useGetPage';
import Item from './Item';

const Category = () => {

    const {name} = useParams();

    const pages = useGetPage(name);
    return (
        <>
            {/* <div className='border'>{name + "Category"}</div> */}
            <Item pages = {pages} categoryName = {name}/>
        </>
    )
}

export default Category