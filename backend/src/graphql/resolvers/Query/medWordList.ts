import  Word  from '#root/db/models';
import {Sequelize} from 'sequelize-typescript'


const medWordListResolver = () => {
    return Word.findAll({
        order: [
            Sequelize.fn('RAND')
        ],
        limit: 20
    })
}

export default medWordListResolver