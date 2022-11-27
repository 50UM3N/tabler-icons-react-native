import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconGitPullRequestDraft({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-git-pull-request-draft" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={6} cy={18} r={2} /><Circle cx={6} cy={6} r={2} /><Circle cx={18} cy={18} r={2} /><Path d="M6 8v8" /><Path d="M18 11h.01" /><Path d="M18 6h.01" /></Svg>;
}
export default IconGitPullRequestDraft;