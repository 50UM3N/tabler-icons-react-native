import Svg, { Path, Circle } from 'react-native-svg';
                    
function IconDiscount({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-discount" width={size} height={size} viewBox="0 0 24 24" strokeWidth="0" stroke="none" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M9 15l6 -6" /><Circle cx="9.5" cy="9.5" r=".5" fill={color} /><Circle cx="14.5" cy="14.5" r=".5" fill={color} /><Path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /></Svg>;

}
export default IconDiscount;
                    