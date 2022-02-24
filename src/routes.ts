import { Router, Request, Response } from 'express'

import {  getTask, getTasks, saveTask, updateTask, finishedTask, removeTask  } from './controller/TasksController'

const routes = Router()

routes.get('/', (request: Request, response: Response) =>{
    return response.json({ message: 'Teste' })
})

routes.get('/tasks', getTasks) // Buscar todas
routes.get('/tasks/:id', getTask) // Buscar por Id
routes.post('/tasks', saveTask) // Salvar
routes.put('/tasks/:id', updateTask) // Atualizar por id 
routes.patch('/tasks/:id', finishedTask) // Alterar apenas um registro no banco
routes.delete('/tasks/:id', removeTask) // Remove por id 

export default routes