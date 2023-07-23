import Svg, { Path } from 'react-native-svg';
         
function IconScreenshot({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-screenshot" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M7 19a2 2 0 0 1 -2 -2" /><Path d="M5 13v-2" /><Path d="M5 7a2 2 0 0 1 2 -2" /><Path d="M11 5h2" /><Path d="M17 5a2 2 0 0 1 2 2" /><Path d="M19 11v2" /><Path d="M19 17v4" /><Path d="M21 19h-4" /><Path d="M13 19h-2" /></Svg>;

}
export default IconScreenshot;
        