import Svg, { Path } from 'react-native-svg';
                    
function IconBulldozer({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bulldozer" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M13 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M18 13v6h3" /><Path d="M13 19l-9 0" /><Path d="M4 15l9 0" /><Path d="M8 12v-5h2a3 3 0 0 1 3 3v5" /><Path d="M5 15v-2a1 1 0 0 1 1 -1h7" /><Path d="M18 17l-3 0" /></Svg>;

}
export default IconBulldozer;
                    