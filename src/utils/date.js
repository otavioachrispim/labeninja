import { format } from "date-fns";

export default function getFormatDate(
  date = new Date(),
  dateFormat = "dd/MM/yyyy"
) {
  return format(new Date(date), dateFormat);
}
