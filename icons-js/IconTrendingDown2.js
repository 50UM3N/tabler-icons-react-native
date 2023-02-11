import Svg, { Path } from 'react-native-svg';
                    
function IconTrendingDown2({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trending-down-2" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 6h5l7 10h6" /><Path d="M18 19l3 -3l-3 -3" /></Svg>;

}
export default IconTrendingDown2;
                    