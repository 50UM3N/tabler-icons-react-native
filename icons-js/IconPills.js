import Svg, { Path } from 'react-native-svg';
                    
function IconPills({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pills" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M8 8m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" /><Path d="M17 17m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /><Path d="M4.5 4.5l7 7" /><Path d="M19.5 14.5l-5 5" /></Svg>;

}
export default IconPills;
                    