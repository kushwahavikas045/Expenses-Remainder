import React, { Component } from 'react'
import Errorui from '../../UI/Errorui'

export default class GlobalError extends Component {
    constructor(props) {
        super(props)

        this.state = {
             hasError: false
        }
    }

    static getDerivedStateFromError(error){
        return {
            hasError : true
        }
    }

    render() {
        if(this.state.hasError){
           return <Errorui/>
        }
         return this.props.children


    }
}
