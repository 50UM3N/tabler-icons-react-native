import Svg, { Path } from 'react-native-svg';
         
function IconArrowRampLeft2({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-ramp-left-2" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M18 3v8.707" /><Path d="M8 14l-4 -4l4 -4" /><Path d="M18 21c0 -6.075 -4.925 -11 -11 -11h-3" /></Svg>;

}
export default IconArrowRampLeft2;
        