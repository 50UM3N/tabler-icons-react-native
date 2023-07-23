import Svg, { Path } from 'react-native-svg';
         
function IconDnaOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-dna-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M16 12a3.898 3.898 0 0 0 -1.172 -2.828a4.027 4.027 0 0 0 -2.828 -1.172m-2.828 1.172a4 4 0 1 0 5.656 5.656" /><Path d="M9.172 20.485a4 4 0 1 0 -5.657 -5.657" /><Path d="M14.828 3.515a4 4 0 1 0 5.657 5.657" /><Path d="M3 3l18 18" /></Svg>;

}
export default IconDnaOff;
        