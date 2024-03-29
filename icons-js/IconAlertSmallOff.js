import Svg, { Path } from 'react-native-svg';
         
function IconAlertSmallOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-alert-small-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 16h.01" /><Path d="M12 7v1" /><Path d="M3 3l18 18" /></Svg>;

}
export default IconAlertSmallOff;
        