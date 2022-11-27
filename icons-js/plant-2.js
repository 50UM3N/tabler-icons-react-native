import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconPlant2({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plant-2" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M2 9a10 10 0 1 0 20 0" /><Path d="M12 19a10 10 0 0 1 10 -10" /><Path d="M2 9a10 10 0 0 1 10 10" /><Path d="M12 4a9.7 9.7 0 0 1 2.99 7.5" /><Path d="M9.01 11.5a9.7 9.7 0 0 1 2.99 -7.5" /></Svg>;
}
export default IconPlant2;