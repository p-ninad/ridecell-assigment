import { Component } from 'react'
import { Link } from 'react-router-dom'
import BookService from '../../api/book-printing/BookService'

class WelcomeComponent extends Component {

    constructor() {
        super()
        this.retrieveShipmentStatus = this.retrieveShipmentStatus.bind(this)
        this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            welcomeMessage: ''
        }
    }

    render() {
        return (
            <>
                <div className='container'>
                    <Link className='btn btn-success' to='/books'>Browse books</Link>
                    <br/><br/><br/>
                </div> 
                <div className='container'>
                    <input type='text' name='shipmentid' id='shipmentid' placeholder='Enter shipment ID' onChange={ this.handleChange }/>             
                    <button onClick={ this.retrieveShipmentStatus } className='btn btn-success'>Get Shipment Status</button>
                </div>
                <div className='container'>
                    { this.state.welcomeMessage }
                </div>
            </>
        )
    }

    retrieveShipmentStatus() {
        BookService.getShipmentById(this.state.shipmentid)
        .then( response => this.handleSuccessfulResponse(response))
    }

    handleChange(event) {
        console.log('handleChange() called: ' + event.target.value)
        this.setState({
            shipmentid: event.target.value
        })
    }

    handleSuccessfulResponse(response) {
        this.setState({
            welcomeMessage: `Status of Shipment ID ${response.data.shipmentId}: ` + response.data.shipmentStatus
        })
    }
}

export default WelcomeComponent