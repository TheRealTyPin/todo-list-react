import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './AddInput.css'

const AddInput = ({ lable, onAdd }) => {
	const [value, setValue] = useState('')
	const handleSubmit = e => {
		e.preventDefault()
		onAdd(value)
		setValue('')
	}
	return <form className="add-input" onSubmit={handleSubmit}>
		<input
			type="text"
			placeholder={lable}
			aria-label={lable}
			value={value}
			onChange={e => {
				setValue(e.target.value)
			}}
		/>
		<button aria-label="create new list">+</button>
	</form>
}

AddInput.propTypes = {
	lable: PropTypes.string,
	onAdd: PropTypes.func,
}

export default AddInput
