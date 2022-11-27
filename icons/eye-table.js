import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconEyeTable({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-eye-table" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M8.003 18.003h-.011" /><Path d="M12.003 18.002h-.011" /><Path d="M16.003 18.002h-.011" /><Path d="M4 3h16" /><Path d="M5 3v17a1 1 0 0 0 1 1h12a1 1 0 0 0 1 -1v-17" /><Path d="M14 7h-4" /><Path d="M9 15h1" /><Path d="M14 15h1" /><Path d="M12 11v-4" /></Svg>;
}
export default IconEyeTable;