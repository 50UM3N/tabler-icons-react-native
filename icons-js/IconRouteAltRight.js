import Svg, { Path } from 'react-native-svg';
         
function IconRouteAltRight({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-route-alt-right" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M16 3h5v5" /><Path d="M8 3h-5v5" /><Path d="M21 3l-7.536 7.536a5 5 0 0 0 -1.464 3.534v6.93" /><Path d="M6 6.01v-.01" /><Path d="M8 8.02v-.01" /><Path d="M10 10v.01" /></Svg>;

}
export default IconRouteAltRight;
        