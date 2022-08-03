const filterChartData = function (data, startDate, endDate) {
  if (startDate && endDate) {
     return data = data?.filter((item) => {
      if (startDate <= item.date_ms && item.date_ms <= endDate) {
        return item;
      }
    });
  }
}

module.exports = filterChartData;