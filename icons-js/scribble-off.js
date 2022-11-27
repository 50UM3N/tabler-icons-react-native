import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconScribbleOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-scribble-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 15c2 3 4 4 7 4c1.95 0 4.324 -1.268 5.746 -3.256m1.181 -2.812a5.97 5.97 0 0 0 .073 -.932c0 -4 -3 -7 -6 -7c-.642 0 -1.239 .069 -1.78 .201m-2.492 1.515c-.47 .617 -.728 1.386 -.728 2.284c0 2.5 2 5 6 5c.597 0 1.203 -.055 1.808 -.156m3.102 -.921c2.235 -.953 4.152 -2.423 5.09 -3.923" /><Path d="M3 3l18 18" /></Svg>;
}
export default IconScribbleOff;