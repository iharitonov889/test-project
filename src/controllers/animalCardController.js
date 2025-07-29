import { addAnimalCard } from '../scripts/animals/addAnimalCard.js';
import { deleteAnimalCard } from '../scripts/animals/deleteAnimalCard.js';
import { editAnimalCard } from '../scripts/animals/editAnimalCard.js';

const animalCardContoller = {
  addAnimalCard: async (req) => {
    //aType - one animal to many animal Cards
    const { aType, aBirthday, aNumber, aMoniker, aFood, aDescription } = req.body;
    const aPhoto = req.file ? '/images/' + req.file.filename : null;
    const classInstance = await addAnimalCard(
      aType,
      aBirthday,
      aNumber,
      aMoniker,
      aFood,
      aDescription,
      aPhoto,
    );

    if (classInstance.message) {
      return {
        message: `${classInstance.message}`,
      };
    }
  },

  deleteAnimalCard: async (req) => {
    const { aId } = req.body;
    const classInstance = await deleteAnimalCard(aId);
    if (classInstance.message) {
      return {
        message: `${classInstance.message}`,
      };
    }
  },

  editAnimalCard: async (req) => {
    const { aId } = req.body;
    const classInstance = await editAnimalCard(aId);
    if (classInstance.message) {
      return {
        message: `${classInstance.message}`,
      };
    }
  },
};

export default animalCardContoller;
