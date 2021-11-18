import {parseForecast} from "../forecastParser";

const forecast = require('./forecast.json');
const forecastParsed = require('./forecastParsed.json');

test('forecast Array should be parsed correctly', () => {

 expect(parseForecast(forecast)).toEqual(forecastParsed);
});
