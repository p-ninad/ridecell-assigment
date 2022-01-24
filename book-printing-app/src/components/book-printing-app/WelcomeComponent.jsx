import { Component } from 'react'
import { Link } from 'react-router-dom'
import HelloWorldService from '../../api/book-printing/BookService'

class WelcomeComponent extends Component {

    constructor() {
        super()
        this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this)
        this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this)
        this.state = {
            welcomeMessage: ''
        }
    }

    render() {
        return (
            <>
                <div className='container'>
                    Welcome {this.props.match.params.name}.
                    Click <Link to='/books'>here</Link> to browse books.
                </div>
                <div className='container'>
                    Click here
                    <button onClick={ this.retrieveWelcomeMessage } className='btn btn-success'>Get Welcome</button>
                </div>
                <div className='container'>
                    { this.state.welcomeMessage }
                </div>
            </>
        )
    }

    retrieveWelcomeMessage() {
        HelloWorldService.executeHelloWorldService()
        .then( response => this.handleSuccessfulResponse(response))
    }

    handleSuccessfulResponse(response) {
        this.setState({
            welcomeMessage: response.data.shipmentStatus
        })
    }
}

export default WelcomeComponent