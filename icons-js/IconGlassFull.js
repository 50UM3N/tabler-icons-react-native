import Svg, { Path } from 'react-native-svg';
         
function IconGlassFull({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-glass-full" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M8 21l8 0" /><Path d="M12 15l0 6" /><Path d="M17 3l1 7c0 3.012 -2.686 5 -6 5s-6 -1.988 -6 -5l1 -7h10z" /><Path d="M6 10a5 5 0 0 1 6 0a5 5 0 0 0 6 0" /></Svg>;

}
export default IconGlassFull;
        