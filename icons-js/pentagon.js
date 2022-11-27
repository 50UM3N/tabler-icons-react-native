import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconPentagon({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-pentagon" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M13.2 3.394l7.033 5.237a2 2 0 0 1 .7 2.247l-2.973 8.764a2 2 0 0 1 -1.894 1.358h-8.12a2 2 0 0 1 -1.9 -1.373l-2.896 -8.765a2 2 0 0 1 .696 -2.225l6.958 -5.237a2 2 0 0 1 2.397 -.006z" /></Svg>;
}
export default IconPentagon;