import Svg, { Path } from 'react-native-svg';
                    
function IconBrandCodepen({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-codepen" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 15l9 6l9 -6l-9 -6l-9 6" /><Path d="M3 9l9 6l9 -6l-9 -6l-9 6" /><Path d="M3 9l0 6" /><Path d="M21 9l0 6" /><Path d="M12 3l0 6" /><Path d="M12 15l0 6" /></Svg>;

}
export default IconBrandCodepen;
                    