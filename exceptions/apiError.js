export class ApiError extends Error {
    constructor(value, ...params) {
        super(...params);
        this.value = value;
    }
}