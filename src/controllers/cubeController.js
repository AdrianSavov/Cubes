const router = require('express').Router();
const cubeManager = require('../managers/cubeManager');
const accessoryManager = require('../managers/accessoryManager');

router.get('/create', (req, res) => {
   
    res.render('create')
});

router.post('/create', async (req, res) => {
    const {
        name,
        description,
        imageUrl,
        difficultyLevel,
    } = req.body;

    await cubeManager.create(
        name,
        description,
        imageUrl,
        difficultyLevel,
    );

    res.redirect('/')
});
router.get('/:cubeId/details', async (req, res) => {
    const cube = await cubeManager.getOneWithAccessories(req.params.cubeId).lean();
  
    console.log(cube);
    if (!cube) {
        res.redirect('/404')
    }
    res.render('details', { cube });
});

router.get('/:cubeId/accessories/attach', async (req, res) => {
    const cube = await cubeManager.getOne(req.params.cubeId).lean();
    const accessories = await accessoryManager.getRestAccessories(cube.accessories).lean();
    const hasAccessories = accessories.length > 0;
    res.render('accessory/attach', { cube, accessories, hasAccessories });
});

router.post('/:cubeId/accessories/attach', async (req, res) => {
    const { accessory }= req.body;
    const cubeId = req.params.cubeId;

    await cubeManager.attachAccessory(cubeId, accessory);

    res.redirect(`/cubes/${cubeId}/details`)
})

module.exports = router;