const groupByDate = (forecast) =>  {
    forecast.reduce((result, obj) => ({
        ...result,
        [obj['timestamp'].slice(0, 10)]: (result[obj['timestamp'].slice(0, 10)] || []).concat(obj)
    }), {});
}

export const parseForecast = (forecast) => {
    return groupByDate(forecast);
};
