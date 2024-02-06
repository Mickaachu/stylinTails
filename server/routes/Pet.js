import express from 'express';
import { addPet } from '../controllers/pets/Pet.controller.js';
const petRouter = express.Router();


petRouter.post('/addPet', addPet)

export default petRouter;