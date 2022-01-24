import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom'
import BookPrintingApp from './components/book-printing-app/BookPrintingApp'
import './App.css'
import './bootstrap.css'

/**
 * This App.js file is called a module and each class/function becomes a component of the module.
 * 
 * If FirstComponent is put inside another JS file, it becomes it's own module.
 */
 
class App extends Component {
  render() {
    return (
      <div >
        <BrowserRouter>
          <BookPrintingApp/>
        </BrowserRouter>
      </div>
    )
  }
}
export default App;