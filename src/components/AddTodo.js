import React, { Component } from 'react'

export class AddTodo extends Component {
    state = {
        title: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title)
        this.setState({ title: '' })
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value })

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
                <input style={{ flex: '10', padding: '5px' }} onChange={this.onChange} type="text" name="title" placeholder="Add Todo..." />
                <input style={{ flex: '1' }} type="submit" className="btn" value="Submit" />
            </form>
        )
    }
}

export default AddTodo
