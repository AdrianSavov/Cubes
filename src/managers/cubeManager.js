const cubes = [];

exports.getAll = () => cubes.slice();
exports.create = (name, description, imageURL, diffLevel) => {

    const newCube =
    {
        name,
        description,
        imageURL,
        diffLevel,
        id: Math.random()
    }
    cubes.push(newCube);
    return newCube;
}