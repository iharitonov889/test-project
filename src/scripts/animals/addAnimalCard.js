import AnimalCard from '../../models/animalCard.js';

//check status of aPhoto!
const addAnimalCard = async (aType, aBirthday, aNumber, aMoniker, aFood, aDescription, aPhoto) => {
  await AnimalCard.create({ aType, aBirthday, aNumber, aMoniker, aFood, aDescription, aPhoto });
  return {
    message: `Congratulations, animal card added succesfully!`,
  };
};

export { addAnimalCard };
//
