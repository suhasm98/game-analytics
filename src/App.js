import { isWithinInterval, isBefore } from "date-fns";
import dayjs from "dayjs";
import data from "./dataSet.json";
import React, { useEffect, useState } from "react";
import {
  CustomSelect,
  CustomDataGrid,
  CustomDatePicker,
  CustomCharts
} from "./Components";
import { getChartData } from "./helperfunctions";

const DATA = data.map((value) => {
  const dateString = value.date.split("/");
  return {
    ...value,
    dateObj: new Date(dateString[2], dateString[1], dateString[0])
  };
});

export default function App() {
  const [startDateObj, setStartDateObj] = useState(dayjs("2018-11-01"));
  const [startDate, setStartDate] = useState(dayjs("2018-11-01"));
  const [endDateObj, setEndDateObj] = useState(dayjs("2018-11-30"));
  const [endDate, setEndDate] = useState(dayjs("2018-11-30"));
  const [analyticsData, setAnalyticsData] = useState([]);
  const [attribute, setAttribute] = useState("dailyUsers");
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    if (startDate && endDate && isBefore(startDate.$d, endDate.$d)) {
      let tempData = DATA.filter((value) =>
        isWithinInterval(value.dateObj, {
          start: startDate.$d,
          end: endDate.$d
        })
      );
      setAnalyticsData([...tempData]);
    }
  }, [startDate, endDate]);

  useEffect(() => {
    if (analyticsData.length > 0) {
      setChartData([...getChartData(attribute, analyticsData)]);
    }
  }, [analyticsData, attribute]);

  const handleChange = (event) => {
    setAttribute(event.target.value);
    setChartData([...getChartData(attribute, analyticsData)]);
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}> Game Analytics Data </h1>
      <CustomDatePicker
        endDateObj={endDateObj}
        setEndDateObj={setEndDateObj}
        setStartDateObj={setStartDateObj}
        startDateObj={startDateObj}
        setEndDate={setEndDate}
        setStartDate={setStartDate}
      />
      <CustomDataGrid data={analyticsData} />
      <CustomSelect attribute={attribute} handleChange={handleChange} />
      <CustomCharts data={chartData} selectedAttribute={attribute} />
    </>
  );
}
