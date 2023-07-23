import Svg, { Path } from 'react-native-svg';
         
function IconFence({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-fence" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 12v4h16v-4z" /><Path d="M6 16v4h4v-4m0 -4v-6l-2 -2l-2 2v6" /><Path d="M14 16v4h4v-4m0 -4v-6l-2 -2l-2 2v6" /></Svg>;

}
export default IconFence;
        