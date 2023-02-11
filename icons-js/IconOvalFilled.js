import Svg, { Path } from 'react-native-svg';
                    
function IconOvalFilled({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-oval-filled" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 12m-6 0a6 9 0 1 0 12 0a6 9 0 1 0 -12 0" fill="currentColor" /></Svg>;

}
export default IconOvalFilled;
                    