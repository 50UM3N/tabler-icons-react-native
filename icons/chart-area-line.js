import Svg, { Path, Polyline } from "react-native-svg";

function IconChartAreaLine({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chart-area-line" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Polyline points="4 19 8 13 12 15 16 10 20 14 20 19 4 19" /><Polyline points="4 12 7 8 11 10 16 4 20 8" /></Svg>;
}

export default IconChartAreaLine;