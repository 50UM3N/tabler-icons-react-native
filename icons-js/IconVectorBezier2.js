import Svg, { Path } from 'react-native-svg';
                    
function IconVectorBezier2({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-vector-bezier-2" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 3m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" /><Path d="M17 17m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" /><Path d="M7 5l7 0" /><Path d="M10 19l7 0" /><Path d="M9 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><Path d="M15 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><Path d="M7 5.5a5 6.5 0 0 1 5 6.5a5 6.5 0 0 0 5 6.5" /></Svg>;

}
export default IconVectorBezier2;
                    