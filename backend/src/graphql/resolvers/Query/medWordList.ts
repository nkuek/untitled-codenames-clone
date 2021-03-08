import  Word  from '#root/db/models';
import {Sequelize} from 'sequelize'


const medWordListResolver = () => {
    return Word.findAll({
        order: [Sequelize.fn('RANDOM')],
        limit: 20
    })
}

export default medWordListResolver