import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconLogicNand({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-logic-nand" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M22 12h-3" /><Path d="M2 9h3" /><Path d="M2 15h3" /><Path d="M7 5c6 0 8 3.5 8 7s-2 7 -8 7h-2v-14h2z" /><Circle cx={17} cy={12} r={2} /></Svg>;
}
export default IconLogicNand;