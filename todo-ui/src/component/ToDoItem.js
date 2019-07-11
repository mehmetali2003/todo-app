import React, { Component } from 'react';
import { TaskState } from '../models/ToDoModel';
import EditImage from '../image/edit.png';
import DeleteImage from '../image/delete.png';

class ToDoItem extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const item = this.props.item;
        const imageStyle = {
            height: '20px',
            width: '20px',
            verticalAlign: 'middle'
        };
        const buttonStyle = {
            position: 'absolute',
            right: 10,
        };
        const taskDone = {
            'text-decoration': 'line-through solid black',
            'font-size': '1.1em',
            'margin': 5,
            'padding-left': 15
        };

        return (


            <div className="row">
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-2" />

                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
                    <input
                        className="custom-control-input"
                        id={"toDoCbox" + item.id}
                        name="taskDone"
                        checked={item.status === TaskState.DONE}
                        onChange={this.props.onChangeCheckBox}
                        value={item.id}
                        type="checkbox"
                    />
                </div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <span style={(item.status === TaskState.DONE) ? taskDone : undefined}>{item.title}</span>
                </div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <span style={(item.status === TaskState.DONE) ? taskDone : undefined}>{item.description}</span>
                </div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <button value={item.id} onClick={() => this.props.editToDoItem(item.id)} className="glyphicon glyphicon-edit" >
                    </button>
 
                    <button value={item.id} onClick={() => this.props.deleteToDoItem(item.id)} className="glyphicon glyphicon-remove" >
                    </button>
                </div>
            </div>
        );
    }
}

export default ToDoItem;