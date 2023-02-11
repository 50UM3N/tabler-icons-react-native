import Svg, { Path } from 'react-native-svg';
                    
function IconYoga({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-yoga" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><Path d="M4 20h4l1.5 -3" /><Path d="M17 20l-1 -5h-5l1 -7" /><Path d="M4 10l4 -1l4 -1l4 1.5l4 1.5" /></Svg>;

}
export default IconYoga;
                    