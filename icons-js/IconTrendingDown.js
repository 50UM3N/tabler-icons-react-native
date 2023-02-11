import Svg, { Path } from 'react-native-svg';
                    
function IconTrendingDown({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trending-down" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 7l6 6l4 -4l8 8" /><Path d="M21 10l0 7l-7 0" /></Svg>;

}
export default IconTrendingDown;
                    