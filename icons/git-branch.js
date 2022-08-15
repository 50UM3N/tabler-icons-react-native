import Svg, { Path, Circle, Line, Polyline } from "react-native-svg";

function IconGitBranch({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-git-branch" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={7} cy={18} r={2} /><Circle cx={7} cy={6} r={2} /><Circle cx={17} cy={6} r={2} /><Line x1={7} y1={8} x2={7} y2={16} /><Path d="M9 18h6a2 2 0 0 0 2 -2v-5" /><Polyline points="14 14 17 11 20 14" /></Svg>;
}

export default IconGitBranch;