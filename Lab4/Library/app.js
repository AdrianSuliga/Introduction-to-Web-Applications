import { Sequelize, DataTypes, QueryError } from 'sequelize';
import express from 'express';
import bookService from './services/bookService.js'
import orderService from './services/orderService.js'
import userService from './services/userService.js'

const app = express();
const port = 3000;

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database/books.sqlite'
});

app.use(express.json());

app.use('/api/books', bookService);
app.use('/api/orders', orderService);
app.use('/api', userService);

// Start up function
const initServer = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established');

        await sequelize.sync({ force: true });
        console.log('Tables created');

        Books.bulkCreate(initialBooks());
        Orders.bulkCreate(initialOrders());
        Users.bulkCreate(initialUsers());

        app.listen(port, () => {
            console.log('Server running on port', port);
        });
    } catch (error) {
        console.log('Could not start server, ', error);
    }
}

initServer();

// Sequelize models
const Books = sequelize.define('Books', {
    BookID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    BookName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    BookAuthor: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ReleaseDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
    }}, 
    {
        timestamps: false,
        createdAt: false,
        updatedAt: false,
    }
); 

const Orders = sequelize.define('Orders', {
    OrderID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    UserID: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    BookID: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    Quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }},
    {
        timestamps: false,
        createdAt: false,
        updatedAt: false,
    }
)

const Users = sequelize.define('Users', {
    UserID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    UserMail: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    UserPassword: {
        type: DataTypes.STRING,
        allowNull: false,
    }},
    {
        timestamps: false,
        createdAt: false,
        updatedAt: false,
    }
)

// Initial values for database
function initialBooks() {
    return [
        {
            BookName: 'Droga Królów',
            BookAuthor: 'Brando Sando',
            ReleaseDate: '2010-04-13'
        },
        {
            BookName: 'Słowa Światłości',
            BookAuthor: 'Brando Sando',
            ReleaseDate: '2015-09-23'
        },
        {
            BookName: 'Dawca Przysięgi',
            BookAuthor: 'Brando Sando',
            ReleaseDate: '2018-08-14'
        },
        {
            BookName: 'Rytm Wojny',
            BookAuthor: 'Brando Sando',
            ReleaseDate: '2020-10-10'
        }
    ];
}

function initialOrders() {
    return [
        {
            UserID: 2,
            BookID: 3,
            Quantity: 1
        },
        {
            UserID: 1,
            BookID: 2,
            Quantity: 1
        },
        {
            UserID: 1,
            BookID: 4,
            Quantity: 2
        }
    ];
}

function initialUsers() {
    return [
        {
            UserID: 1,
            UserMail: "bongoniuszbongo@gmail.com",
            UserPassword: "superbezpiecznehaslo"
        },
        {
            UserID: 2,
            UserMail: "adriansuliga81@gmail.com",
            UserPassword: "kghmv;ivamieun"
        },
        {
            UserID: 3,
            UserMail: "vuciwer@gmail.com",
            UserPassword: "eriuqqwruootu"
        }
    ];
}

export {Books, Orders, Users};