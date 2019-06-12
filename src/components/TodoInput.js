
import React, { Component } from 'react'

class TodoInput extends Component {
    render() {
        //console.log(this.props)
        const { item, handleChange, handleSubmit, editItem } = this.props

        return (
            <div className="card card-body my-3">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-white">
                                <i className="fas fa-book" />
                            </div>
                        </div>
                        <input type="text" className="form-control text-capitalise" 
                            placeholder="add todo item" 
                            value={item} 
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit"  
                        disabled={item ? false: true} /* disable the button if NO input */
                        className={
                             /* change button style if editItem is true */
                            editItem ? "btn btn-block btn-success mt-3" 
                            : "btn btn-block btn-primary mt-3 text-uppercase"
                        }
                    >
                        {editItem ? "edit item" : "add item"} {/* conditional render */}
                    </button>
                </form>
            </div>
        )
    }
}  

export default TodoInput