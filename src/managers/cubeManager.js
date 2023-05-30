const uniqid = require('uniqid');
const cubes = [{
    name: 'Neshto',
    description: 'jalkariq',
    imageUrl: 'nqma',
    difficultyLevel: 17,
    id: uniqid(),
},
{
    name: 'NISHTO',
    description: 'UJAST',
    imageUrl: 'nqma',
    difficultyLevel: 3,
    id: uniqid(), 
}];

exports.getAll = (search, from, to) => {
    let result = cubes.slice();

    if (search) {
        result = result.filter(cube => cube.name.toLowerCase().includes(search.toLowerCase()));
    }
    if (from) {
        result = result.filter(cube => Number(cube.difficultyLevel) >= Number(from));
    }
    if (to) {
        result = result.filter(cube => Number(cube.difficultyLevel) <= Number(to));

    }
    return result;
}
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
