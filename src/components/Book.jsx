import React from 'react'

const Book = (props) => (
  <div className="col-xs-6 col-sm-3" key={ props.title }>
    <div className="thumbnail">
    {props.index}
      <img className="img-responsive" src={ props.cover }/>
    </div>
  </div>
)

export default Book
