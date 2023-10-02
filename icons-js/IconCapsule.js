import Svg, { Path } from 'react-native-svg';
         
function IconCapsule({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-capsule" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M6 3m0 6a6 6 0 0 1 6 -6h0a6 6 0 0 1 6 6v6a6 6 0 0 1 -6 6h0a6 6 0 0 1 -6 -6z" /></Svg>;

}
export default IconCapsule;
        