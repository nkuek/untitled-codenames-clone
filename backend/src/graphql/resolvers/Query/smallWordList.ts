import  Word from '#root/db/models';
import {Sequelize} from 'sequelize'


const smallWordListResolver = () => {
    return Word.findAll({
        order: 'random()',
        limit: 16
    })
}

export default smallWordListResolver