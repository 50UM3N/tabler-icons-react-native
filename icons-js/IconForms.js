import Svg, { Path } from 'react-native-svg';
         
function IconForms({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-forms" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 3a3 3 0 0 0 -3 3v12a3 3 0 0 0 3 3" /><Path d="M6 3a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3" /><Path d="M13 7h7a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-7" /><Path d="M5 7h-1a1 1 0 0 0 -1 1v8a1 1 0 0 0 1 1h1" /><Path d="M17 12h.01" /><Path d="M13 12h.01" /></Svg>;

}
export default IconForms;
        