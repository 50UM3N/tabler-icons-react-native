import Svg, { Path } from 'react-native-svg';
                    
function IconArrowsSort({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrows-sort" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 9l4 -4l4 4m-4 -4v14" /><Path d="M21 15l-4 4l-4 -4m4 4v-14" /></Svg>;

}
export default IconArrowsSort;
                    