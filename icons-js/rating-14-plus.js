import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconRating14Plus({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-rating-14-plus" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={12} cy={12} r={9} /><Path d="M7 15v-6" /><Path d="M15.5 12h3" /><Path d="M17 10.5v3" /><Path d="M12.5 15v-6m-2.5 0v4h3" /></Svg>;
}
export default IconRating14Plus;