import Svg, { Path } from 'react-native-svg';
                    
function IconPerfume({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-perfume" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M10 6v3" /><Path d="M14 6v3" /><Path d="M5 9m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z" /><Path d="M12 15m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M9 3h6v3h-6z" /></Svg>;

}
export default IconPerfume;
                    