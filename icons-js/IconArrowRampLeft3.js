import Svg, { Path } from 'react-native-svg';
         
function IconArrowRampLeft3({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-ramp-left-3" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M18 3v6" /><Path d="M8 16l-4 -4l4 -4" /><Path d="M18 21v-6a3 3 0 0 0 -3 -3h-11" /></Svg>;

}
export default IconArrowRampLeft3;
        