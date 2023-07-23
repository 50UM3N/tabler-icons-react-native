import Svg, { Path } from 'react-native-svg';
         
function IconBoxOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-box-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M17.765 17.757l-5.765 3.243l-8 -4.5v-9l2.236 -1.258m2.57 -1.445l3.194 -1.797l8 4.5v8.5" /><Path d="M14.561 10.559l5.439 -3.059" /><Path d="M12 12v9" /><Path d="M12 12l-8 -4.5" /><Path d="M3 3l18 18" /></Svg>;

}
export default IconBoxOff;
        