const Cube = require('../models/Cube');

exports.getAll = async (search, from, to) => {
    let result = await Cube.find().lean();

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

exports.getOne = (cubeId) => Cube.findById(cubeId);
exports.create = async (name, description, imageUrl, difficultyLevel) => {

    const newCube = new Cube({
        name,
        description,
        imageUrl,
        difficultyLevel,
    })
    
    await newCube.save();

    return newCube;
}
exports.attachAccessory = async (cubeId, accessory) => {
   return Cube.findByIdAndUpdate(cubeId, {$push: {accessories: accessory}})
}
