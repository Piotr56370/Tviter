'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Tweet extends Model {

    /**
     * The Tweet model belongs to a 
     * relationship with User model
     */
    user () {
        return this.belongsTo('App/Models/User')
    }
}

module.exports = Tweet
