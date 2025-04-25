import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from '../../utility/addToDb';
import Book from '../Book/Book';

const ListedBook = () => {
    const [readList, setReadList] = useState([]);
    const [sort, setSort] = useState('');

    const allBooks = useLoaderData();

    useEffect(() => {
        const storedReadList = getStoredReadList();
        const storedReadListInt = storedReadList.map(id => parseInt(id));
        console.log(storedReadList, storedReadListInt, allBooks);
        const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId));
        setReadList(readBookList);
    }, [])

    const hanldeSort = sortType => {
        setSort(sortType);
        if (sortType === 'Number of Pages') {
            const sortedReadList = [...readList].sort((a, b) => a.totalPages - b.totalPages);
            setReadList(sortedReadList);
        }
        if (sortType === 'Rating') {
            const sortedReadList = [...readList].sort((a, b) => a.rating - b.rating);
            setReadList(sortedReadList);
        }
    }

    return (
        <div className='max-w-7xl mx-auto'>
            <Tabs>
                <TabList>
                    <Tab>Read</Tab>
                    <Tab>Wishlist</Tab>
                </TabList>


                <details className="dropdown flex justify-center">
                    <summary className="btn m-1">{sort ? `${sort}` : 'Sort by'}</summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li onClick={() => hanldeSort('Rating')}><a>Rating</a></li>
                        <li onClick={() => hanldeSort('Number of Pages')}><a>Number of page</a></li>
                        <li onClick={() => hanldeSort('Publish Date')}><a>Publish Date</a></li>
                    </ul>
                </details>

                <TabPanel>
                    <h2>Read List: {readList.length}</h2>
                    {readList.map(book => <Book key={book.bookId} book={book}></Book>)}
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBook;