import Svg, { Path } from 'react-native-svg';
                    
function IconBrandDeezer({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-deezer" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 16.5h2v.5h-2z" /><Path d="M8 16.5h2.5v.5h-2.5z" /><Path d="M16 17h-2.5v-.5h2.5z" /><Path d="M21.5 17h-2.5v-.5h2.5z" /><Path d="M21.5 13h-2.5v.5h2.5z" /><Path d="M21.5 9.5h-2.5v.5h2.5z" /><Path d="M21.5 6h-2.5v.5h2.5z" /><Path d="M16 13h-2.5v.5h2.5z" /><Path d="M8 13.5h2.5v-.5h-2.5z" /><Path d="M8 9.5h2.5v.5h-2.5z" /></Svg>;

}
export default IconBrandDeezer;
                    