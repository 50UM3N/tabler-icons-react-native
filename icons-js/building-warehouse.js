import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconBuildingWarehouse({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-building-warehouse" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 21v-13l9 -4l9 4v13" /><Path d="M13 13h4v8h-10v-6h6" /><Path d="M13 21v-9a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v3" /></Svg>;
}
export default IconBuildingWarehouse;