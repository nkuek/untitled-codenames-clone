import  Word  from '#root/db/models';
import {Sequelize} from 'sequelize'

// Randomizes order of words and then selects 20 words from the database
const medWordListResolver = () => {
    return Word.findAll({
        order: [Sequelize.fn('RANDOM')],
        limit: 20
    })
}

export default medWordListResolver