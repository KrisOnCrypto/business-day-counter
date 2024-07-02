# Business Day Counter

Utility methods to get amount of business days in given month

## Installation

```sh
npm install business-day-counter
```

## Usage

```javascript
const { countBusinessDays } = require('business-day-counter');

const date = new Date(2023, 6); // July 2023
const businessDays = countBusinessDays(date);
console.log(businessDays); // Outputs the number of business days

const businessDaysInGulf = countBusinessDays(date, 'GULF');
console.log(businessDaysInGulf); // Outputs the number of business days considering Friday and Saturday as weekends
```

## API

`countBusinessDays(date, locale)`
- `date` (Date): The date object representing the month to count business days in.
- `locale` (string, optional): The locale to determine the weekend days. Default is 'US' (Saturday and Sunday). Other option is 'GULF' (Friday and Saturday).