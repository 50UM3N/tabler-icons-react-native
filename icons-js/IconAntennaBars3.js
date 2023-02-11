import Svg, { Path } from 'react-native-svg';
                    
function IconAntennaBars3({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-antenna-bars-3" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M6 18l0 -3" /><Path d="M10 18l0 -6" /><Path d="M14 18l0 .01" /><Path d="M18 18l0 .01" /></Svg>;

}
export default IconAntennaBars3;
                    