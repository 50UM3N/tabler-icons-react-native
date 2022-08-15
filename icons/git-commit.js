import Svg, { Path, Circle, Line } from "react-native-svg";

function IconGitCommit({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-git-commit" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={12} cy={12} r={3} /><Line x1={12} y1={3} x2={12} y2={9} /><Line x1={12} y1={15} x2={12} y2={21} /></Svg>;
}

export default IconGitCommit;