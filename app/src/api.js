import * as React from 'react'
import axios from 'axios'

const Api = React.createContext()

export {Api as Context}

export default Api.Consumer

class ApiProvider extends React.Component {
    constructor(props) {
        super(props)

        this.URL = 'http://localhost:8080/api'
        
        this.state = {
            token: null,
            user: null,
        }
    }

    loggedIn = () => {
        return this.user != null
    }

    request = (path, config = {}) => {
        console.log(this.state.token)
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

            this.setState({
                token: tokenRequest.data.token
            })

            this.state.token = tokenRequest.data.token

            const meRequest = await this.request('/user/me', {
                method: 'GET'
            })

            console.log(meRequest.data)

            this.setState({
                user: meRequest.data
            })
        }
        catch(err) { error(err) }
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
        this.setState({
            token: null,
            user: null,
        })
    }

    render = () => {
        return <Api.Provider value={{
            ...this.state,
            loggedIn: this.loggedIn,
            request: this.request,
            login: this.login,
            logout: this.logout,
            register: this.register
        }}>{this.props.children}</Api.Provider>
    }
}

export {
    ApiProvider
}