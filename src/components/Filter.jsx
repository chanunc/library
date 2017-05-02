import React from 'react'

const Filter = (props) => (

	<li className={ props.filter.selected? 'active': '' } 
		key={ props.filter.category } 

		onClick={ props.action.bind(null, props.filter.category) }>
        <a href="#0">{ props.filter.category }</a>
    </li>
)

export default Filter
