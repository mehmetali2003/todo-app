import React, { Component } from 'react';
import ToDoItem from '../component/ToDoItem';
import ToDoListHeader from '../component/ToDoListHeader';

class ToDoList extends Component {
    constructor(props, context) {
        super(props, context);
        this.todoItem = this.todoItem.bind(this);
    }

    todoItem(item, index) {
        return (
            <ToDoItem
                key={index}
                item={item}
                editToDoItem={this.props.editToDoItem}
                deleteToDoItem={this.props.deleteToDoItem}
                onChangeCheckBox={this.props.onChangeCheckBox} />
        );
    }

    render() {
        let items = this.props.items;
        let todoItems = items.map((item, index) => this.todoItem(item, index));

        return (
            <div className="container-fluid">
                <ToDoListHeader searchInputs={this.props.searchInputs} handleSearchInput={this.props.handleSearchInput} SortGrid={this.props.SortGrid}></ToDoListHeader>
                {todoItems}
            </div>
        );
    }
}

export default ToDoList;