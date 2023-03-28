import mongoose from "mongoose"
const { Schema } = mongoose;


const User = new Schema({
    id: {type: String, unique: true, required: true},
    phone: {type: String, required: true},
    name: {type: String, required: true}
});

export default mongoose.model("Users", User);