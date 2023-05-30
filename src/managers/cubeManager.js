const cubes = [];
const uniqid = require('uniqid');

exports.getAll = () => cubes.slice();
exports.create = (name, description, imageUrl, difficultyLevel) => {

    const newCube =
    {
        name,
        description,
        imageUrl,
        difficultyLevel,
        id: uniqid(),
    }
    cubes.push(newCube);

    return newCube;
}
