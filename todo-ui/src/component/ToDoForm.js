import React from 'react';

const ToDoForm = ({ title, description, txtButton, handleInput, handleFormSubmit, handleClearForm, handleSearch }) => (

  <div className="row">
    <div className="col-xs-5 col-sm-5 col-md-5 col-lg-4" />

    <div className="col-xs-5 col-sm-5 col-md-5 col-lg-4">
      <form>
        <div className="form-group">
          <label htmlFor="titleLabel">Title</label>
          <input type="text" className="form-control" placeholder="Title" name="title" value={title || ''} onChange={handleInput} />
        </div>
        <div className="form-group">
          <label htmlFor="descriptionLabel">Description</label>
          <input type="text" className="form-control" placeholder="Description" name="description" value={description || ''} onChange={handleInput} />
        </div>

        <button type="button" className="btn btn-warning" onClick={handleClearForm} >Clear</button> &nbsp;
        <button type="button" className="btn btn-success" onClick={handleFormSubmit}>{txtButton}</button>
      </form>
    </div>

    <div className="col-xs-5 col-sm-5 col-md-5 col-lg-4" />

  </div>

);

export default ToDoForm;