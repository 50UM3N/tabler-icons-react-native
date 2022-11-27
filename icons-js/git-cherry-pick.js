import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconGitCherryPick({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-git-cherry-pick" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={7} cy={12} r={3} /><Path d="M7 3v6" /><Path d="M7 15v6" /><Path d="M13 7h2.5l1.5 5l-1.5 5h-2.5" /><Path d="M17 12h3" /></Svg>;
}
export default IconGitCherryPick;