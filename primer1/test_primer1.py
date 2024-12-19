import pytest
from primer1 import temperature_conversion

# Run all the tests: pytest -v  test_primer_1.py
# Run tests with 'celsius' in the function name:  pytest -v -k "celsius"

# Fahrenheit to Celsius
@pytest.mark.parametrize(
    "temperature, from_scale, to_scale, expected",
    [
        (32, 'F', 'C', 0),
        (50, 'F', 'C', 10),
        (77, 'F', 'C', 25),
        (212, 'F', 'C', 100),
    ],
)
def test_fahrenheit_to_celsius_positive(temperature, from_scale, to_scale, expected):
    assert temperature_conversion(temperature, from_scale, to_scale) == pytest.approx(expected, abs=0.01)

@pytest.mark.parametrize(
    "temperature, from_scale, to_scale, expected",
    [
        (-40, 'F', 'C', -40),
        (-20, 'F', 'C', -28.89),
        (0, 'F', 'C', -17.78),
    ],
)
def test_fahrenheit_to_celsius_negative(temperature, from_scale, to_scale, expected):
    assert temperature_conversion(temperature, from_scale, to_scale) == pytest.approx(expected, abs=0.01)

@pytest.mark.parametrize(
    "temperature, from_scale, to_scale, expected",
    [
        ('32', 'F', 'C', 0),
        ('50', 'F', 'C', 10),
        ('77', 'F', 'C', 25),
    ],
)
def test_fahrenheit_to_celsius_string_input(temperature, from_scale, to_scale, expected):
    assert temperature_conversion(temperature, from_scale, to_scale) == pytest.approx(expected, abs=0.01)

@pytest.mark.parametrize(
    "temperature, from_scale, to_scale, expected",
    [
        (32, 'F', 'c', 0),
        (50, 'F', 'C', 10),
        (77, 'F', 'c', 25),
    ],
)
def test_fahrenheit_to_celsius_case_insensitive(temperature, from_scale, to_scale, expected):
    assert temperature_conversion(temperature, from_scale, to_scale) == pytest.approx(expected, abs=0.01)


# Celsius to Fahrenheit
@pytest.mark.parametrize(
    "temperature, from_scale, to_scale, expected",
    [
        (0, 'C', 'F', 32),
        (10, 'C', 'F', 50),
        (25, 'C', 'F', 77),
        (100, 'C', 'F', 212),
    ],
)
def test_celsius_to_fahrenheit_positive(temperature, from_scale, to_scale, expected):
    assert temperature_conversion(temperature, from_scale, to_scale) == pytest.approx(expected, abs=0.01)

@pytest.mark.parametrize(
    "temperature, from_scale, to_scale, expected",
    [
        (-40, 'C', 'F', -40),
        (-20, 'C', 'F', -4),
        (-17.78, 'C', 'F', 0),
    ],
)
def test_celsius_to_fahrenheit_negative(temperature, from_scale, to_scale, expected):
    assert temperature_conversion(temperature, from_scale, to_scale) == pytest.approx(expected, abs=0.01)

@pytest.mark.parametrize(
    "temperature, from_scale, to_scale, expected",
    [
        ('0', 'C', 'F', 32),
        ('10', 'C', 'F', 50),
        ('25', 'C', 'F', 77),
    ],
)
def test_celsius_to_fahrenheit_string_input(temperature, from_scale, to_scale, expected):
    assert temperature_conversion(temperature, from_scale, to_scale) == pytest.approx(expected, abs=0.01)

@pytest.mark.parametrize(
    "temperature, from_scale, to_scale, expected",
    [
        (0, 'C', 'f', 32),
        (10, 'C', 'F', 50),
        (25, 'C', 'f', 77),
    ],
)
def test_celsius_to_fahrenheit_case_insensitive(temperature, from_scale, to_scale, expected):
    assert temperature_conversion(temperature, from_scale, to_scale) == pytest.approx(expected, abs=0.01)


# Same scale conversions
@pytest.mark.parametrize(
    "temperature, from_scale, to_scale, expected",
    [
        (0, 'C', 'C', 0),
        (100, 'C', 'C', 100),
        (-40, 'C', 'C', -40),
    ],
)
def test_celsius_to_celsius(temperature, from_scale, to_scale, expected):
    assert temperature_conversion(temperature, from_scale, to_scale) == expected

@pytest.mark.parametrize(
    "temperature, from_scale, to_scale, expected",
    [
        (32, 'F', 'F', 32),
        (212, 'F', 'F', 212),
        (-40, 'F', 'F', -40),
    ],
)
def test_fahrenheit_to_fahrenheit(temperature, from_scale, to_scale, expected):
    assert temperature_conversion(temperature, from_scale, to_scale) == expected


# Error handling
@pytest.mark.parametrize(
    "temperature, from_scale, to_scale",
    [
        ('abc', 'C', 'F'),
        (None, 'C', 'F'),
        ('xyz', 'C', 'F'),
    ],
)
def test_error_handling_non_numeric_input(temperature, from_scale, to_scale):
    with pytest.raises(ValueError):
        temperature_conversion(temperature, from_scale, to_scale)

@pytest.mark.parametrize(
    "temperature, from_scale, to_scale",
    [
        (32, 'C', 'B'),
        (0, 'C', 'X'),
    ],
)
def test_error_handling_invalid_conversion_type(temperature, from_scale, to_scale):
    with pytest.raises(ValueError):
        temperature_conversion(temperature, from_scale, to_scale)


# Kelvin support
@pytest.mark.parametrize(
    "temperature, from_scale, to_scale, expected",
    [
        (0, 'C', 'K', 273.15),
        (10, 'C', 'K', 283.15),
        (25, 'C', 'K', 298.15),
        (100, 'C', 'K', 373.15),
    ],
)
def test_celsius_to_kelvin(temperature, from_scale, to_scale, expected):
    assert temperature_conversion(temperature, from_scale, to_scale) == pytest.approx(expected, abs=0.01)

@pytest.mark.parametrize(
    "temperature, from_scale, to_scale, expected",
    [
        (32, 'F', 'K', 273.15),
        (50, 'F', 'K', 283.15),
        (77, 'F', 'K', 298.15),
        (212, 'F', 'K', 373.15),
    ],
)
def test_fahrenheit_to_kelvin(temperature, from_scale, to_scale, expected):
    assert temperature_conversion(temperature, from_scale, to_scale) == pytest.approx(expected, abs=0.01)

@pytest.mark.parametrize(
    "temperature, from_scale, to_scale, expected",
    [
        (273.15, 'K', 'C', 0),
        (283.15, 'K', 'C', 10),
        (373.15, 'K', 'C', 100),
    ],
)
def test_kelvin_to_celsius(temperature, from_scale, to_scale, expected):
    assert temperature_conversion(temperature, from_scale, to_scale) == pytest.approx(expected, abs=0.01)

@pytest.mark.parametrize(
    "temperature, from_scale, to_scale, expected",
    [
        (273.15, 'K', 'F', 32),
        (283.15, 'K', 'F', 50),
        (373.15, 'K', 'F', 212),
    ],
)
def test_kelvin_to_fahrenheit(temperature, from_scale, to_scale, expected):
    assert temperature_conversion(temperature, from_scale, to_scale) == pytest.approx(expected, abs=0.01)

@pytest.mark.parametrize(
    "temperature, from_scale, to_scale, expected",
    [
        (0, 'C', 'k', 273.15),
        (10, 'C', 'K', 283.15),
        (25, 'C', 'k', 298.15),
    ],
)
def test_kelvin_case_insensitive(temperature, from_scale, to_scale, expected):
    assert temperature_conversion(temperature, from_scale, to_scale) == pytest.approx(expected, abs=0.01)

@pytest.mark.parametrize(
    "temperature, from_scale, to_scale, expected",
    [
        (273.15, 'K', 'K', 273.15),
        (300, 'K', 'K', 300),
        (0, 'K', 'K', 0),
    ],
)
def test_kelvin_to_kelvin(temperature, from_scale, to_scale, expected):
    assert temperature_conversion(temperature, from_scale, to_scale) == expected