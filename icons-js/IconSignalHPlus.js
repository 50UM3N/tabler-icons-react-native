import Svg, { Path } from 'react-native-svg';
         
function IconSignalHPlus({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-signal-h-plus" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M7 16v-8" /><Path d="M11 8v8" /><Path d="M7 12h4" /><Path d="M14 12h4" /><Path d="M16 10v4" /></Svg>;

}
export default IconSignalHPlus;
        