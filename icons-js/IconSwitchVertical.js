import Svg, { Path } from 'react-native-svg';
         
function IconSwitchVertical({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-switch-vertical" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 8l4 -4l4 4" /><Path d="M7 4l0 9" /><Path d="M13 16l4 4l4 -4" /><Path d="M17 10l0 10" /></Svg>;

}
export default IconSwitchVertical;
        