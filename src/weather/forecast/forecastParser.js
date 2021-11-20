const groupByDate = (forecast) =>  {
    return forecast.reduce((result, obj) => ({
        ...result,
        [obj['timestamp'].slice(0, 10)]: (result[obj['timestamp'].slice(0, 10)] || []).concat(obj)
    }), {});
}

const removeDatesWithOnlyOneEntry = (forecast) => {
    Object.entries(forecast).forEach(([date, entries]) => {
        if (entries.length === 1) {
            delete forecast[date];
        }
    });
    return forecast;
};

export const parseForecast = (forecast) => {
    const groupedForecast = groupByDate(forecast);
    return removeDatesWithOnlyOneEntry(groupedForecast);
};
