import Svg, { Path, Rect, Line } from "react-native-svg";

function IconChartBar({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chart-bar" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={3} y={12} width={6} height={8} rx={1} /><Rect x={9} y={8} width={6} height={12} rx={1} /><Rect x={15} y={4} width={6} height={16} rx={1} /><Line x1={4} y1={20} x2={18} y2={20} /></Svg>;
}

export default IconChartBar;