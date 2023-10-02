import Svg, { Path } from 'react-native-svg';
         
function IconMapPinPause({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-pin-pause" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><Path d="M13.414 20.9a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 13.337 -3.413" /><Path d="M17 17v5" /><Path d="M21 17v5" /></Svg>;

}
export default IconMapPinPause;
        