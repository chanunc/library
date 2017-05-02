import React from 'react'
import Book from './Book'

const BookList = (props) => (
  <div className="row book-list" >
	  { 
	  	props.books.map( (book, index) => (
	  
	    <Book title={book.title} cover={book.cover} key={index} />

	  )) }
  </div>
)

export default BookList
