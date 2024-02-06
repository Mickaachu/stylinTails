import express from 'express';
import { addPet } from '../controllers/Pet.js';
const router = express.Router();


router.post('/addPet', addPet)