import Svg, { Path } from 'react-native-svg';
         
function IconDeviceMobileCharging({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-mobile-charging" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M6 3m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" /><Path d="M11 4h2" /><Path d="M12 9.5l-1 2.5h2l-1 2.5" /></Svg>;

}
export default IconDeviceMobileCharging;
        