'use strict'

const algoliasearch = require('algoliasearch')
console.log('got to algolia')

exports.create = function create(a, secret) {
	return algoliasearch(a, secret)
}
