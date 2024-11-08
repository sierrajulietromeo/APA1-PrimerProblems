// Import the necessary modules
import temperatureConversion  from './primer1.js'; // Adjust paths as needed

// Making sure you are in the same folder, you can run this test file with: jest primer1.test.js
// To run some tests: jest -t "Fahrenheit" primer1.test.js (runs all tests with "Fahrenheit" in their name)
// To run one specific test, e.g. jest -t "should convert positive Fahrenheit to Celsius" primer1.test.js

describe('temperatureConversion', () => {
  describe('Fahrenheit to Celsius', () => {
    test('should convert positive Fahrenheit to Celsius', () => {
      expect(temperatureConversion(32, 'C')).toBeCloseTo(0, 4);
      expect(temperatureConversion(50, 'C')).toBeCloseTo(10, 4);
      expect(temperatureConversion(77, 'C')).toBeCloseTo(25, 4);
      expect(temperatureConversion(212, 'C')).toBeCloseTo(100, 4);
    });

    test('should convert negative Fahrenheit to Celsius', () => {
      expect(temperatureConversion(-40, 'C')).toBeCloseTo(-40, 4);
      expect(temperatureConversion(-20, 'C')).toBeCloseTo(-28.89, 4);
      expect(temperatureConversion(0, 'C')).toBeCloseTo(-17.78, 4);
    });

    test('should handle Fahrenheit input as a string', () => {
      expect(temperatureConversion('32', 'C')).toBeCloseTo(0, 4);
      expect(temperatureConversion('50', 'C')).toBeCloseTo(10, 4);
      expect(temperatureConversion('77', 'C')).toBeCloseTo(25, 4);
    });

    test('should handle case-insensitive Celsius input', () => {
      expect(temperatureConversion(32, 'c')).toBeCloseTo(0, 4);
      expect(temperatureConversion(50, 'C')).toBeCloseTo(10, 4);
      expect(temperatureConversion(77, 'c')).toBeCloseTo(25, 4);
    });
  });

  describe('Celsius to Fahrenheit', () => {
    test('should convert positive Celsius to Fahrenheit', () => {
      expect(temperatureConversion(0, 'F')).toBeCloseTo(32, 4);
      expect(temperatureConversion(10, 'F')).toBeCloseTo(50, 4);
      expect(temperatureConversion(25, 'F')).toBeCloseTo(77, 4);
      expect(temperatureConversion(100, 'F')).toBeCloseTo(212, 4);
    });

    test('should convert negative Celsius to Fahrenheit', () => {
      expect(temperatureConversion(-40, 'F')).toBeCloseTo(-40, 4);
      expect(temperatureConversion(-20, 'F')).toBeCloseTo(-4, 4);
      expect(temperatureConversion(-17.78, 'F')).toBeCloseTo(0, 4);
    });

    test('should handle Celsius input as a string', () => {
      expect(temperatureConversion('0', 'F')).toBeCloseTo(32, 4);
      expect(temperatureConversion('10', 'F')).toBeCloseTo(50, 4);
      expect(temperatureConversion('25', 'F')).toBeCloseTo(77, 4);
    });

    test('should handle case-insensitive Fahrenheit input', () => {
      expect(temperatureConversion(0, 'f')).toBeCloseTo(32, 4);
      expect(temperatureConversion(10, 'F')).toBeCloseTo(50, 4);
      expect(temperatureConversion(25, 'f')).toBeCloseTo(77, 4);
    });
  });

  describe('Error handling', () => {
    test('should throw an error for non-numeric temperature input', () => {
      expect(() => temperatureConversion('abc', 'C')).toThrow();
      expect(() => temperatureConversion(null, 'C')).toThrow();
      expect(() => temperatureConversion(undefined, 'C')).toThrow();
    });

    test('should throw an error for invalid conversion type', () => {
      expect(() => temperatureConversion(32, 'B')).toThrow();
      expect(() => temperatureConversion(0, 'X')).toThrow();
    });
  });

  describe('Kelvin support', () => {
    test('should convert Celsius to Kelvin', () => {
      expect(temperatureConversion(0, 'K')).toBeCloseTo(273.15, 4);
      expect(temperatureConversion(10, 'K')).toBeCloseTo(283.15, 4);
      expect(temperatureConversion(25, 'K')).toBeCloseTo(298.15, 4);
      expect(temperatureConversion(100, 'K')).toBeCloseTo(373.15, 4);
    });

    test('should convert Fahrenheit to Kelvin', () => {
      expect(temperatureConversion(32, 'K')).toBeCloseTo(273.15, 4);
      expect(temperatureConversion(50, 'K')).toBeCloseTo(283.15, 4);
      expect(temperatureConversion(77, 'K')).toBeCloseTo(298.15, 4);
      expect(temperatureConversion(212, 'K')).toBeCloseTo(373.15, 4);
    });

    test('should handle case-insensitive Kelvin input', () => {
      expect(temperatureConversion(0, 'k')).toBeCloseTo(273.15, 4);
      expect(temperatureConversion(10, 'K')).toBeCloseTo(283.15, 4);
      expect(temperatureConversion(25, 'k')).toBeCloseTo(298.15, 4);
    });
  });
});
