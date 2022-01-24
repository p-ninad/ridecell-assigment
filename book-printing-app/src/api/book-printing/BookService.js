import axios from 'axios'

class BookService {

    executeBookService() {
        console.log('Service executed.')
        return axios.get('http://localhost:10005/books')
    }

}

export default new BookService()