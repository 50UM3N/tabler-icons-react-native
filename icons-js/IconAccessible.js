import Svg, { Path, Circle } from 'react-native-svg';
                    
function IconAccessible({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-accessible" width={size} height={size} viewBox="0 0 24 24" strokeWidth="0" stroke="none" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><Path d="M10 16.5l2 -3l2 3m-2 -3v-2l3 -1m-6 0l3 1" /><Circle cx="12" cy="7.5" r=".5" fill={color} /></Svg>;

}
export default IconAccessible;
                    