const router = require('express').Router();
const controller = require('../controller/controller')

router.post('/createUser',controller.addNewUser)
router.get('/findall',controller.findAll)
router.get('/findSalary',controller.FindSalary)
router.get('/findExperience',controller.FindExperience)
router.get('/find3',controller.Find3)
router.put('/updateSalary',controller.updateSalary)
router.delete('/delete',controller.deleteQuerry)

module.exports = router