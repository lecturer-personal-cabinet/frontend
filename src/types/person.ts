export class Person {
    id: string;
    firstName: string;
    lastName: string;
    patronymic?: string;
    title?: string;
    avatarSrc?: string;

    constructor(id: string,
                firstName: string,
                lastName: string,
                patronymic?: string,
                title?: string,
                avatarSrc?: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.patronymic = patronymic;
        this.title = title;
        this.avatarSrc = avatarSrc;
    }
}