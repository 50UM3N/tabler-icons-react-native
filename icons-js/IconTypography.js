import Svg, { Path } from 'react-native-svg';
                    
function IconTypography({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-typography" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 20l3 0" /><Path d="M14 20l7 0" /><Path d="M6.9 15l6.9 0" /><Path d="M10.2 6.3l5.8 13.7" /><Path d="M5 20l6 -16l2 0l7 16" /></Svg>;

}
export default IconTypography;
                    