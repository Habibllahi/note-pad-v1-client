import { DayOfWeek } from "./DayOfWeek";
import { Month } from "./Month";

export type DateDTO = {
    dayOfWeek: DayOfWeek;
    dayOfYear: number;
    dayOfMonth: number;
    month: Month;
    year: number;
    hour: number;
    minute: number;
}