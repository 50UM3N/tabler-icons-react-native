import Svg, { Path } from 'react-native-svg';
         
function IconTopologyStar3({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-topology-star-3" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M10 19a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" /><Path d="M18 5a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" /><Path d="M10 5a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" /><Path d="M6 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" /><Path d="M18 19a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" /><Path d="M14 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" /><Path d="M22 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" /><Path d="M6 12h4" /><Path d="M14 12h4" /><Path d="M15 7l-2 3" /><Path d="M9 7l2 3" /><Path d="M11 14l-2 3" /><Path d="M13 14l2 3" /></Svg>;

}
export default IconTopologyStar3;
        