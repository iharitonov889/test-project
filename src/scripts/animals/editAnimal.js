import Animal from '../../models/animal.js';

const editAnimal = async (kind, description) => {
  await Animal.update({ kind: kind, description: description });
  return {
    message: `Congratulations, animal updated succesfully!`,
  };
};

export { editAnimal };
