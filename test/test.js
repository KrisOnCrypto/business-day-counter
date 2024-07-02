const { expect } = require('chai');
const { countBusinessDays } = require('../index');

describe('Business Day Counter', function() {
  it('should count business days in a month (US locale)', function() {
    const date = new Date(2023, 6); // July 2023
    const businessDays = countBusinessDays(date);
    expect(businessDays).to.equal(21);
  });

  it('should count business days in a month (GULF locale)', function() {
    const date = new Date(2023, 6); // July 2023
    const businessDays = countBusinessDays(date, 'GULF');
    expect(businessDays).to.equal(22);
  });
});