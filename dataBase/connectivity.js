const mongoose=require('mongoose')

const connectivity=(url)=>{
    return mongoose.connect(url)
}
module.exports={connectivity}