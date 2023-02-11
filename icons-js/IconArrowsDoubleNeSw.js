import Svg, { Path } from 'react-native-svg';
                    
function IconArrowsDoubleNeSw({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrows-double-ne-sw" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 14l11 -11" /><Path d="M10 3h4v4" /><Path d="M10 17v4h4" /><Path d="M21 10l-11 11" /></Svg>;

}
export default IconArrowsDoubleNeSw;
                    