import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconLogicNot({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-logic-not" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M22 12h-3" /><Path d="M2 9h3" /><Path d="M2 15h3" /><Path d="M5 5l10 7l-10 7z" /><Circle cx={17} cy={12} r={2} /></Svg>;
}
export default IconLogicNot;