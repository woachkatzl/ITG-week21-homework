import { Chart } from "react-google-charts";

export const data = [
    ["Activity", "Daily time share"],
    ["Actually moving passengers", 2],
    ["Alarm activated, no trouble found", 15],
    ["Somebody got sick", 7],
    ["Somebody jumped on tracks", 20],
    ["Somebody got stabbed", 4],
    ["Maintenance issues", 30]
];

export const options = {
    title: "How I see Toronto subway operations",
};

function MyChart() {
    return (
        <Chart
            chartType="PieChart"
            data={data}
            options={options}
            width="100%"
            height="400px"
            legendToggle
        />
    )
}

export { MyChart };