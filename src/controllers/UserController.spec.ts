import { User, UserService } from "../services/UserService"
import { UserController } from "./UserController"
import { Request, Response, json } from "express"
import { makeMockResponse } from "../__mock__/mockResponse.mock"


describe('UserController', () => {
    const mockUserService = {
        createUser: jest.fn(),
        getAllUsers: jest.fn(),
        delUser: jest.fn(),  
    } as Partial<UserService>
    const userController = new UserController(mockUserService as UserService)

   
    it('Deve adicionar um novo usuário', () => {
       const mockRequest = {
        body: {
            name: 'Natha',
            email: 'natha@test.com'
        }
       } as Request
       const mockResponse = makeMockResponse() 
       userController.createUser(mockRequest, mockResponse)
       expect(mockResponse.state.status).toBe(201)
       expect(mockResponse.state.json).toMatchObject({ message: 'Usuario criado' })
    })

    it('Deve listar todos os usuários', () => {
    const mockRequest = {} as Request
       const mockResponse = makeMockResponse() 
       userController.getAllUsers(mockRequest, mockResponse)
       expect(mockResponse.state.status).toBe(200)
       expect(mockUserService.getAllUsers).toBeCalled()
    })

    it('Deve verificar se o usuários não informou o name', () => {
        const mockRequest = {
            body: {
                email: 'natha@test.com'
            }
        } as Request
        const mockResponse = makeMockResponse()
        userController.createUser(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(400)
        expect(mockResponse.state.json).toMatchObject({ message: 'O nome é obrigatório' })

    })
    it('Deve verificar se o usuários não informou o email', () => {
        const mockRequest = {
            body: {
                name: 'Natha'
            }
        } as Request
        const mockResponse = makeMockResponse()
        userController.createUser(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(400)
        expect(mockResponse.state.json).toMatchObject({message: 'O email é obrigatório' })
    })

    it('Deve deletar um usuários', () => {
        const mockRequest = {
            body:{
                name: 'Natha',
                email: 'natha@test.com'
            }
        } as Request
        const mockResponse = makeMockResponse()
        userController.delUser(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(200)
        expect(mockResponse.state.json).toMatchObject({ message: "Usuário foi deletado" })
    })

})