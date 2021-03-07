import {Word} from '#root/db/models';
import {Sequelize} from 'sequelize-typescript'


const smallWordListResolver = () => {
    return Word.findAll({
        order: [
            Sequelize.fn('RAND')
        ],
        limit: 16
    })
}

export default smallWordListResolver