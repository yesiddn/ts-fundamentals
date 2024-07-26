import { subDays, format } from "date-fns";

const date = new Date(1999, 1, 28);
const response = subDays(date, 30);
const str = format(response, "yyyy-MM-dd");

console.log("Date:", str);
