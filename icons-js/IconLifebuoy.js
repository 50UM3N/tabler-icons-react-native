import Svg, { Path } from 'react-native-svg';
                    
function IconLifebuoy({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-lifebuoy" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /><Path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><Path d="M15 15l3.35 3.35" /><Path d="M9 15l-3.35 3.35" /><Path d="M5.65 5.65l3.35 3.35" /><Path d="M18.35 5.65l-3.35 3.35" /></Svg>;

}
export default IconLifebuoy;
                    