import React from 'react';

const ToDoListHeader = ({ SortGrid, handleSearchInput, searchInputs }) => (

  <div className="row">
  <div className="col-xs-1 col-sm-1 col-md-1 col-lg-3">
      <span></span>
  </div>
  <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
      <span><h4><b><a href="#" onClick={() => { SortGrid("title") }}>Title</a></b></h4></span>
      <input type="text" placeholder="search Title" name="title" value={searchInputs.title} onChange={handleSearchInput} />
  </div>
  <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
      <span><h4><b><a href="#" onClick={() => { SortGrid("description") }}>Description</a></b></h4></span>
      <input type="text" placeholder="search Description" name="description" value={searchInputs.description} onChange={handleSearchInput} />

  </div>
  <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
      <span></span>
  </div>

</div>

);

export default ToDoListHeader;