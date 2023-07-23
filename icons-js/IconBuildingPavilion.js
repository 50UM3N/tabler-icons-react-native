import Svg, { Path } from 'react-native-svg';
         
function IconBuildingPavilion({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-building-pavilion" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 21h7v-3a2 2 0 0 1 4 0v3h7" /><Path d="M6 21l0 -9" /><Path d="M18 21l0 -9" /><Path d="M6 12h12a3 3 0 0 0 3 -3a9 8 0 0 1 -9 -6a9 8 0 0 1 -9 6a3 3 0 0 0 3 3" /></Svg>;

}
export default IconBuildingPavilion;
        