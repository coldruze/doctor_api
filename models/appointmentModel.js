import mongoose from "mongoose"
const { Schema } = mongoose;


const AppointmentModel = new Schema({
    userId: {type: String, required: true},
    doctorId: {type: String, required: true},
    slot: {type: Date, required: true}
});

export default mongoose.model("Appointments", AppointmentModel);