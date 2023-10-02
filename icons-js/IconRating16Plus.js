import Svg, { Path } from 'react-native-svg';
         
function IconRating16Plus({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-rating-16-plus" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><Path d="M11.5 13.5m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0" /><Path d="M7 15v-6" /><Path d="M15.5 12h3" /><Path d="M17 10.5v3" /><Path d="M10 13.5v-3a1.5 1.5 0 0 1 1.5 -1.5h1" /></Svg>;

}
export default IconRating16Plus;
        