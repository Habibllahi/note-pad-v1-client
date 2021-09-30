import { DateDTO } from "./DateDTO";

export type Note = {
    body : string,
    creationTime? : DateDTO,
    id? : string
    title : string,
    updateTime? : DateDTO
}