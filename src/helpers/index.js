export const getListData = (value, eventList) => {
  const events = eventList.filter((item) => {
    const dateA = new Date(item.startDate);
    const dateB = new Date(value.$d);
    const dateC = new Date(item.endDate);
    function areDatesOnSameDay(date1, date2, date3) {
      const day1 = new Date(
        date1.getFullYear(),
        date1.getMonth(),
        date1.getDate()
      );
      const day2 = new Date(
        date2.getFullYear(),
        date2.getMonth(),
        date2.getDate()
      );
      const day3 = new Date(
        date3.getFullYear(),
        date3.getMonth(),
        date3.getDate()
      );
      return (
        day1.getTime() === day2.getTime() || day3.getTime() === day2.getTime()
      );
    }
    return areDatesOnSameDay(dateA, dateB, dateC);
  });
  return events;
};
