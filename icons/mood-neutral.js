import Svg, { Path, Circle, Line } from "react-native-svg";

function IconMoodNeutral({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mood-neutral" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={12} cy={12} r={9} /><Line x1={9} y1={10} x2={9.01} y2={10} /><Line x1={15} y1={10} x2={15.01} y2={10} /></Svg>;
}

export default IconMoodNeutral;