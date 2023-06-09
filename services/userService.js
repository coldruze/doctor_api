import User from "../models/user.js";
import Doctor from "../models/doctor.js";
import AppointmentModel from "../models/appointmentModel.js";
import { v4 as uuidv4 } from 'uuid';
import { UserDto } from "../dto/userDto.js";
import { DoctorDto } from "../dto/doctorDto.js";
import { ApiError } from "../exceptions/apiError.js";
import {AppointmentDto} from "../dto/appointmentDto.js";


class UserService {
    async appointmentToDoctor(userId, doctorId, slot) {
        const candidate = await AppointmentModel.findOne({userId, doctorId});
        const doctor = await Doctor.findOne({id: doctorId});
        const user = await User.findOne({id: userId});

        if (!doctor) {
            throw new ApiError(400, "Такого доктора не существует");
        } else if (!user) {
            throw new ApiError(400, "Такого пользователя не существует");
        } else if (candidate) {
            throw new ApiError(400,"Пользователь уже записан к этому доктору");
        }

        let slots = doctor.slots;
        slots = slots.map(el => +el);

        if (!slots.includes(slot)) {
            throw new ApiError(400,"Запись на выбранное время невозможна");
        }

        slots.splice(slots.indexOf(slot), 1);
        slots = slots.map(el => new Date(el));

        await Doctor.findOneAndUpdate({id: doctorId}, {slots}, {new: true});

        const appointment = await AppointmentModel.create({userId, doctorId, slot: new Date(slot)});

        return new AppointmentDto(appointment);
    }

    async addNewUser(phone, name) {
        const candidate = await User.findOne({phone});

        if (candidate) {
            throw new ApiError(400,"Пользователь с таким номером телефона уже существует");
        }

        const userId = uuidv4();
        const user = await User.create({id: userId, phone, name});

        return new UserDto(user);
    }

    async addNewDoctor(name, spec, slots) {
        const candidate = await Doctor.findOne({name, spec});

        if (candidate) {
            throw new ApiError(400,"Такой доктор уже существует");
        }

        const doctorId = uuidv4();
        const timeSlots = [];

        for (let time of slots) {
            timeSlots.push(new Date(time));
        }

        const doctor = await Doctor.create({id: doctorId, name, spec, slots: timeSlots});

        return new DoctorDto(doctor);
    }
}

export const { appointmentToDoctor, addNewUser, addNewDoctor } = new UserService();