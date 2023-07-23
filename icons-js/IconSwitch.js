import Svg, { Path } from 'react-native-svg';
         
function IconSwitch({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-switch" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M15 4l4 0l0 4" /><Path d="M14.75 9.25l4.25 -5.25" /><Path d="M5 19l4 -4" /><Path d="M15 19l4 0l0 -4" /><Path d="M5 5l14 14" /></Svg>;

}
export default IconSwitch;
        