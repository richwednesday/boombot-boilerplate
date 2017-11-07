// Everything in this file will become methods for the Dispatch functions.
// Mix-in sub-commands for threads
module.exports = {
	start: require('./start'),
	feedback: require('./feedback'),
	question: require('./question'),
	contribute: require('./contribute')
}

