import Svg, { Path } from 'react-native-svg';
         
function IconBarrel({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-barrel" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M7.278 4h9.444a2 2 0 0 1 1.841 1.22c.958 2.26 1.437 4.52 1.437 6.78c0 2.26 -.479 4.52 -1.437 6.78a2 2 0 0 1 -1.841 1.22h-9.444a2 2 0 0 1 -1.841 -1.22c-.958 -2.26 -1.437 -4.52 -1.437 -6.78c0 -2.26 .479 -4.52 1.437 -6.78a2 2 0 0 1 1.841 -1.22z" /><Path d="M14 4c.667 2.667 1 5.333 1 8s-.333 5.333 -1 8" /><Path d="M10 4c-.667 2.667 -1 5.333 -1 8s.333 5.333 1 8" /><Path d="M4.5 16h15" /><Path d="M19.5 8h-15" /></Svg>;

}
export default IconBarrel;
        