import {Word} from '#root/db/models'
import {Sequelize} from 'sequelize-typescript'

const largeWordListResolver = () => {
    return Word.findAll({
        order: [
            Sequelize.fn('RAND')
        ],
        limit: 25
    })
}

export default largeWordListResolver