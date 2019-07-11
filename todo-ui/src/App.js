import React, { Component } from 'react';
import ToDoList from './component/ToDoList';
import { ToDoModel, TaskState } from './models/ToDoModel';
import { ToDoService } from './services/ToDoService';
import ToDoForm from './component/ToDoForm';
import './css/App.css';
import ErrorMessageBox from './component/ErrorMessageBox';

class App extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      newToDo: ToDoModel,
      toDoListFromDb: [],
      toDoList: [],
      processStatus: { messageType: 0, message: "" },
      sortItems: { title: true, description: true },
      searchItems: { title: "", description: "" }
    };
  }

  toggleErrorMsgBox = () => {
    let processStatus = { messageType: 0, message: "" };
    this.updateStatus(processStatus);
  }

  updateStatus = (processStatus) => {
    this.setState({ processStatus: processStatus });
  }

  handleInput = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(
      prevState => ({
        newToDo: {
          ...prevState.newToDo,
          [name]: value
        }
      })
    );
  }

  handleFormSubmit = (e) => {
    //todo some validations
    e.preventDefault();
    this.addToDo();
  }

  addToDo = () => {
    let toDoData = { ...this.state.newToDo };
    toDoData.userId = 1;
    let service = new ToDoService();

    let response;
    if (toDoData.id != 0) {
      response = service.updateToDo(toDoData);
    }
    else {
      response = service.AddToDo(toDoData);
    }

    response.then(res => {
      this.handleClearForm();
      this.getToDos();
    })
      .catch(error => {
        let processStatus = this.handleResponse(error.response);
        this.updateStatus(processStatus);
      });
  }

  handleResponse = (response) => {
    let processStatus = {};

    if (response === undefined) {
      processStatus.messageType = 1;
      processStatus.message = "An error has occured, Please contact our team";
      return processStatus;
    }

    if (response.status === 400) {
      processStatus.messageType = 1;
      processStatus.message = "Data validation error:";
      for (let obj in response.data) {
        let x = obj;//get prop name
        processStatus.message += ", " + response.data[x][0];
      }
    } else if (response.status === 401) {
      processStatus.messageType = 1;
      processStatus.message = "Session expired";
    } else if (response.status === 500) {
      processStatus.messageType = 1;
      processStatus.message = "An error has occured, Please contact our team";
    }

    return processStatus;
  }

  getToDos = () => {
    let service = new ToDoService();
    let response = service.getToDos(1);

    response.then(res => {
      let toDoList = res.data;
      this.setState({ toDoList: toDoList, toDoListFromDb: toDoList });
    })
      .catch(error => {
        let processStatus = this.handleResponse(error.response);
      }
      );
  }

  deleteToDo = (id) => {
    let service = new ToDoService();
    let response = service.deleteToDo(id);

    response.then(res => {
      this.getToDos();
    })
      .catch(error => {
        let processStatus = this.handleResponse(error.response);
      }
      );
  }

  editToDoItem = (id) => {
    const selectedListItem = this.state.toDoList.find(item => item.id === id);
    this.setState({ newToDo: selectedListItem });
  }

  handleClearForm = () => {
    this.setState({ newToDo: ToDoModel });
  }

  handleSearch = (e) => {
    let value = e.target.value;
    let name = e.target.name;

    let filterTitle = (name === "title") ? value : this.state.searchItems.title;
    let filterDescription = (name === "description") ? value : this.state.searchItems.description;


    let filterResult = this.state.toDoListFromDb
      .filter(item => (item.title.includes(filterTitle) || filterTitle === "") &&
        (item.description.includes(filterDescription) || filterDescription === ""));

    this.setState(
      prevState => ({
        searchItems: {
          ...prevState.searchItems,
          [name]: value
        },
        toDoList: filterResult
      })
    );
  }

  SortGrid = (columnName) => {

    let sortingValue = this.state.sortItems[columnName]
    let items = this.state.toDoList;

    let mult = 1;
    if (!sortingValue)
      mult = -1

    items.sort(function (a, b) {
      if (a[columnName] < b[columnName]) { return -1 * mult; }
      if (a[columnName] > b[columnName]) { return 1 * mult; }
      return 0;
    });


    this.setState(
      prevState => ({
        sortItems: {
          ...prevState.sortItems,
          [columnName]: !sortingValue
        },
        toDoList: items
      })
    );
  }

  toggleState = (state) => {
    if (state === TaskState.TODO) return TaskState.DONE;
    return TaskState.TODO;
  }

  onChangeCheckBox = (e) => {

    const toDoId = parseInt(e.target.value, 10);
    let toDoData = this.state.toDoList.find((item) => item.id === toDoId);
    toDoData.status = this.toggleState(toDoData.status);

    let service = new ToDoService();

    let response;
    response = service.updateToDo(toDoData);

    response.then(res => {
      this.getToDos();
    })
      .catch(error => {
        let processStatus = this.handleResponse(error.response);
        this.updateStatus(processStatus);
      });
  }

  componentDidMount() {
    this.getToDos();
  }


  render() {
    let submitButtonTxt = (this.state.newToDo.id !== 0) ? "Update Todo Item" : "Add Todo Item";

    return (
      <div className="container">
        <ToDoForm txtButton={submitButtonTxt} {...this.state.newToDo} handleInput={this.handleInput}
          handleFormSubmit={this.handleFormSubmit} handleClearForm={this.handleClearForm}
          handleSearch={this.handleSearch}></ToDoForm>

        <br />
        <br />

        {
          (this.state.toDoList.length > 0 || this.state.searchItems.title !== "" || this.state.searchItems.description !== "") &&
          <ToDoList
            handleSearchInput={this.handleSearch}
            searchInputs={this.state.searchItems}
            SortGrid={this.SortGrid}
            items={this.state.toDoList}
            editToDoItem={this.editToDoItem}
            deleteToDoItem={this.deleteToDo}
            onChangeCheckBox={this.onChangeCheckBox} />
        }


        <ErrorMessageBox toggleErrorMsgBox={this.toggleErrorMsgBox} {...this.state.processStatus}></ErrorMessageBox>
      </div>
    );
  }


}

export default App;
