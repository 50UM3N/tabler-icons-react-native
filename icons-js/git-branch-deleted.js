import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconGitBranchDeleted({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-git-branch-deleted" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={7} cy={18} r={2} /><Circle cx={7} cy={6} r={2} /><Path d="M7 8v8" /><Path d="M9 18h6a2 2 0 0 0 2 -2v-5" /><Path d="M14 14l3 -3l3 3" /><Path d="M15 4l4 4" /><Path d="M15 8l4 -4" /></Svg>;
}
export default IconGitBranchDeleted;