import Svg, { Path } from 'react-native-svg';
                    
function IconDeviceDesktopPause({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-desktop-pause" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M13 16h-9a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v8" /><Path d="M17 17v5" /><Path d="M21 17v5" /><Path d="M7 20h6" /><Path d="M9 16v4" /></Svg>;

}
export default IconDeviceDesktopPause;
                    