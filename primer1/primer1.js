const temperatureConversion = (temperature, fromScale, toScale) => {
    // Explicit validation for null, undefined, and non-numeric inputs
    if (temperature === null || temperature === undefined ||
        (typeof temperature === 'string' && isNaN(Number(temperature)))) {
        throw new Error('Invalid temperature input');
    }

    // Convert input to number
    const numTemp = Number(temperature);

    // Normalise conversion type to uppercase
    toScale = String(toScale).toUpperCase();
    fromScale = String(fromScale).toUpperCase();

    // Validate conversion type
    if (!['C', 'F', 'K'].includes(toScale) || !['C', 'F', 'K'].includes(fromScale)) {
        throw new Error('Invalid conversion type or input scale');
    }

    // Conversion helpers
    const toFahrenheit = (celsius) => (celsius * 9 / 5) + 32;
    const toCelsius = (fahrenheit) => (fahrenheit - 32) * 5 / 9;
    const toKelvin = (celsius) => celsius + 273.15;

    // Conversion logic
    switch (toScale) {
        case 'C':
            return fromScale === 'F' ? toCelsius(numTemp) : fromScale === 'K' ? numTemp - 273.15 : numTemp;
        case 'F':
            return fromScale === 'C' ? toFahrenheit(numTemp) : fromScale === 'K' ? toFahrenheit(numTemp - 273.15) : numTemp;
        case 'K':
            // Handles both Celsius and Fahrenheit to Kelvin
            return fromScale === 'K' ? numTemp : toKelvin(fromScale === 'F' ? toCelsius(numTemp) : numTemp);
    }
};


console.log(temperatureConversion(60.1, 'C', 'F'))
console.log(temperatureConversion(60.1, 'C', 'C'))
console.log(temperatureConversion(60.1, 'F', 'C'))
console.log(temperatureConversion(-17.78, 'C', 'F'))

export default temperatureConversion;