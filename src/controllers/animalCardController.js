import { addAnimalCard } from '../scripts/animals/addAnimalCard.js';
const animalCardContoller = {
  addAnimalCard: async (req, res) => {
    const { login, password, email, phone } = req.body;
    const classInstance = await addAnimalCard(login, password, email, phone);
    if (classInstance.message) {
      return res.status(200).json({
        message: `${classInstance.message}`,
      });
    }
  },
  /*
  editAnimalCard: async (req, res) => {},
  deleteAnimalCard: async (req, res) => {},
  */
};
export default animalCardContoller;
