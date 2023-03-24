import Svg, { Path } from 'react-native-svg';
                    
function IconDeviceDesktopExclamation({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-desktop-exclamation" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M15 16h-11a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v7" /><Path d="M7 20h8" /><Path d="M9 16v4" /><Path d="M15 16v4" /><Path d="M19 16v3" /><Path d="M19 22v.01" /></Svg>;

}
export default IconDeviceDesktopExclamation;
                    