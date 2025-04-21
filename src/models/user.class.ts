export class User {
    firstName: string;
    lastName: string;
    email: string;
    birthDate: number;
    street: string;
    zipcode: number;
    city: string;
    id: string | undefined;


    constructor(obj?: any) {
        this.firstName = obj ? obj.firstName : '';
        this.lastName = obj ? obj.lastName : '';
        this.email = obj ? obj.email : '';
        this.birthDate = obj ? obj.birthDate : '';
        this.street = obj ? obj.street : '';
        this.zipcode = obj ? obj.zipcode : '';
        this.city = obj ? obj.city : '';
    }

    public toJSON() {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            birthDate: this.birthDate,
            street: this.street,
            zipcode: this.zipcode,
            city: this.city,
        }
    }
}