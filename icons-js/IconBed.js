import Svg, { Path } from 'react-native-svg';
         
function IconBed({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bed" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M7 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M22 17v-3h-20" /><Path d="M2 8v9" /><Path d="M12 14h10v-2a3 3 0 0 0 -3 -3h-7v5z" /></Svg>;

}
export default IconBed;
        