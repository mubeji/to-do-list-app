
import React, { Component } from 'react'
/* for unique user id's */
import uuid from 'uuid'
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

class App extends Component {

    state={
        itemsArr:[{id:1, title: 'wake up'}, {id:1, title: 'brush teeth'}],
        id: uuid(),
        item: '',
        editItem: false
    }

    handleChange = (e) => {
        console.log('handle chnage')
    }

    handleSubmit = (e) => {
        console.log('handle submit')
    }

    handleClearList = () => {
        console.log('handle clearing')
    }

    handleEdit = (id) => {
        console.log(`handle Edit ${id}`)
    }

    handleDelete = (id) => {
        console.log(`handle delete ${id}`)
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-8 mt-5">
                        <h3 className="text-capitalize text-center">Todo input</h3>
                        <TodoInput item={this.state.item} 
                            handleChange={this.handleChange}
                            handleSubmit={this.handleSubmit}
                            editItem={this.state.editItem}
                        />
                        <TodoList itemsArr={this.state.itemsArr}
                            clearList={this.clearList}
                            handleDelete={this.handleDelete}
                            handleEdit={this.handleEdit}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default App