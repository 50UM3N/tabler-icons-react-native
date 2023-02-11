import Svg, { Path } from 'react-native-svg';
                    
function IconSteam({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-steam" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><Path d="M4 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><Path d="M20 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><Path d="M12 20m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><Path d="M5.5 5.5l3 3" /><Path d="M15.5 15.5l3 3" /><Path d="M18.5 5.5l-3 3" /><Path d="M8.5 15.5l-3 3" /></Svg>;

}
export default IconSteam;
                    