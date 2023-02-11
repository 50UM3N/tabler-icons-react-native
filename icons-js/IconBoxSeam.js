import Svg, { Path } from 'react-native-svg';
                    
function IconBoxSeam({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-box-seam" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 3l8 4.5v9l-8 4.5l-8 -4.5v-9l8 -4.5" /><Path d="M12 12l8 -4.5" /><Path d="M8.2 9.8l7.6 -4.6" /><Path d="M12 12v9" /><Path d="M12 12l-8 -4.5" /></Svg>;

}
export default IconBoxSeam;
                    