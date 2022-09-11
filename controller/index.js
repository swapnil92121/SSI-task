const studentDetailDataBxase = require('../dataBase/model/studentDetail')



const addStudents = async (req, res) => {
    try {
        const { firstname, lastname, email, address } = req.body
        if (!firstname || !email) {
            res.status(400).json({
                status: 'enter all the data'
            })
        }
        await studentDetailDataBxase.create({ firstname, lastname, email, address })
        res.status(200).json({
            status: 'successfuly added'
        })
    } catch (err) {
        res.status(400).send(err)
    }
}





const allStudents = async (req, res) => {
    try {
        const data = await studentDetailDataBxase.find()
        res.status(200).json({
            data
        })
    } catch (err) {
        res.status(400).send(err)
    }
}





const updateStudents = async (req, res) => {
    try {
        await studentDetailDataBxase.findByIdAndUpdate({ _id: req.params.id }, req.body)
        res.status(200).json({
            'status':'successfuly updated'
        })
    } catch (err) {
        res.status(400).send(err)
    }
}



module.exports = { addStudents, allStudents, updateStudents }