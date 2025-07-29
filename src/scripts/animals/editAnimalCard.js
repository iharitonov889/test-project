import AnimalCard from '../../models/animalCard.js';

const editAnimalCard = async (aType, aBirthday, aNumber, aMoniker, aFood, aDescription) => {
  await AnimalCard.update({
    aType: aType,
    aBirthday: aBirthday,
    aNumber: aNumber,
    aMoniker: aMoniker,
    aFood: aFood,
    aDescription: aDescription,
  });
  return {
    message: `Congratulations, animal card updated succesfully!`,
  };
};

export { editAnimalCard };
