import { Column, DataType, Model, Table } from 'sequelize-typescript';

// Creation of word model
@Table({
    defaultScope: {
        attributes: {exclude: ["deletedAt"]}
    },
    paranoid: true,
    tableName: "Words"
})
class Word extends Model<Word> {
    @Column({
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataType.INTEGER
    })
    id!: string
    @Column({
        allowNull: false,
        type: DataType.STRING
    })
    word!: string
}

export default Word