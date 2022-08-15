import Svg, { Path, Circle } from "react-native-svg";

function IconCarCrane({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-car-crane" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={5} cy={17} r={2} /><Circle cx={17} cy={17} r={2} /><Path d="M7 18h8m4 0h2v-6a5 5 0 0 0 -5 -5h-1l1.5 5h4.5" /><Path d="M12 18v-11h3" /><Path d="M3 17v-5h9" /><Path d="M4 12v-6l18 -3v2" /><Path d="M8 12v-4l-4 -2" /></Svg>;
}

export default IconCarCrane;