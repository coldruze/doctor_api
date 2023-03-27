import { appointmentToDoctor } from "../services/userService.js";


class Controller {
    async appointment(req, res) {
        try {

        } catch (e) {
            console.log(e);
            return res.status(400).json({message: "Произошла ошибка"});
        }
    }
}

export const { appointment } = new Controller();