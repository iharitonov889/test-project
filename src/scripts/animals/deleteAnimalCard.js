import AnimalCard from '../../models/animalCard.js';

const deleteAnimalCard = async (aId) => {
  await AnimalCard.update({ isActive: 0 }, { where: { id: aId } });
  return {
    message: `Congratulations, animal deleted succesfully succesfully!`,
  };
};

export { deleteAnimalCard };
