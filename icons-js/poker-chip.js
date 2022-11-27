import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconPokerChip({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-poker-chip" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={12} cy={12} r={9} /><Circle cx={12} cy={12} r={5} /><Path d="M12 3v4" /><Path d="M12 17v4" /><Path d="M3 12h4" /><Path d="M17 12h4" /><Path d="M18.364 5.636l-2.828 2.828" /><Path d="M8.464 15.536l-2.828 2.828" /><Path d="M5.636 5.636l2.828 2.828" /><Path d="M15.536 15.536l2.828 2.828" /></Svg>;
}
export default IconPokerChip;