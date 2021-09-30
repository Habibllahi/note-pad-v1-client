import { DateDTO } from "./DateDTO";

export type Task = {
    associatedTodoID: string;
    body: string;
    creationTime?: DateDTO;
    id?: string;
    timeToAccomplishTask: DateDTO;
    updateTime?: DateDTO;
}