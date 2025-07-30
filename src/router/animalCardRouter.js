import express from 'express';
import animalCardController from '../controllers/animalCardController.js';

const router = express.Router();

router.post('/addAnimalCard', animalCardController.addAnimalCard);
//router.get('/getAnimalsCard', animalCardController.getAnimalsCard);
router.delete('/deleteAnimalCard', animalCardController.deleteAnimalCard);
router.post('editAnimalCard', animalCardController.editAnimalCard);

export default router;
