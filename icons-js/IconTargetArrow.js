import Svg, { Path } from 'react-native-svg';
         
function IconTargetArrow({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-target-arrow" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><Path d="M12 7a5 5 0 1 0 5 5" /><Path d="M13 3.055a9 9 0 1 0 7.941 7.945" /><Path d="M15 6v3h3l3 -3h-3v-3z" /><Path d="M15 9l-3 3" /></Svg>;

}
export default IconTargetArrow;
        