const uniqid = require('uniqid');
const cubes = [{
    name: 'Neshto',
    description: 'jalkariq',
    imageUrl: 'nqma',
    difficultyLevel: 17,
    id: uniqid(),
}];

exports.getAll = () => cubes.slice();
exports.getOne = (cubeId) => cubes.find(x => x.id === cubeId)
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
