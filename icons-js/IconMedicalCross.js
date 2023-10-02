import Svg, { Path } from 'react-native-svg';
         
function IconMedicalCross({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-medical-cross" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M13 3a1 1 0 0 1 1 1v4.535l3.928 -2.267a1 1 0 0 1 1.366 .366l1 1.732a1 1 0 0 1 -.366 1.366l-3.927 2.268l3.927 2.269a1 1 0 0 1 .366 1.366l-1 1.732a1 1 0 0 1 -1.366 .366l-3.928 -2.269v4.536a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-4.536l-3.928 2.268a1 1 0 0 1 -1.366 -.366l-1 -1.732a1 1 0 0 1 .366 -1.366l3.927 -2.268l-3.927 -2.268a1 1 0 0 1 -.366 -1.366l1 -1.732a1 1 0 0 1 1.366 -.366l3.928 2.267v-4.535a1 1 0 0 1 1 -1h2z" /></Svg>;

}
export default IconMedicalCross;
        