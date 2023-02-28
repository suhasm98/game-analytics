import { groupBy, sumBy } from "lodash";

export function getChartData(attribute, data) {
  let dataArr = [];
  const tempData = groupBy(data, "date");
  if (attribute === "dailyUsers") {
    for (let i in tempData) {
      dataArr.push({ date: i, value: sumBy(tempData[i], "dailyUsers") });
    }
  } else {
    for (let i in tempData) {
      let a = groupBy(tempData[i], "app");
      let b = {};
      for (let i in a) {
        b[i.toLocaleLowerCase().replace(" ", "")] = a[i].length;
      }
      dataArr.push({ data: i, ...b });
    }
  }

  return dataArr;
}
