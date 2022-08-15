import Svg, { Path, Circle, Line } from "react-native-svg";

function IconMoodTongue({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mood-tongue" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={12} cy={12} r={9} /><Line x1={9} y1={10} x2={9.01} y2={10} /><Line x1={15} y1={10} x2={15.01} y2={10} /><Path d="M10 14v2a2 2 0 0 0 4 0v-2m1.5 0h-7" /></Svg>;
}

export default IconMoodTongue;