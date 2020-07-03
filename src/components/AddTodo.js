import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class AddTodo extends Component {
    state = {
        title: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.setState({ title: '' })
        this.props.addTodo(this.state.title)
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value })

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
                <input style={{ flex: '10', padding: '5px' }} onChange={this.onChange} type="text"
                    value={this.state.title} name="title" placeholder="Add Todo..." />
                <input style={{ flex: '1' }} type="submit" className="btn" value="Submit" />
            </form>
        )
    }
}

AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired,
}

export default AddTodo
