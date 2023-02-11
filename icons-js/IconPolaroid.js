import Svg, { Path } from 'react-native-svg';
                    
function IconPolaroid({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-polaroid" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><Path d="M4 16l16 0" /><Path d="M4 12l3 -3c.928 -.893 2.072 -.893 3 0l4 4" /><Path d="M13 12l2 -2c.928 -.893 2.072 -.893 3 0l2 2" /><Path d="M14 7l.01 0" /></Svg>;

}
export default IconPolaroid;
                    