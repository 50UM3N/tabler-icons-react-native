import Svg, { Path } from 'react-native-svg';
         
function IconDisabled({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-disabled" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M11 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M11 7l0 8l4 0l4 5" /><Path d="M11 11l5 0" /><Path d="M7 11.5a5 5 0 1 0 6 7.5" /></Svg>;

}
export default IconDisabled;
        