import AnimalCard from '../../models/animalCard.js';

const addAnimalCard = async (aType, aBirthday, aNumber, aMoniker, aFood, aDescription) => {
  /*
    const emailRegex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;

  if (!emailRegex.test(email)) {
    return new emailValidation(
      "The email can contain only latin characters or digits, and special letter '@'",
    );
  }
*/

  await AnimalCard.create({ aType, aBirthday, aNumber, aMoniker, aFood, aDescription });
  return {
    message: `Congratulations, animal card added succesfully!`,
  };
};

export { addAnimalCard };
//
