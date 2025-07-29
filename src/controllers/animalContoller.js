import { addAnimal } from '../scripts/animals/addAnimal.js';
import { deleteAnimal } from '../scripts/animals/deleteAnimal.js';
import { editAnimal } from '../scripts/animals/editAnimal.js';

const animalContoller = {
  addAnimal: async (req) => {
    const { kind, description } = req.body;
    const classInstance = await addAnimal(kind, description);

    if (classInstance.message) {
      return {
        message: `${classInstance.message}`,
      };
    }
  },

  deleteAnimal: async (req) => {
    const { aId } = req.body;
    const classInstance = await deleteAnimal(aId);
    if (classInstance.message) {
      return {
        message: `${classInstance.message}`,
      };
    }
  },

  editAnimal: async (req) => {
    const { aId } = req.body;
    const classInstance = await editAnimal(aId);
    if (classInstance.message) {
      return {
        message: `${classInstance.message}`,
      };
    }
  },
};
export default animalContoller;
