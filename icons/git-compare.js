import Svg, { Path, Circle, Polyline } from "react-native-svg";

function IconGitCompare({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-git-compare" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={6} cy={6} r={2} /><Circle cx={18} cy={18} r={2} /><Path d="M11 6h5a2 2 0 0 1 2 2v8" /><Polyline points="14 9 11 6 14 3" /><Path d="M13 18h-5a2 2 0 0 1 -2 -2v-8" /><Polyline points="10 15 13 18 10 21" /></Svg>;
}

export default IconGitCompare;