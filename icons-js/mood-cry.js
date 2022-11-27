import Svg, { Path, Line } from 'react-native-svg';
import * as React from "react";
function IconMoodCry({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mood-cry" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Line x1={9} y1={10} x2={9.01} y2={10} /><Line x1={15} y1={10} x2={15.01} y2={10} /><Path d="M9.5 15.25a3.5 3.5 0 0 1 5 0" /><Path d="M17.566 17.606a2 2 0 1 0 2.897 .03l-1.463 -1.636l-1.434 1.606z" /><Path d="M20.865 13.517a8.937 8.937 0 0 0 .135 -1.517a9 9 0 1 0 -9 9c.69 0 1.36 -.076 2 -.222" /></Svg>;
}
export default IconMoodCry;