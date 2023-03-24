import Svg, { Path } from 'react-native-svg';
                    
function IconDeviceTabletPause({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-tablet-pause" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M13 21h-7a1 1 0 0 1 -1 -1v-16a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v9.5" /><Path d="M17 17v5" /><Path d="M21 17v5" /><Path d="M11 17a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" /></Svg>;

}
export default IconDeviceTabletPause;
                    