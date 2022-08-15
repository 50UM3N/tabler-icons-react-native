import Svg, { Path, Circle, Polyline } from "react-native-svg";

function IconBike({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bike" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={5} cy={18} r={3} /><Circle cx={19} cy={18} r={3} /><Polyline points="12 19 12 15 9 12 14 8 16 11 19 11" /><Circle cx={17} cy={5} r={1} /></Svg>;
}

export default IconBike;