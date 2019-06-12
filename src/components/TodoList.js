
import React, { Component } from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends Component {

    render() {
        const { itemsArr, clearList, handleDelete, handleEdit } = this.props

        let listItem = itemsArr.map((l_Item) => {
            return (
                <TodoItem key={l_Item.id} 
                    handleDelete={() => handleDelete(l_Item.id)}
                    handleEdit={() => handleEdit(l_Item.id)}
                    title={l_Item.title}
                />
            )
        })
        return (
            <ul className="list-group my-5">
                <h3 className="text-capitalize text-center">todo list</h3>
                {listItem}
                <button type="button" 
                    className="btn btn-danger button block text-uppercaser mt-5"
                    onClick={clearList}
                >
                    clear list
                </button>
            </ul>
        )
    }
}
