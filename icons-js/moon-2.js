import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconMoon2({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-moon-2" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M16.418 4.157a8 8 0 0 0 0 15.686" /><Circle cx={12} cy={12} r={9} /></Svg>;
}
export default IconMoon2;