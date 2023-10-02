import Svg, { Path } from 'react-native-svg';
         
function IconCircles({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circles" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /><Path d="M6.5 17m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /><Path d="M17.5 17m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /></Svg>;

}
export default IconCircles;
        