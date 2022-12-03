import * as React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

const Api = React.createContext()

export {Api as Context}

export default Api.Consumer

class ApiProvideraa extends React.Component {
    constructor(props) {
        super(props)

        this.URL = 'http://localhost:8080/api'
        
        this.state = {
            token: localStorage.getItem('token'),
            user: null,
        }
    }

    componentDidMount() {
        this.tryGetMe()
    }

    loggedIn = () => {
        return this.state.user != null
    }

    request = (path, config = {}) => {
        return axios({
            ...config,
            url: `${this.URL}${path}`,
            headers: {
                ...config.headers,
                'Authorization': this.state.token,
            }
        })
    }

    login = async (username, password, error = err => {}) => {
        try {
            const tokenRequest = await this.request('/user/login', {
                method: 'POST',
                data: { username, password }
            })

            const token = tokenRequest.data.token

            localStorage.setItem('token', token)

            this.setState({
                token: tokenRequest.data.token
            }, () => this.tryGetMe(true))
        }
        catch(err) { error(err) }
    }

    tryGetMe = async (redirect = false) => {
        try {
            const meRequest = await this.request('/user/me', {
                method: 'GET'
            })

            this.setState({
                user: meRequest.data
            }, redirect ? (() => this.redirect('/user/dashboard')) : (() => {}))
        }
        catch(err) { console.log(err) }
    }

    register = async (data, error = err => {}) => {
        try {
            const tokenRequest = await this.request('/user/register', {
                method: 'POST',
                data
            })

            this.setState({
                user: tokenRequest.data,
                token: tokenRequest.data.token
            })
        }
        catch(err) { error(err) }
    }

    logout = async () => {
        // await this.request('/user/logout')
        localStorage.removeItem('token')
        this.setState({
            token: null,
            user: null,
        })
    }

    redirect = url => this.props.history.push(url)

    render = () => {
        return <Api.Provider value={{
            ...this.state,
            loggedIn: this.loggedIn,
            request: this.request,
            login: this.login,
            logout: this.logout,
            register: this.register,
            redirect: this.redirect
        }}>{this.props.children}</Api.Provider>
    }
}

const ApiProvider = withRouter(ApiProvideraa)

export {
    ApiProvider
}