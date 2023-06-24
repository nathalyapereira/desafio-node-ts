export interface User {
    name: string
    email: string
}

const db = [
    {
        name: 'Joana',
        email: 'joana@dio.com',
    }
]

export class UserService {
    db: User[]
    constructor(
        database = db
    ) {
        this.db = database;
    }
    createUser = (name: string, email: string) => {
        const user = { 
            name,
            email 
        }
        this.db.push(user)
        console.log('DB atualizando', this.db)
    }

    getAllUsers = () => {
        return db
    }

    delUser = (user: User) => {
        const userIndex = this.db.indexOf(user)
        if(userIndex !== -1) {
            this.db.splice(userIndex, 1)
        }
        console.log('Usuário foi deletado', this.db)
    }
}