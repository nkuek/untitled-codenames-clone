import  Word from '#root/db/models';
import {Sequelize} from 'sequelize'

// Randomizes order of words and then selects 15 words from the database
const smallWordListResolver = () => {
    return Word.findAll({
        order: [Sequelize.fn('RANDOM')],
        limit: 15
    })
}

export default smallWordListResolver