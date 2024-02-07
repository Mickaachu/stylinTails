import express from 'express';
import { addPet, getUserPets, deletePet } from '../controllers/pets/Pet.controller.js';
const petRouter = express.Router();


petRouter.post('/addPet', addPet)
petRouter.get('/getUserPets/:id', getUserPets)
petRouter.delete('/deletePet/:user/:id', deletePet)
export default petRouter;

