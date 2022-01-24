import React, { Component } from 'react'

class CartComponent extends Component {
    constructor() {
        super()
        this.state = {
            cartItems: []
        }
    }

    render() {
        return(
            <>
                <h1>Cart</h1>
                <div className='container'>
                        
                </div>
            </>
        )
    }
}

export default CartComponent