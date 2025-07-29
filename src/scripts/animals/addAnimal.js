import Animal from '../../models/animal.js';

const addAnimal = async (aType, aBirthday, aNumber, aMoniker, aFood, aDescription, aPhoto) => {
  await Animal.create({ aType, aBirthday, aNumber, aMoniker, aFood, aDescription, aPhoto });
  return {
    message: `Congratulations, animal card added succesfully!`,
  };
};

export { addAnimal };

/*
    const emailRegex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;

  if (!emailRegex.test(email)) {
    return new emailValidation(
      "The email can contain only latin characters or digits, and special letter '@'",
    );
  }
*/
