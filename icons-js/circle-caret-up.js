import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconCircleCaretUp({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-caret-up" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 9l4 4h-8z" /><Circle cx={12} cy={12} r={9} /></Svg>;
}
export default IconCircleCaretUp;