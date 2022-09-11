const express=require('express')
const { addStudents ,allStudents,updateStudents} = require('../controller')
const router=express.Router()



//apis
router.post('/add-students-details',addStudents)

router.get('/show-students-details',allStudents)

router.put('/update-students-details/:id',updateStudents)






module.exports=router