import { Component } from 'react'
import { Link } from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'

class HeaderComponent extends Component {
    render() {
        let isLoggedIn = AuthenticationService.isUserLoggedIn()
        return (            
            <header>                
                <nav className='navbar navbar-expand-md navbar-dark navbar-custom'>
                    <div><a href="localhost:3000" className='navbar-brand'>BookPrintingApp</a></div>
                    <ul className='navbar-nav'>
                        <li><Link className='nav-link' to='/welcome'>Home</Link></li>
                        <li><Link className='nav-link' to='/books'>Browse Books</Link></li>
                    </ul>
                    <ul className='navbar-nav navbar-collapse justify-content-end'>
                        {!isLoggedIn && <li><Link className='nav-link' to='/login'>Login</Link></li>}
                        {isLoggedIn && <li><Link className='nav-link' to='/logout' onClick={ AuthenticationService.logout }>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
        )
    }
}

export default HeaderComponent