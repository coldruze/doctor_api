export class DoctorDto {
    id;
    name;
    spec;
    slots;

    constructor(model) {
        this.id = model.id;
        this.name = model.name;
        this.spec = model.spec;
        this.slots = model.slots;
    }
}