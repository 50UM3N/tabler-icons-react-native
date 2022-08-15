import Svg, { Path, Circle, Line } from "react-native-svg";

function IconWorldLatitude({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-world-latitude" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={12} cy={12} r={9} /><Line x1={4.6} y1={7} x2={19.4} y2={7} /><Line x1={3} y1={12} x2={21} y2={12} /><Line x1={4.6} y1={17} x2={19.4} y2={17} /></Svg>;
}

export default IconWorldLatitude;