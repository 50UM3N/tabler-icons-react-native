import Svg, { Path } from 'react-native-svg';
                    
function IconDeviceDesktopAnalytics({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-desktop-analytics" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 4m0 1a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1z" /><Path d="M7 20h10" /><Path d="M9 16v4" /><Path d="M15 16v4" /><Path d="M9 12v-4" /><Path d="M12 12v-1" /><Path d="M15 12v-2" /><Path d="M12 12v-1" /></Svg>;

}
export default IconDeviceDesktopAnalytics;
                    