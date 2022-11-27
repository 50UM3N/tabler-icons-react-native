import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconMoodXd({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mood-xd" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={12} cy={12} r={9} /><Path d="M12 21a9 9 0 1 1 0 -18a9 9 0 0 1 0 18z" /><Path d="M9 14h6a3 3 0 1 1 -6 0z" /><Path d="M9 8l6 3" /><Path d="M9 11l6 -3" /></Svg>;
}
export default IconMoodXd;