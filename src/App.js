
import React, { Component } from 'react'
/* for unique user id's */
import uuid from 'uuid'
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

class App extends Component {

    state={
        itemsArr:[],
        id: '',
        item: '',
        editItem: false
    }

    handleChange = (e) => {
        //console.log('handle chnage')
        this.setState({
            item: e.target.value
        })

    }

    handleSubmit = (e) => {
        e.preventDefault()
        //prevent submutting blank input
        if (this.state.item.length>0) {
            this.setState({
                itemsArr: [...this.state.itemsArr,  
                    { id:uuid(), title: this.state.item }
                ],
                item:'', //clear input
                editItem: false
            })
        }
    }

    handleClearList = () => {
        console.log('handle clearing')
        this.setState({
            itemsArr: []
        })
    }

    handleEdit = (id, e) => {
        console.log(`handle Edit ${id}`)
        const newArr = this.state.itemsArr.filter((item) => id !== item.id )
        const selectedItem = this.state.itemsArr.find((item) => item.id === id)

        this.setState({
            itemsArr: newArr,
            item: selectedItem.title,
            id:id, //maintain the same id, to make sure we editing same item
            editItem: true
        })
        
    }

    handleDelete = (id) => {
        console.log(`handle delete ${id}`)
        this.setState({
            itemsArr: this.state.itemsArr.filter((item) => id !== item.id )
        })
    }

    render() {
        console.log(this.state)
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
                            clearList={this.handleClearList}
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