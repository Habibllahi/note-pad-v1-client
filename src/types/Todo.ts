import { DateDTO } from "./DateDTO";

export type Todo = {
    creationTime?: DateDTO;
    id?: string;
    title: string;
    updateTime?: DateDTO;
    
}