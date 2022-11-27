import Svg, { Path, Polyline, Line } from 'react-native-svg';
import * as React from "react";
function IconPrompt({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-prompt" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Polyline points="5 7 10 12 5 17" /><Line x1={13} y1={17} x2={19} y2={17} /></Svg>;
}
export default IconPrompt;