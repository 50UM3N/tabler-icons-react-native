import Svg, { Path, Circle, Line } from 'react-native-svg';
import * as React from "react";
function IconWorld({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-world" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={12} cy={12} r={9} /><Line x1={3.6} y1={9} x2={20.4} y2={9} /><Line x1={3.6} y1={15} x2={20.4} y2={15} /><Path d="M11.5 3a17 17 0 0 0 0 18" /><Path d="M12.5 3a17 17 0 0 1 0 18" /></Svg>;
}
export default IconWorld;