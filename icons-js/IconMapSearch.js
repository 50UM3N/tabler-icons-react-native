import Svg, { Path } from 'react-native-svg';
                    
function IconMapSearch({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-search" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M11 18l-2 -1l-6 3v-13l6 -3l6 3l6 -3v10" /><Path d="M9 4v13" /><Path d="M15 7v5" /><Path d="M16.5 17.5m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0" /><Path d="M18.5 19.5l2.5 2.5" /></Svg>;

}
export default IconMapSearch;
                    