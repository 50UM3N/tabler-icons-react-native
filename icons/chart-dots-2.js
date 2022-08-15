import Svg, { Path, Circle } from "react-native-svg";

function IconChartDots2({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chart-dots-2" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 3v18h18" /><Circle cx={9} cy={15} r={2} /><Circle cx={13} cy={5} r={2} /><Circle cx={18} cy={12} r={2} /><Path d="M21 3l-6 1.5" /><Path d="M14.113 6.65l2.771 3.695" /><Path d="M16 12.5l-5 2" /></Svg>;
}

export default IconChartDots2;