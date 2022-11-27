import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconPlaylistAdd({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-playlist-add" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M19 8h-14" /><Path d="M5 12h9" /><Path d="M11 16h-6" /><Path d="M15 16h6" /><Path d="M18 13v6" /></Svg>;
}
export default IconPlaylistAdd;