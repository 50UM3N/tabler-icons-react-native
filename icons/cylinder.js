import Svg, { Path, Ellipse } from 'react-native-svg';
import * as React from "react";
function IconCylinder({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-cylinder" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Ellipse cx={12} cy={6} rx={5} ry={3} /><Path d="M7 6v12c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-12" /></Svg>;
}
export default IconCylinder;