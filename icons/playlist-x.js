import Svg, { Path } from "react-native-svg";

function IconPlaylistX({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-playlist-x" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M19 8h-14" /><Path d="M5 12h7" /><Path d="M12 16h-7" /><Path d="M16 14l4 4" /><Path d="M20 14l-4 4" /></Svg>;
}

export default IconPlaylistX;