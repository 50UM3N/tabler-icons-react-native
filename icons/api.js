import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconApi({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-api" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 13h5" /><Path d="M12 16v-8h3a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-3" /><Path d="M20 8v8" /><Path d="M9 16v-5.5a2.5 2.5 0 0 0 -5 0v5.5" /></Svg>;
}
export default IconApi;