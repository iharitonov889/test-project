import Animal from '../../models/animal.js';

const deleteAnimal = async (aId) => {
  await Animal.update({ isActive: 0 }, { where: { id: aId } });
  return {
    message: `Congratulations, animal deleted succesfully succesfully!`,
  };
};

export { deleteAnimal };
