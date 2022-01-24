import { Component } from 'react'
import BookService from '../../api/book-printing/BookService'

class ShipmentTrackingComponent extends Component {

    constructor() {
        super()
        this.state = {
            books: [
                {isbn:null, title: '', author: null, format: ''}
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
        BookService.executeBookService()
        .then(response => this.handleRefreshEvent(response))        
    }

    handleRefreshEvent(response) {
        this.setState({
            books: response.data
        })
    }
}

export default ShipmentTrackingComponent