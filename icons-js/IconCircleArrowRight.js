import Svg, { Path } from 'react-native-svg';
         
function IconCircleArrowRight({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-arrow-right" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0 -18" /><Path d="M16 12l-4 -4" /><Path d="M16 12h-8" /><Path d="M12 16l4 -4" /></Svg>;

}
export default IconCircleArrowRight;
        