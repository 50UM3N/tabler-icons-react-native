import Svg, { Path } from "react-native-svg";

function IconPackgeImport({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-packge-import" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 21l-8 -4.5v-9l8 -4.5l8 4.5v4.5" /><Path d="M12 12l8 -4.5" /><Path d="M12 12v9" /><Path d="M12 12l-8 -4.5" /><Path d="M22 18h-7" /><Path d="M18 15l-3 3l3 3" /></Svg>;
}

export default IconPackgeImport;