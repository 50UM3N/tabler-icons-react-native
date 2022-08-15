import Svg, { Path, Circle, Line } from "react-native-svg";

function IconVirusSearch({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-virus-search" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M17 12a5 5 0 1 0 -5 5" /><Path d="M12 7v-4m-1 0h2" /><Path d="M12 7v-4m-1 0h2" transform="rotate(45 12 12)" /><Path d="M12 7v-4m-1 0h2" transform="rotate(90 12 12)" /><Path d="M12 7v-4m-1 0h2" transform="rotate(180 12 12)" /><Path d="M12 7v-4m-1 0h2" transform="rotate(225 12 12)" /><Path d="M12 7v-4m-1 0h2" transform="rotate(270 12 12)" /><Path d="M12 7v-4m-1 0h2" transform="rotate(315 12 12)" /><Circle cx={17.5} cy={17.5} r={2.5} /><Line x1={19.5} y1={19.5} x2={22} y2={22} /></Svg>;
}

export default IconVirusSearch;