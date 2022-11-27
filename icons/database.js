import Svg, { Path, Ellipse } from 'react-native-svg';
import * as React from "react";
function IconDatabase({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-database" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Ellipse cx={12} cy={6} rx={8} ry={3} /><Path d="M4 6v6a8 3 0 0 0 16 0v-6" /><Path d="M4 12v6a8 3 0 0 0 16 0v-6" /></Svg>;
}
export default IconDatabase;