'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Favorite extends Model {
    /**
     * The Favourite model belongs to a 
     * relationship with Tweet model
     */
    tweet () {
        return this.belongsTo('App/Models/Tweet')
    }

    /**
     * The Favourite model belongs to a 
     * relationship with User model
     */
    user () {
        return this.belongsTo('App/Models/User')
    }
}

module.exports = Favorite
