export class AppointmentDto {
    userId;
    doctorId
    slot;

    constructor(model) {
        this.userId = model.userId;
        this.doctorId = model.doctorId;
        this.slot = model.slot;
    }
}