import Svg, { Path, Rect, Line } from 'react-native-svg';
import * as React from "react";
function IconDeviceMobile({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-device-mobile" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={6} y={3} width={12} height={18} rx={2} /><Line x1={11} y1={4} x2={13} y2={4} /><Line x1={12} y1={17} x2={12} y2={17.01} /></Svg>;
}
export default IconDeviceMobile;