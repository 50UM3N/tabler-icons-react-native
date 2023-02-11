import Svg, { Path } from 'react-native-svg';
                    
function IconVenus({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-venus" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 9m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" /><Path d="M12 14l0 7" /><Path d="M9 18l6 0" /></Svg>;

}
export default IconVenus;
                    