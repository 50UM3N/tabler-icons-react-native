import Svg, { Path } from 'react-native-svg';
         
function IconBongOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bong-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M9 5v-2h4v6m1.5 1.5l2.5 -2.5l2 2l-2.5 2.5m-.5 3.505a5 5 0 1 1 -7 -4.589v-2.416" /><Path d="M8 3h6" /><Path d="M6.1 17h9.8" /><Path d="M3 3l18 18" /></Svg>;

}
export default IconBongOff;
        