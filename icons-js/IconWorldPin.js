import Svg, { Path } from 'react-native-svg';
         
function IconWorldPin({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-world-pin" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M20.972 11.291a9 9 0 1 0 -8.322 9.686" /><Path d="M3.6 9h16.8" /><Path d="M3.6 15h8.9" /><Path d="M11.5 3a17 17 0 0 0 0 18" /><Path d="M12.5 3a16.986 16.986 0 0 1 2.578 9.018" /><Path d="M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879z" /><Path d="M19 18v.01" /></Svg>;

}
export default IconWorldPin;
        