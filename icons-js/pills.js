import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconPills({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-pills" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={8} cy={8} r={5} /><Circle cx={17} cy={17} r={4} /><Path d="M4.5 4.5l7 7" /><Path d="M19.5 14.5l-5 5" /></Svg>;
}
export default IconPills;