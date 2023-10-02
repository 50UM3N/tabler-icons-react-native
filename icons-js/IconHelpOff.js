import Svg, { Path } from 'react-native-svg';
         
function IconHelpOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-help-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M5.641 5.631a9 9 0 1 0 12.719 12.738m1.68 -2.318a9 9 0 0 0 -12.074 -12.098" /><Path d="M12 17v.01" /><Path d="M12 13.5a1.5 1.5 0 0 1 .394 -1.1m2.106 -1.9a2.6 2.6 0 0 0 -3.347 -3.361" /><Path d="M3 3l18 18" /></Svg>;

}
export default IconHelpOff;
        