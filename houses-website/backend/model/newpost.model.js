const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const newpostSchema = new Schema({
    price:{ type:Number, required:true},
    description:{type:String,required:true},
    address:{type:String,required:true},
    bhk:{ type:Number, required:true}
},{
    timestamps:true,
});
const NewPost = mongoose.model('NewPost',newpostSchema);
module.exports = NewPost;