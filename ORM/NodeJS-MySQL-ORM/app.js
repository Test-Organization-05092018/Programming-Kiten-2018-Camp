const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const settings = require('./settings');
const sequelize = new Sequelize('orm_school_db', settings.user, settings.password, {
    host: 'localhost',
    dialect: 'mysql'
});

const Students = sequelize.define('students', {
    name: {
        type: Sequelize.STRING(128),
        allowNull: false
    },
    age: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            min: 0,
            max: 200
        }
    }, gender: {
        type: Sequelize.CHAR,
        allowNull: false
    }
});

sequelize
    .sync()
    .then(() => {
        Students.findAll({
            where: {
                age: {
                    [Op.lt]: 15
                }
            },
            attributes: [['name', 'TOVA_E_IME'], ['age', 'TOVA_SA_GODINI']]
        }).then((students) => {
            console.log(students);
        });
    });
