import express from 'express';
import { addPet, getUserPets, deletePet, updatePet } from '../controllers/pets/Pet.controller.js';
const petRouter = express.Router();


petRouter.post('/addPet', addPet)
petRouter.get('/getUserPets/:id', getUserPets)
petRouter.delete('/deletePet/:user/:id', deletePet)
petRouter.put('/updatePet', updatePet)

export default petRouter;

