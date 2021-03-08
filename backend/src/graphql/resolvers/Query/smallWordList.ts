import  Word from '#root/db/models';
import {Sequelize} from 'sequelize'


const smallWordListResolver = () => {
    return Word.findAll({
        order: [Sequelize.fn('RANDOM')],
        limit: 16
    })
}

export default smallWordListResolver