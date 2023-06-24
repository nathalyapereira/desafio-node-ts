import { User, UserService } from "./UserService";

describe('UserService', () => {
    const mockDB = [] as User[]
    const userService = new UserService(mockDB);

    it('Deve adicionar um novo usuário', () => {
        const mockConsole = jest.spyOn(global.console, 'log')
        userService.createUser('nath', 'nath@test.com')
        expect(mockConsole).toHaveBeenCalledWith('DB atualizando', mockDB)
    })

    it('Deve deletar um usuário', () => {
        const mockConsole = jest.spyOn(global.console, 'log')
        userService.delUser({ name: 'nath', email: 'nath@test.com' })
        expect(mockConsole).toHaveBeenCalledWith('Usuário foi deletado', mockDB)
    })
})