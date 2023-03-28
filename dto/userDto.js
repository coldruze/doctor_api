export class UserDto {
    id;
    phone;
    name;

    constructor(model) {
        this.id = model.id;
        this.phone = model.phone;
        this.name = model.name;
    }
}