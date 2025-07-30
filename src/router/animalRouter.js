import express from 'express';
import animalController from '../controllers/animalContoller.js';

const router = express.Router();

router.post('/addAnimal', animalController.addAnimal);
//router.get('/getAnimals', animalController.getAnimals);
router.delete('/deleteAnimal', animalController.deleteAnimal);
router.post('editAnimal', animalController.editAnimal);

export default router;
