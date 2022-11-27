import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconBuildingFactory2({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-building-factory-2" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 21h18" /><Path d="M5 21v-12l5 4v-4l5 4h4" /><Path d="M19 21v-8l-1.436 -9.574a0.5 .5 0 0 0 -.495 -.426h-1.145a0.5 .5 0 0 0 -.494 .418l-1.43 8.582" /><Path d="M9 17h1" /><Path d="M14 17h1" /></Svg>;
}
export default IconBuildingFactory2;