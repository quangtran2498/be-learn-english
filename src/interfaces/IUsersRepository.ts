
import { User } from "src/models/user.model";
import { AbstractPromise } from "./AbstractRepository";

export interface IUsersRepository extends AbstractPromise<User> {
    findRelationById(id: number): Promise<User>;
}