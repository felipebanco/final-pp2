module.exports = (sequelize, dataTypes) => {
    const alias = 'Oferta';

    const cols = {
        IdOferta: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        IdCuentaEmpresa:{
            type: dataTypes.INTEGER,
            notNull: true,
        },
        cuit:{
            type: dataTypes.INTEGER,
            notNull: true,
        },
        fecha: {
            type: dataTypes.DATE,
            notNull: true,
        },
        puesto: {
            type: dataTypes.STRING(45),
            notNull: true,
        },
        ubicacion: {
            type: dataTypes.STRING(45),
            notNull: true,
        },
    }

    const config = {
        tableName: 'oferta',
        timestamps: false,
        paranoid: false
    }

    const Oferta = sequelize.define(alias, cols, config);

    return Oferta;
}