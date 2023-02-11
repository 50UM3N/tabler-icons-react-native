import Svg, { Path } from 'react-native-svg';
                    
function IconTornado({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-tornado" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M21 4l-18 0" /><Path d="M13 16l-6 0" /><Path d="M11 20l4 0" /><Path d="M6 8l14 0" /><Path d="M4 12l12 0" /></Svg>;

}
export default IconTornado;
                    