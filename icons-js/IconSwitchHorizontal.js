import Svg, { Path } from 'react-native-svg';
         
function IconSwitchHorizontal({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-switch-horizontal" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M16 3l4 4l-4 4" /><Path d="M10 7l10 0" /><Path d="M8 13l-4 4l4 4" /><Path d="M4 17l9 0" /></Svg>;

}
export default IconSwitchHorizontal;
        