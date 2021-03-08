import Word from '#root/db/models'
import {Sequelize} from 'sequelize'

// Randomizes order of words and then selects 25 words from the database
const largeWordListResolver = () => {
    return Word.findAll({
        order: [
            Sequelize.fn('RANDOM')
        ],
        limit: 25
    })
}

export default largeWordListResolver