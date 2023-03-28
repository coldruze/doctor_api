import mongoose from "mongoose"
const { Schema } = mongoose;


const Doctor = new Schema({
    id: {type: String, unique: true, required: true},
    name: {type: String, unique: true},
    spec: {type: String, required: true},
    slots: {type: Array, required: true}
});

export default mongoose.model("Doctors", Doctor);