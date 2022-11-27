import Svg, { Path, Line } from 'react-native-svg';
import * as React from "react";
function IconArrowsDown({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrows-down" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Line x1={7} y1={21} x2={7} y2={3} /><Path d="M20 18l-3 3l-3 -3" /><Path d="M4 18l3 3l3 -3" /><Line x1={17} y1={21} x2={17} y2={3} /></Svg>;
}
export default IconArrowsDown;