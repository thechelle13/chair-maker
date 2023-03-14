//example of two tasks. One task depends on what the other outputs, or returns.



const yellowChairMaker = (chairMaterial) => {
	const chairObject = {
		type: "Chair",
		color: "Yellow",
		material: chairMaterial,
		price: 49.29
	}

	return chairObject
}

// Now you can invoke the function - or start the task - to make two chairs.
const metalChair = yellowChairMaker("Aluminum")
const oakChair = yellowChairMaker("Oak")

console.log(metalChair)

console.log(oakChair)

/*
	Vocabulary:
		- `chairObject` is a parameter. It can only be used inside the function.
		- `chairStringMaker` is a variable whose value is a function
		- `stringRepresentation` is an internal variable for the function.
			It, also, can only be used inside the function, not outside it.
*/
const chairStringMaker = (chairObject) => {
	// Note that the last interpolation has two dollar signs.
	// The first one is just a dollar sign. The second is for the interpolation.
	const stringRepresentation = `The ${chairObject.color}, ${chairObject.material} ${chairObject.type} costs $${chairObject.price}`

	return stringRepresentation
}

const returnedChairObject = yellowChairMaker("Oak")

const returnedChairString = chairStringMaker(returnedChairObject)

console.log(returnedChairString)


// Flow of how code works:
// yellowChairMaker function is invoked and provided a string as an argument
// yellowChairMaker makes an object and returns it
// The object is captured in a variable
// chairStringMaker function is invoked and provided an object as an argument by putting the variable from step 3 in the parenthesis.
// chairStringMaker creates a string representation of the object and returns it
// The string is captured in a variable