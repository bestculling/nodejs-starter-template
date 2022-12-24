export const getErrorMessage = (err) => {
	let output
	try {
		let fieldName = err.message.substring(
			err.message.lastIndexOf('.$') + 2,
			err.message.lastIndexOf('_1')
		)
		output =
			fieldName.charAt(0).toUpperCase() +
			fieldName.slice(1) +
			' already exists'
	} catch (ex) {
		output = 'Unique field already exists'
	}
	return output
}
