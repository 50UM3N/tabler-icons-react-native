import Svg, { Path, Ellipse } from "react-native-svg";

function IconNumber({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-number" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 17v-10l7 10v-10" /><Path d="M15 17h5" /><Ellipse cx={17.5} cy={10} rx={2.5} ry={3} /></Svg>;
}

export default IconNumber;