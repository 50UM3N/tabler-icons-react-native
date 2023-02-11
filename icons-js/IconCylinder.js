import Svg, { Path } from 'react-native-svg';
                    
function IconCylinder({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-cylinder" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 6m-5 0a5 3 0 1 0 10 0a5 3 0 1 0 -10 0" /><Path d="M7 6v12c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-12" /></Svg>;

}
export default IconCylinder;
                    