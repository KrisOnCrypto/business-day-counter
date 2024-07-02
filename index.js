const DEFAULT_LOCALE = 'US';
const WEEKEND_DAYS = {
  US: [0, 6], // Sunday, Saturday
  GULF: [5, 6] // Friday, Saturday
};

function countBusinessDays(date, locale = DEFAULT_LOCALE) {
  const [weekendStart, weekendEnd] = WEEKEND_DAYS[locale] || WEEKEND_DAYS[DEFAULT_LOCALE];
  const year = date.getFullYear();
  const month = date.getMonth();
  let businessDaysCount = 0;

  const daysInMonth = new Date(year, month + 1, 0).getDate();

  for (let day = 1; day <= daysInMonth; day++) {
    const currentDay = new Date(year, month, day).getDay();
    if (currentDay !== weekendStart && currentDay !== weekendEnd) {
      businessDaysCount++;
    }
  }

  return businessDaysCount;
}

module.exports = { countBusinessDays };