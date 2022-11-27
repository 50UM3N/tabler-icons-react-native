import Svg, { Path, Line } from 'react-native-svg';
import * as React from "react";
function IconClick({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-click" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Line x1={3} y1={12} x2={6} y2={12} /><Line x1={12} y1={3} x2={12} y2={6} /><Line x1={7.8} y1={7.8} x2={5.6} y2={5.6} /><Line x1={16.2} y1={7.8} x2={18.4} y2={5.6} /><Line x1={7.8} y1={16.2} x2={5.6} y2={18.4} /><Path d="M12 12l9 3l-4 2l-2 4l-3 -9" /></Svg>;
}
export default IconClick;