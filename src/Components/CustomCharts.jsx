import {
  LineChart,
  XAxis,
  YAxis,
  Line,
  Bar,
  Tooltip,
  BarChart,
  Legend
} from "recharts";

export default function CustomCharts({ selectedAttribute, data }) {
  return (
    <div style={{ marginTop: "20px" }}>
      {selectedAttribute === "dailyUsers" ? (
        <LineChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="date" allowDuplicatedCategory={false} />
          <YAxis dataKey="value" />
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>
      ) : (
        <BarChart width={730} height={250} data={data}>
          <XAxis dataKey="data" allowDuplicatedCategory={false} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="blast!" fill="#8884d8" />
          <Bar dataKey="carz" fill="#82ca9d" />
          <Bar dataKey="ballyball" fill="#FF0000" />
          <Bar dataKey="screwed" fill="#00FFFF" />
          <Bar dataKey="t-rex" fill="#00008B" />
        </BarChart>
      )}
    </div>
  );
}
