import Svg, { Path, Polyline, Line } from 'react-native-svg';
import * as React from "react";
function IconSwitchVertical({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-switch-vertical" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Polyline points="3 8 7 4 11 8" /><Line x1={7} y1={4} x2={7} y2={13} /><Polyline points="13 16 17 20 21 16" /><Line x1={17} y1={10} x2={17} y2={20} /></Svg>;
}
export default IconSwitchVertical;