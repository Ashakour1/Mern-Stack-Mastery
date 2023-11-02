const mongoose = require('mongoose');


const goalsSchema = mongoose.Schema({
    text : {
        type : String,
        required : [true, 'please add text']
    }
},
{
    timestamps : true
})


// console.log(goalsSchema);

module.exports = mongoose.model('Goal', goalsSchema)