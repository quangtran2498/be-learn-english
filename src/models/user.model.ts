export class User {
    userId?: number;
    name?: string;
    email?: string;
    isActive?: boolean;
    password?:string
    constructor({ userId, name, email, isActive,password }) {
        if (userId !== null) this.userId = userId;
        if (name !== null) this.name = name;
        if (email !== null) this.email = email;
        if (isActive !== null) this.isActive = isActive;
        if (password !== null) this.password = password;
    }
}
