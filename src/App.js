
import React, { Component } from 'react'
/* for unique user id's */
import uuid from 'uuid'
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

class App extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <TodoInput />
                        <TodoList />
                    </div>
                </div>
            </div>
            
        )
    }
}

export default App