import express from 'express';
import { addPet, getUserPets } from '../controllers/pets/Pet.controller.js';
const petRouter = express.Router();


petRouter.post('/addPet', addPet)
petRouter.get('/getUserPets/:id', getUserPets)

export default petRouter;