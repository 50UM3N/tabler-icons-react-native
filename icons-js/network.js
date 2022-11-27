import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconNetwork({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-network" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={12} cy={9} r={6} /><Path d="M12 3c1.333 .333 2 2.333 2 6s-.667 5.667 -2 6" /><Path d="M12 3c-1.333 .333 -2 2.333 -2 6s.667 5.667 2 6" /><Path d="M6 9h12" /><Path d="M3 19h7" /><Path d="M14 19h7" /><Circle cx={12} cy={19} r={2} /><Path d="M12 15v2" /></Svg>;
}
export default IconNetwork;