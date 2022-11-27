import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconMiliratyAward({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-miliraty-award" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={12} cy={13} r={4} /><Path d="M9 10l-1 -2h-5l2.48 5.788a2 2 0 0 0 1.84 1.212h1.18" /><Path d="M15 10l1 -2h5l-2.48 5.788a2 2 0 0 1 -1.84 1.212h-1.18" /></Svg>;
}
export default IconMiliratyAward;