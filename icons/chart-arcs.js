import Svg, { Path, Circle } from "react-native-svg";

function IconChartArcs({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chart-arcs" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={12} cy={12} r={1} /><Path d="M16.924 11.132a5 5 0 1 0 -4.056 5.792" /><Path d="M3 12a9 9 0 1 0 9 -9" /></Svg>;
}

export default IconChartArcs;