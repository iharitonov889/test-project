import { addAnimal } from '../scripts/animals/addAnimal.js';
const animalContoller = {
  addAnimal: async (req, res) => {
    const { aType, aBirthday, aNumber, aMoniker, aFood, aDescription } = req.body;
    const aPhoto = req.file ? '/images/' + req.file.filename : null;
    const classInstance = await addAnimal(
      aType,
      aBirthday,
      aNumber,
      aMoniker,
      aFood,
      aDescription,
      aPhoto,
    );

    if (classInstance.message) {
      return res.status(200).json({
        message: `${classInstance.message}`,
      });
    }
  },
  /*
  editAnimal: async (req, res) => {},

  deleteAnimal: async (req, res) => {},
  */
};
export default animalContoller;
