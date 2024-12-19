def temperature_conversion(temperature, from_scale, to_scale):
    """
    Converts temperature between Celsius, Fahrenheit, and Kelvin.

    Args:
      temperature: The temperature value to convert.
      from_scale: The scale of the input temperature ('C', 'F', or 'K').
      to_scale: The scale to convert the temperature to ('C', 'F', or 'K').

    Returns:
      The converted temperature, or None if invalid input is provided.
    """
    try:
        temperature = float(temperature)  # Ensure temperature is a number
        from_scale = from_scale.upper()
        to_scale = to_scale.upper()

        # Validate scales before proceeding
        valid_scales = {'C', 'F', 'K'}
        if from_scale not in valid_scales or to_scale not in valid_scales:
            raise ValueError("Invalid conversion type")

        if from_scale == to_scale:
            return temperature

        if from_scale == 'C':
            if to_scale == 'F':
                return (temperature * 9 / 5) + 32
            elif to_scale == 'K':
                return temperature + 273.15
        elif from_scale == 'F':
            if to_scale == 'C':
                return (temperature - 32) * 5 / 9
            elif to_scale == 'K':
                return (temperature - 32) * 5 / 9 + 273.15
        elif from_scale == 'K':
            if to_scale == 'C':
                return temperature - 273.15
            elif to_scale == 'F':
                return (temperature - 273.15) * 9 / 5 + 32

    except ValueError as e:
        raise ValueError(str(e))
    except TypeError:
        raise ValueError("Invalid temperature input")