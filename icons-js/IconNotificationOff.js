import Svg, { Path } from 'react-native-svg';
         
function IconNotificationOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-notification-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M6.154 6.187a2 2 0 0 0 -1.154 1.813v9a2 2 0 0 0 2 2h9a2 2 0 0 0 1.811 -1.151" /><Path d="M17 7m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><Path d="M3 3l18 18" /></Svg>;

}
export default IconNotificationOff;
        