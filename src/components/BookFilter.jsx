import React from 'react'

const BookFilter = (props) => (
              <div className="col-lg-12">
                <ul className="nav nav-pills text-center">
                  { props.items }
                </ul>
              </div>

)

export default BookFilter
