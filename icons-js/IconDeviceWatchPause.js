import Svg, { Path } from 'react-native-svg';
                    
function IconDeviceWatchPause({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-watch-pause" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M13 18h-4a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3v4" /><Path d="M9 18v3h4" /><Path d="M9 6v-3h6v3" /><Path d="M17 17v5" /><Path d="M21 17v5" /></Svg>;

}
export default IconDeviceWatchPause;
                    