import Svg, { Path } from 'react-native-svg';
         
function IconClockMinus({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-clock-minus" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M20.477 15.022a9 9 0 1 0 -7.998 5.965" /><Path d="M12 7v5l3 3" /><Path d="M16 19h6" /></Svg>;

}
export default IconClockMinus;
        