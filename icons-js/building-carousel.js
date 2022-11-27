import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconBuildingCarousel({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-building-carousel" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={12} cy={12} r={6} /><Circle cx={5} cy={8} r={2} /><Circle cx={12} cy={4} r={2} /><Circle cx={19} cy={8} r={2} /><Circle cx={5} cy={16} r={2} /><Circle cx={19} cy={16} r={2} /><Path d="M8 22l4 -10l4 10" /></Svg>;
}
export default IconBuildingCarousel;