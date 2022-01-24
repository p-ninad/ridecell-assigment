import { Component } from 'react'
import AuthenticationService from './AuthenticationService.js'

class LoginComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )
    }

    handleLogin() {
        console.log('inside handleLogin')
        if(this.state.username==='testUser' && this.state.password==='dummy') {
            AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password)
            this.props.history.push(`/welcome/${this.state.username}`)
            // this.setState({hasLoginFailed:false,
            //     showSuccessMessage:true })
        } else {
            this.setState({hasLoginFailed:true,
                showSuccessMessage:false })
        }
    }

    render() {
        return (
            <div>
                <h1></h1>
                <div className='container'>
                    {/* <ShowInvalidCredentials hasLoginFailed={ this.state.hasLoginFailed }/> */}
                    { this.state.hasLoginFailed && <div className='alert alert-warning'>Invalid Credentials!</div> }
                    <b>Username</b>
                    <br/><br/>
                    <input type='text' name='username' id='username' placeholder='Enter username' onChange={ this.handleChange }/>
                    <br/><br/>
                    <b>Password</b>
                    <br/><br/>
                    <input type='password' name='password' id='password' placeholder='********' onChange={ this.handleChange }/>
                    <br/><br/>
                    <button className='btn btn-success' onClick={ this.handleLogin }>Login</button>
                </div>
            </div>
        )
    }
}


export default LoginComponent