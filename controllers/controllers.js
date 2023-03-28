import { appointmentToDoctor, addNewUser, addNewDoctor } from "../services/userService.js";


class Controller {
    async appointment(req, res) {
        try {
            const {userId, doctorId, slot} = req.body;
            const appointmentData = await appointmentToDoctor(userId, doctorId, slot);

            return res.json(appointmentData);
        } catch (e) {
            console.log(e);
            return res.status(400).json({message: "Произошла ошибка"});
        }
    }

    async addUser(req, res) {
        try {
            const {phone, name} = req.body;
            const userData = await addNewUser(phone, name);

            return res.json(userData);
        } catch (e) {
            console.log(e);
            return res.status(400).json({message: "Произошла ошибка"});
        }
    }

    async addDoctor(req, res) {
        try {
            const {name, spec, slots} = req.body;
            const doctorData = await addNewDoctor(name, spec, slots);

            return res.json(doctorData);
        } catch (e) {
            console.log(e);
            return res.status(400).json({message: "Произошла ошибка"});
        }
    }
}

export const { appointment, addUser, addDoctor } = new Controller();