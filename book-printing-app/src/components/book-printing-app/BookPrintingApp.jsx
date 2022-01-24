import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AuthenticatedRoute from './AuthenticatedRoute'
import './BookPrintingApp.css'
import WelcomeComponent from './WelcomeComponent.jsx'
import LogoutComponent from './LogoutComponent.jsx'
import HeaderComponent from './HeaderComponent.jsx'
import FooterComponent from './FooterComponent.jsx'
import BookListComponent from './BookListComponent.jsx'
import LoginComponent from './LoginComponent.jsx'
import ErrorComponent from './ErrorComponent.jsx'

class BookPrintingApp extends Component {
    
    render() {
        return (
            <div className='BookPrintingApp'>
                <Router>
                    <>
                    <HeaderComponent/>
                    <Switch>
                        <Route path='/' exact component={ LoginComponent } />
                        <Route path='/login' component={ LoginComponent } />
                        <AuthenticatedRoute path='/welcome/' component={ WelcomeComponent }/>
                        <AuthenticatedRoute path='/books' component={ BookListComponent }/>
                        <AuthenticatedRoute path='/logout' component={ LogoutComponent }/>
                        <Route component={ ErrorComponent }/>
                    </Switch>
                    <FooterComponent/>
                    </>
                </Router>
            </div>
        )
    }
}

export default BookPrintingApp
