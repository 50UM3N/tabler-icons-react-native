import Svg, { Path } from 'react-native-svg';
         
function IconMapPause({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-pause" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M13 19l-4 -2l-6 3v-13l6 -3l6 3l6 -3v9" /><Path d="M9 4v13" /><Path d="M15 7v6.5" /><Path d="M17 17v5" /><Path d="M21 17v5" /></Svg>;

}
export default IconMapPause;
        