import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {

    const { bookId, image, bookName, author, tags, category, rating, totalPages, yearOfPublishing } = book

    return (
        <Link to={`/books/${bookId}`}>
            <div className="card border-2 p-4">
                <figure>
                    <img
                        className='h-56'
                        src={image}
                        alt={bookName} />
                </figure>
                <div className="card-body">
                    <div className="card-actions justify-start my-4">
                        {
                            tags.map((tag, index) => <div key={index} className="badge badge-outline bg-yellow-300 border-none">{tag}</div>)
                        }
                    </div>
                    <h2 className="card-title">
                        {bookName}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>by: {author}</p>
                </div>
                <div className='border border-dashed mx-4 mb-4'></div>
                <div className="card-actions justify-between mx-4 my-4">
                    <div className="badge badge-outline">{category}</div>
                    <div className="badge">Pages: {totalPages}</div>
                    <div className="badge">Rating: {rating}</div>
                    <div className="badge">Publish Date: {yearOfPublishing}</div>
                </div>
            </div>
        </Link>
    );
};

export default Book;