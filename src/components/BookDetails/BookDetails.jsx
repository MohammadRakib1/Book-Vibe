import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoredReadList } from '../../utility/addToDb';

const BookDetails = () => {

    const { bookId } = useParams();

    const data = useLoaderData();

    const id = parseInt(bookId);

    const book = data.find(book => book.bookId === id);

    const { bookId: currentBookId, image } = book;

    const handleMarkAsRead = (id) => {
        addToStoredReadList(id)
    }

    return (
        <div className='max-w-7xl mx-auto'>
            <h2>{bookId}</h2>
            <img className='w-36' src={image} alt="" />
            <br />
            <div>
                <button onClick={() => handleMarkAsRead(bookId)} className='btn btn-outline btn-accent mr-4'>Mark as read</button>
                <button className='btn btn-accent'>Add to wishlist</button>
            </div>
        </div>
    );
};

export default BookDetails;