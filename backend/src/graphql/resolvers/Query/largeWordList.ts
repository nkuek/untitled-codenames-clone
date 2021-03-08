import Word from '#root/db/models'
import {Sequelize} from 'sequelize'

const largeWordListResolver = () => {
    return Word.findAll({
        order: [
            Sequelize.fn('RANDOM')
        ],
        limit: 25
    })
}

export default largeWordListResolver