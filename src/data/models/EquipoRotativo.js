module.exports = (sequelize, dataTypes) => {
    const alias = 'EquipoRotativo';

    const cols = {
        idEquipoRotativo: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        marca: {
            type: dataTypes.STRING(255),
            notNull: true,
        },
        tipo: {
            type: dataTypes.STRING(255),
            notNull: true,
        },
        modelo: {
            type: dataTypes.STRING(255),
            notNull: true,
        },
    }

    const config = {
        tableName: 'equiporotativo',
        timestamps: false,
        paranoid: false
    }

    const EquipoRotativo = sequelize.define(alias, cols, config);

 

    return EquipoRotativo;
}