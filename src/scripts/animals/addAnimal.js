import Animal from '../../models/animal.js';

const addAnimal = async (kind, description) => {
  await Animal.create({ kind, description });
  return {
    message: `Congratulations, animal added succesfully!`,
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
