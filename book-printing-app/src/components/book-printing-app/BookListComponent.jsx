import { Component } from 'react'
import BookService from '../../api/book-printing/BookService'

class BookListComponent extends Component {

    constructor() {
        super()
        this.state = {
            books: [
                {isbn:null, title: '', author: null, format: '', price:null}
            ]
        }
        this.refresh = this.refresh.bind(this)
    }

    render() {
        return (
            <div>
                <h1>Books</h1>
                <div className='container'>
                    <table className='table'>
                        <thead>
                            <tr>
                            <th>ISBN</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Format</th>
                            <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.books.map(
                                    book => 
                                    <tr key={book.isbn}>
                                        <td>{book.isbn}</td>
                                        <td>{book.title}</td>
                                        <td>{book.author}</td>
                                        <td>{book.format}</td>
                                        <td>{book.price}</td>
                                        <td><button className='btn btn-success' onClick={ this.addToCart } >Add to cart</button></td>
                                    </tr>
                                )
                            }
                        </tbody>                    
                    </table>
                </div>
                <div className='container'>
                    <button className='btn btn-success' onClick={ this.refresh }>Refresh List</button>
                </div>
            </div>
        )
    }

    refresh() {
        BookService.getAllBooks()
        .then(response => this.handleRefreshEvent(response))        
    }

    handleRefreshEvent(response) {
        this.setState({
            books: response.data
        })
    }
}

export default BookListComponent