import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconSkateboard({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-skateboard" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={7} cy={15} r={2} /><Circle cx={17} cy={15} r={2} /><Path d="M3 9a2 1 0 0 0 2 1h14a2 1 0 0 0 2 -1" /></Svg>;
}
export default IconSkateboard;