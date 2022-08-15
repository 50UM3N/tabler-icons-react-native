import Svg, { Path } from "react-native-svg";

function IconSnowflake({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-snowflake" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M10 4l2 1l2 -1m-2 -2v6.5l3 1.72" /><Path d="M10 4l2 1l2 -1m-2 -2v6.5l3 1.72" transform="rotate(60 12 12)" /><Path d="M10 4l2 1l2 -1m-2 -2v6.5l3 1.72" transform="rotate(120 12 12)" /><Path d="M10 4l2 1l2 -1m-2 -2v6.5l3 1.72" transform="rotate(180 12 12)" /><Path d="M10 4l2 1l2 -1m-2 -2v6.5l3 1.72" transform="rotate(240 12 12)" /><Path d="M10 4l2 1l2 -1m-2 -2v6.5l3 1.72" transform="rotate(300 12 12)" /></Svg>;
}

export default IconSnowflake;