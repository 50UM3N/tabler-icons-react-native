import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconMoodAnnoyed({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mood-annoyed" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 21a9 9 0 1 1 0 -18a9 9 0 0 1 0 18z" /><Path d="M15 14c-2 0 -3 1 -3.5 2.05" /><Path d="M9 10h-.01" /><Path d="M15 10h-.01" /></Svg>;
}
export default IconMoodAnnoyed;