import Svg, { Path } from 'react-native-svg';
         
function IconBoldOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bold-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M9 5h4a3.5 3.5 0 0 1 2.222 6.204m-3.222 .796h-5v-5" /><Path d="M17.107 17.112a3.5 3.5 0 0 1 -3.107 1.888h-7v-7" /><Path d="M3 3l18 18" /></Svg>;

}
export default IconBoldOff;
        