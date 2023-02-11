import Svg, { Path } from 'react-native-svg';
                    
function IconBorderStyle2({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-border-style-2" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 18v.01" /><Path d="M8 18v.01" /><Path d="M12 18v.01" /><Path d="M16 18v.01" /><Path d="M20 18v.01" /><Path d="M18 12h2" /><Path d="M11 12h2" /><Path d="M4 12h2" /><Path d="M4 6h16" /></Svg>;

}
export default IconBorderStyle2;
                    