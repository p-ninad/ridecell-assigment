import axios from 'axios'

class BookService {

    getAllBooks() {
        return axios.get('http://localhost:10005/books')
    }

    getShipmentById(shipmentId) {
        return axios.get(`http://localhost:9905/shipment-tracking/${shipmentId}`)
    }
}

export default new BookService()