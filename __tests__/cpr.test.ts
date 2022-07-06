import { validateCpr, generateCprs } from '../pages/api/cprs/cpr';

describe('cpr', () => {
  describe('validateCpr', () => {
    test('should return true when cpr meets the modulus 11 rule', () => {
      // Arrange
      const cpr = '1111111118';

      // Act
      const result = validateCpr(cpr);

      // Assert
      expect(result).toBe(true);
    });

    test('should return false when cpr does not meet the modules 11 rule', () => {
      // Arrange
      const cpr = '1412961245';

      // Act
      const result = validateCpr(cpr);

      // Assert
      expect(result).toBeFalsy();
    });
  });

  describe('generateCpr', () => {
    test.each([['130594', 909]])(
      'should generate cprs from birthday',
      (birthday, expectedNumberOfCprs) => {
        // Act
        const cprs = generateCprs(birthday);

        // Arrange
        expect(cprs).toHaveLength(expectedNumberOfCprs);
      }
    );
  });
});
