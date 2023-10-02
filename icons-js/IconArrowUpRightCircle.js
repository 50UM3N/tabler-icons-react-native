import Svg, { Path } from 'react-native-svg';
         
function IconArrowUpRightCircle({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-up-right-circle" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M8.464 15.536l9.536 -9.536" /><Path d="M18 10v-4h-4" /><Path d="M8.414 15.586a2 2 0 1 0 -2.828 2.828a2 2 0 0 0 2.828 -2.828" /></Svg>;

}
export default IconArrowUpRightCircle;
        