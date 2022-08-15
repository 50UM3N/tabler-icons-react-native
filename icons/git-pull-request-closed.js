import Svg, { Path, Circle } from "react-native-svg";

function IconGitPullRequestClosed({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-git-pull-request-closed" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={6} cy={18} r={2} /><Circle cx={6} cy={6} r={2} /><Circle cx={18} cy={18} r={2} /><Path d="M6 8v8" /><Path d="M18 11v5" /><Path d="M16 4l4 4m0 -4l-4 4" /></Svg>;
}

export default IconGitPullRequestClosed;