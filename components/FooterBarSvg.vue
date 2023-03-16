<script setup lang="ts">
const svgRef = ref<SVGGraphicsElement | null>(null)

const updateSvgViewBox = () => {
  if (svgRef.value) {
    const bBox = svgRef.value.getBBox()
    svgRef.value.setAttribute(
      'viewBox',
      `${bBox.x} ${bBox.y} ${bBox.width} ${bBox.height}`
    )
  }
}

onMounted(() => {
  updateSvgViewBox()

  window.addEventListener('resize', updateSvgViewBox)
})

const screenLg = 'hidden desktop-xl:block'
const screen = 'hidden desktop:block'
const screenSmAndUp = 'hidden laptop:block'
const tabletAndUp = 'hidden tablet:block'
</script>

<template>
  <svg ref="svgRef" fill="none">
    <g :class="screenLg" clip-path="url(#clip0_1028_28146)">
      <path
        d="M41.9851 84.5L83.0657 84.5L83.0657 42.25C60.3735 42.25 41.9851 23.3333 41.9851 -1.7534e-06L0.904358 0L0.90436 42.25C23.5918 42.25 41.9851 61.1667 41.9851 84.5Z"
        fill="#0F0F0F"
      />
    </g>
    <g :class="screenLg" clip-path="url(#clip1_1028_28146)">
      <path
        d="M0.90435 126.75V169H41.985C41.985 145.662 60.3783 126.75 83.0657 126.75V84.5H41.985C41.985 107.833 23.5918 126.75 0.90435 126.75Z"
        fill="#0F0F0F"
      />
    </g>
    <g :class="screenLg" clip-path="url(#clip2_1028_28146)">
      <path
        d="M123.646 84.5L164.727 84.5L164.727 42.25C142.035 42.25 123.646 23.3333 123.646 -1.7534e-06L82.5657 0L82.5657 42.25C105.253 42.25 123.646 61.1667 123.646 84.5Z"
        fill="#0F0F0F"
      />
    </g>
    <g :class="screenLg" clip-path="url(#clip3_1028_28146)">
      <path
        d="M82.5657 126.75V169H123.646C123.646 145.662 142.04 126.75 164.727 126.75V84.5H123.646C123.646 107.833 105.253 126.75 82.5657 126.75Z"
        fill="#0F0F0F"
      />
    </g>
    <g :class="screen" clip-path="url(#clip4_1028_28146)">
      <path
        d="M205.308 84.5L246.389 84.5L246.389 42.25C223.696 42.25 205.308 23.3333 205.308 -1.7534e-06L164.227 0L164.227 42.25C186.915 42.25 205.308 61.1667 205.308 84.5Z"
        fill="#0F0F0F"
      />
    </g>
    <g :class="screen" clip-path="url(#clip5_1028_28146)">
      <path
        d="M164.227 126.75V169H205.308C205.308 145.662 223.701 126.75 246.389 126.75V84.5H205.308C205.308 107.833 186.915 126.75 164.227 126.75Z"
        fill="#0F0F0F"
      />
    </g>
    <g :class="screen" clip-path="url(#clip6_1028_28146)">
      <path
        d="M286.969 84.5L328.05 84.5L328.05 42.25C305.358 42.25 286.969 23.3333 286.969 -1.7534e-06L245.889 0L245.889 42.25C268.576 42.25 286.969 61.1667 286.969 84.5Z"
        fill="#0F0F0F"
      />
    </g>
    <g :class="screen" clip-path="url(#clip7_1028_28146)">
      <path
        d="M245.889 126.75V169H286.969C286.969 145.662 305.362 126.75 328.05 126.75V84.5H286.969C286.969 107.833 268.576 126.75 245.889 126.75Z"
        fill="#0F0F0F"
      />
    </g>
    <g :class="screenSmAndUp" clip-path="url(#clip8_1028_28146)">
      <path
        d="M368.631 84.5L409.711 84.5L409.711 42.25C387.019 42.25 368.631 23.3333 368.631 -1.7534e-06L327.55 0L327.55 42.25C350.237 42.25 368.631 61.1667 368.631 84.5Z"
        fill="#0F0F0F"
      />
    </g>
    <g :class="screenSmAndUp" clip-path="url(#clip9_1028_28146)">
      <path
        d="M327.55 126.75V169H368.631C368.631 145.662 387.024 126.75 409.711 126.75V84.5H368.631C368.631 107.833 350.237 126.75 327.55 126.75Z"
        fill="#0F0F0F"
      />
    </g>
    <g :class="screenSmAndUp" clip-path="url(#clip10_1028_28146)">
      <path
        d="M450.292 84.5L491.373 84.5L491.373 42.25C468.68 42.25 450.292 23.3333 450.292 -1.75341e-06L409.211 0L409.211 42.25C431.899 42.25 450.292 61.1667 450.292 84.5Z"
        fill="#0F0F0F"
      />
    </g>
    <g :class="screenSmAndUp" clip-path="url(#clip11_1028_28146)">
      <path
        d="M409.211 126.75V169H450.292C450.292 145.662 468.685 126.75 491.373 126.75V84.5H450.292C450.292 107.833 431.899 126.75 409.211 126.75Z"
        fill="#0F0F0F"
      />
    </g>
    <g :class="screenSmAndUp" clip-path="url(#clip12_1028_28146)">
      <path
        d="M531.953 84.5L573.034 84.5L573.034 42.25C550.342 42.25 531.953 23.3333 531.953 -1.75341e-06L490.873 0L490.873 42.25C513.56 42.25 531.953 61.1667 531.953 84.5Z"
        fill="#0F0F0F"
      />
    </g>
    <g :class="screenSmAndUp" clip-path="url(#clip13_1028_28146)">
      <path
        d="M490.873 126.75V169H531.953C531.953 145.662 550.347 126.75 573.034 126.75V84.5H531.953C531.953 107.833 513.56 126.75 490.873 126.75Z"
        fill="#0F0F0F"
      />
    </g>
    <g :class="tabletAndUp" clip-path="url(#clip14_1028_28146)">
      <path
        d="M613.615 84.5L654.695 84.5L654.695 42.25C632.003 42.25 613.615 23.3333 613.615 -1.75341e-06L572.534 0L572.534 42.25C595.222 42.25 613.615 61.1667 613.615 84.5Z"
        fill="#0F0F0F"
      />
    </g>
    <g :class="tabletAndUp" clip-path="url(#clip15_1028_28146)">
      <path
        d="M572.534 126.75V169H613.615C613.615 145.662 632.008 126.75 654.695 126.75V84.5H613.615C613.615 107.833 595.222 126.75 572.534 126.75Z"
        fill="#0F0F0F"
      />
    </g>
    <g :class="tabletAndUp" clip-path="url(#clip16_1028_28146)">
      <path
        d="M695.276 84.5L736.357 84.5L736.357 42.25C713.665 42.25 695.276 23.3333 695.276 -1.7534e-06L654.195 0L654.195 42.25C676.883 42.25 695.276 61.1667 695.276 84.5Z"
        fill="#0F0F0F"
      />
    </g>
    <g :class="tabletAndUp" clip-path="url(#clip17_1028_28146)">
      <path
        d="M654.195 126.75V169H695.276C695.276 145.662 713.669 126.75 736.357 126.75V84.5H695.276C695.276 107.833 676.883 126.75 654.195 126.75Z"
        fill="#0F0F0F"
      />
    </g>
    <g :class="tabletAndUp" clip-path="url(#clip18_1028_28146)">
      <path
        d="M776.938 84.5L818.018 84.5L818.018 42.25C795.326 42.25 776.938 23.3333 776.938 -1.7534e-06L735.857 0L735.857 42.25C758.544 42.25 776.938 61.1667 776.938 84.5Z"
        fill="#0F0F0F"
      />
    </g>
    <g :class="tabletAndUp" clip-path="url(#clip19_1028_28146)">
      <path
        d="M735.857 126.75V169H776.938C776.938 145.662 795.331 126.75 818.018 126.75V84.5H776.938C776.938 107.833 758.544 126.75 735.857 126.75Z"
        fill="#0F0F0F"
      />
    </g>
    <g clip-path="url(#clip20_1028_28146)">
      <path
        d="M858.599 84.5L899.68 84.5L899.68 42.25C876.987 42.25 858.599 23.3333 858.599 -1.75341e-06L817.518 0L817.518 42.25C840.206 42.25 858.599 61.1667 858.599 84.5Z"
        fill="#0F0F0F"
      />
    </g>
    <g clip-path="url(#clip21_1028_28146)">
      <path
        d="M817.518 126.75V169H858.599C858.599 145.662 876.992 126.75 899.68 126.75V84.5H858.599C858.599 107.833 840.206 126.75 817.518 126.75Z"
        fill="#0F0F0F"
      />
    </g>
    <g clip-path="url(#clip22_1028_28146)">
      <path
        d="M940.26 84.5L981.341 84.5L981.341 42.25C958.649 42.25 940.26 23.3333 940.26 -1.75341e-06L899.18 0L899.18 42.25C921.867 42.25 940.26 61.1667 940.26 84.5Z"
        fill="#0F0F0F"
      />
    </g>
    <g clip-path="url(#clip23_1028_28146)">
      <path
        d="M899.18 126.75V169H940.26C940.26 145.662 958.653 126.75 981.341 126.75V84.5H940.26C940.26 107.833 921.867 126.75 899.18 126.75Z"
        fill="#0F0F0F"
      />
    </g>
    <g clip-path="url(#clip24_1028_28146)">
      <path
        d="M1021.92 84.5L1063 84.5L1063 42.25C1040.31 42.25 1021.92 23.3333 1021.92 -1.75341e-06L980.841 0L980.841 42.25C1003.53 42.25 1021.92 61.1667 1021.92 84.5Z"
        fill="#0F0F0F"
      />
    </g>
    <g clip-path="url(#clip25_1028_28146)">
      <path
        d="M980.841 126.75V169H1021.92C1021.92 145.662 1040.31 126.75 1063 126.75V84.5H1021.92C1021.92 107.833 1003.53 126.75 980.841 126.75Z"
        fill="#0F0F0F"
      />
    </g>
    <g clip-path="url(#clip26_1028_28146)">
      <path
        d="M1124.89 84.5L1083.81 84.5L1083.81 42.25C1106.5 42.25 1124.89 23.3333 1124.89 -1.75341e-06L1165.97 0L1165.97 42.25C1143.28 42.25 1124.89 61.1667 1124.89 84.5Z"
        fill="#0F0F0F"
      />
    </g>
    <g clip-path="url(#clip27_1028_28146)">
      <path
        d="M1165.97 126.75V169H1124.89C1124.89 145.662 1106.49 126.75 1083.81 126.75V84.5H1124.89C1124.89 107.833 1143.28 126.75 1165.97 126.75Z"
        fill="#0F0F0F"
      />
    </g>
    <g clip-path="url(#clip28_1028_28146)">
      <path
        d="M1206.55 84.5L1165.47 84.5L1165.47 42.25C1188.16 42.25 1206.55 23.3333 1206.55 -1.75341e-06L1247.63 0L1247.63 42.25C1224.94 42.25 1206.55 61.1667 1206.55 84.5Z"
        fill="#0F0F0F"
      />
    </g>
    <g clip-path="url(#clip29_1028_28146)">
      <path
        d="M1247.63 126.75V169H1206.55C1206.55 145.662 1188.16 126.75 1165.47 126.75V84.5H1206.55C1206.55 107.833 1224.94 126.75 1247.63 126.75Z"
        fill="#0F0F0F"
      />
    </g>
    <g clip-path="url(#clip30_1028_28146)">
      <path
        d="M1288.21 84.5L1247.13 84.5L1247.13 42.25C1269.82 42.25 1288.21 23.3333 1288.21 -1.75341e-06L1329.29 0L1329.29 42.25C1306.6 42.25 1288.21 61.1667 1288.21 84.5Z"
        fill="#0F0F0F"
      />
    </g>
    <g clip-path="url(#clip31_1028_28146)">
      <path
        d="M1329.29 126.75V169H1288.21C1288.21 145.662 1269.82 126.75 1247.13 126.75V84.5H1288.21C1288.21 107.833 1306.6 126.75 1329.29 126.75Z"
        fill="#0F0F0F"
      />
    </g>
    <g :class="tabletAndUp" clip-path="url(#clip32_1028_28146)">
      <path
        d="M1369.87 84.5L1328.79 84.5L1328.79 42.25C1351.48 42.25 1369.87 23.3333 1369.87 -1.75341e-06L1410.95 0L1410.95 42.25C1388.26 42.25 1369.87 61.1667 1369.87 84.5Z"
        fill="#0F0F0F"
      />
    </g>
    <g :class="tabletAndUp" clip-path="url(#clip33_1028_28146)">
      <path
        d="M1410.95 126.75V169H1369.87C1369.87 145.662 1351.48 126.75 1328.79 126.75V84.5H1369.87C1369.87 107.833 1388.26 126.75 1410.95 126.75Z"
        fill="#0F0F0F"
      />
    </g>
    <g :class="tabletAndUp" clip-path="url(#clip34_1028_28146)">
      <path
        d="M1451.53 84.5L1410.45 84.5L1410.45 42.25C1433.14 42.25 1451.53 23.3333 1451.53 -1.75341e-06L1492.61 0L1492.61 42.25C1469.93 42.25 1451.53 61.1667 1451.53 84.5Z"
        fill="#0F0F0F"
      />
    </g>
    <g :class="tabletAndUp" clip-path="url(#clip35_1028_28146)">
      <path
        d="M1492.61 126.75V169H1451.53C1451.53 145.662 1433.14 126.75 1410.45 126.75V84.5H1451.53C1451.53 107.833 1469.93 126.75 1492.61 126.75Z"
        fill="#0F0F0F"
      />
    </g>
    <g :class="tabletAndUp" clip-path="url(#clip36_1028_28146)">
      <path
        d="M1533.19 84.5L1492.11 84.5L1492.11 42.25C1514.81 42.25 1533.19 23.3333 1533.19 -1.75341e-06L1574.27 0L1574.27 42.25C1551.59 42.25 1533.19 61.1667 1533.19 84.5Z"
        fill="#0F0F0F"
      />
    </g>
    <g :class="tabletAndUp" clip-path="url(#clip37_1028_28146)">
      <path
        d="M1574.27 126.75V169H1533.19C1533.19 145.662 1514.8 126.75 1492.11 126.75V84.5H1533.19C1533.19 107.833 1551.59 126.75 1574.27 126.75Z"
        fill="#0F0F0F"
      />
    </g>
    <g :class="screenSmAndUp" clip-path="url(#clip38_1028_28146)">
      <path
        d="M1614.86 84.5L1573.77 84.5L1573.77 42.25C1596.47 42.25 1614.86 23.3333 1614.86 -1.75341e-06L1655.94 0L1655.94 42.25C1633.25 42.25 1614.86 61.1667 1614.86 84.5Z"
        fill="#0F0F0F"
      />
    </g>
    <g :class="screenSmAndUp" clip-path="url(#clip39_1028_28146)">
      <path
        d="M1655.94 126.75V169H1614.86C1614.86 145.662 1596.46 126.75 1573.77 126.75V84.5H1614.86C1614.86 107.833 1633.25 126.75 1655.94 126.75Z"
        fill="#0F0F0F"
      />
    </g>
    <g :class="screenSmAndUp" clip-path="url(#clip40_1028_28146)">
      <path
        d="M1696.52 84.5L1655.44 84.5L1655.44 42.25C1678.13 42.25 1696.52 23.3333 1696.52 -1.75341e-06L1737.6 0L1737.6 42.25C1714.91 42.25 1696.52 61.1667 1696.52 84.5Z"
        fill="#0F0F0F"
      />
    </g>
    <g :class="screenSmAndUp" clip-path="url(#clip41_1028_28146)">
      <path
        d="M1737.6 126.75V169H1696.52C1696.52 145.662 1678.12 126.75 1655.44 126.75V84.5H1696.52C1696.52 107.833 1714.91 126.75 1737.6 126.75Z"
        fill="#0F0F0F"
      />
    </g>
    <g :class="screenSmAndUp" clip-path="url(#clip42_1028_28146)">
      <path
        d="M1778.18 84.5L1737.1 84.5L1737.1 42.25C1759.79 42.25 1778.18 23.3333 1778.18 -1.75341e-06L1819.26 0L1819.26 42.25C1796.57 42.25 1778.18 61.1667 1778.18 84.5Z"
        fill="#0F0F0F"
      />
    </g>
    <g :class="screenSmAndUp" clip-path="url(#clip43_1028_28146)">
      <path
        d="M1819.26 126.75V169H1778.18C1778.18 145.662 1759.78 126.75 1737.1 126.75V84.5H1778.18C1778.18 107.833 1796.57 126.75 1819.26 126.75Z"
        fill="#0F0F0F"
      />
    </g>
    <g :class="screen" clip-path="url(#clip44_1028_28146)">
      <path
        d="M1859.84 84.5L1818.76 84.5L1818.76 42.25C1841.45 42.25 1859.84 23.3333 1859.84 -1.7534e-06L1900.92 0L1900.92 42.25C1878.23 42.25 1859.84 61.1667 1859.84 84.5Z"
        fill="#0F0F0F"
      />
    </g>
    <g :class="screen" clip-path="url(#clip45_1028_28146)">
      <path
        d="M1900.92 126.75V169H1859.84C1859.84 145.662 1841.45 126.75 1818.76 126.75V84.5H1859.84C1859.84 107.833 1878.23 126.75 1900.92 126.75Z"
        fill="#0F0F0F"
      />
    </g>
    <g :class="screen" clip-path="url(#clip46_1028_28146)">
      <path
        d="M1941.5 84.5L1900.42 84.5L1900.42 42.25C1923.11 42.25 1941.5 23.3333 1941.5 -1.75341e-06L1982.58 0L1982.58 42.25C1959.89 42.25 1941.5 61.1667 1941.5 84.5Z"
        fill="#0F0F0F"
      />
    </g>
    <g :class="screen" clip-path="url(#clip47_1028_28146)">
      <path
        d="M1982.58 126.75V169H1941.5C1941.5 145.662 1923.11 126.75 1900.42 126.75V84.5H1941.5C1941.5 107.833 1959.89 126.75 1982.58 126.75Z"
        fill="#0F0F0F"
      />
    </g>
    <g :class="screenLg" clip-path="url(#clip48_1028_28146)">
      <path
        d="M2023.16 84.5L1982.08 84.5L1982.08 42.25C2004.77 42.25 2023.16 23.3333 2023.16 -1.75341e-06L2064.24 0L2064.24 42.25C2041.56 42.25 2023.16 61.1667 2023.16 84.5Z"
        fill="#0F0F0F"
      />
    </g>
    <g :class="screenLg" clip-path="url(#clip49_1028_28146)">
      <path
        d="M2064.24 126.75V169H2023.16C2023.16 145.662 2004.77 126.75 1982.08 126.75V84.5H2023.16C2023.16 107.833 2041.56 126.75 2064.24 126.75Z"
        fill="#0F0F0F"
      />
    </g>
    <g :class="screenLg" clip-path="url(#clip50_1028_28146)">
      <path
        d="M2104.82 84.5L2063.74 84.5L2063.74 42.25C2086.44 42.25 2104.82 23.3333 2104.82 -1.7534e-06L2145.9 0L2145.9 42.25C2123.22 42.25 2104.82 61.1667 2104.82 84.5Z"
        fill="#0F0F0F"
      />
    </g>
    <g :class="screenLg" clip-path="url(#clip51_1028_28146)">
      <path
        d="M2145.9 126.75V169H2104.82C2104.82 145.662 2086.43 126.75 2063.74 126.75V84.5H2104.82C2104.82 107.833 2123.22 126.75 2145.9 126.75Z"
        fill="#0F0F0F"
      />
    </g>
    <defs>
      <clipPath id="clip0_1028_28146">
        <rect
          width="84.5"
          height="82.1614"
          fill="white"
          transform="matrix(4.47657e-08 1 1 -4.26819e-08 0.904358 0)"
        />
      </clipPath>
      <clipPath id="clip1_1028_28146">
        <rect
          width="82.1614"
          height="84.5"
          fill="white"
          transform="matrix(-1 0 0 1 83.0657 84.5)"
        />
      </clipPath>
      <clipPath id="clip2_1028_28146">
        <rect
          width="84.5"
          height="82.1614"
          fill="white"
          transform="matrix(4.47657e-08 1 1 -4.26819e-08 82.5657 0)"
        />
      </clipPath>
      <clipPath id="clip3_1028_28146">
        <rect
          width="82.1614"
          height="84.5"
          fill="white"
          transform="matrix(-1 0 0 1 164.727 84.5)"
        />
      </clipPath>
      <clipPath id="clip4_1028_28146">
        <rect
          width="84.5"
          height="82.1614"
          fill="white"
          transform="matrix(4.47657e-08 1 1 -4.26819e-08 164.227 0)"
        />
      </clipPath>
      <clipPath id="clip5_1028_28146">
        <rect
          width="82.1614"
          height="84.5"
          fill="white"
          transform="matrix(-1 0 0 1 246.389 84.5)"
        />
      </clipPath>
      <clipPath id="clip6_1028_28146">
        <rect
          width="84.5"
          height="82.1614"
          fill="white"
          transform="matrix(4.47657e-08 1 1 -4.26819e-08 245.889 0)"
        />
      </clipPath>
      <clipPath id="clip7_1028_28146">
        <rect
          width="82.1614"
          height="84.5"
          fill="white"
          transform="matrix(-1 0 0 1 328.05 84.5)"
        />
      </clipPath>
      <clipPath id="clip8_1028_28146">
        <rect
          width="84.5"
          height="82.1614"
          fill="white"
          transform="matrix(4.47656e-08 1 1 -4.2682e-08 327.55 0)"
        />
      </clipPath>
      <clipPath id="clip9_1028_28146">
        <rect
          width="82.1614"
          height="84.5"
          fill="white"
          transform="matrix(-1 0 0 1 409.711 84.5)"
        />
      </clipPath>
      <clipPath id="clip10_1028_28146">
        <rect
          width="84.5"
          height="82.1614"
          fill="white"
          transform="matrix(4.47656e-08 1 1 -4.2682e-08 409.211 0)"
        />
      </clipPath>
      <clipPath id="clip11_1028_28146">
        <rect
          width="82.1614"
          height="84.5"
          fill="white"
          transform="matrix(-1 0 0 1 491.373 84.5)"
        />
      </clipPath>
      <clipPath id="clip12_1028_28146">
        <rect
          width="84.5"
          height="82.1614"
          fill="white"
          transform="matrix(4.47656e-08 1 1 -4.2682e-08 490.873 0)"
        />
      </clipPath>
      <clipPath id="clip13_1028_28146">
        <rect
          width="82.1614"
          height="84.5"
          fill="white"
          transform="matrix(-1 0 0 1 573.034 84.5)"
        />
      </clipPath>
      <clipPath id="clip14_1028_28146">
        <rect
          width="84.5"
          height="82.1614"
          fill="white"
          transform="matrix(4.47656e-08 1 1 -4.2682e-08 572.534 0)"
        />
      </clipPath>
      <clipPath id="clip15_1028_28146">
        <rect
          width="82.1614"
          height="84.5"
          fill="white"
          transform="matrix(-1 0 0 1 654.695 84.5)"
        />
      </clipPath>
      <clipPath id="clip16_1028_28146">
        <rect
          width="84.5"
          height="82.1614"
          fill="white"
          transform="matrix(4.47656e-08 1 1 -4.2682e-08 654.195 0)"
        />
      </clipPath>
      <clipPath id="clip17_1028_28146">
        <rect
          width="82.1614"
          height="84.5"
          fill="white"
          transform="matrix(-1 0 0 1 736.357 84.5)"
        />
      </clipPath>
      <clipPath id="clip18_1028_28146">
        <rect
          width="84.5"
          height="82.1614"
          fill="white"
          transform="matrix(4.47656e-08 1 1 -4.2682e-08 735.857 0)"
        />
      </clipPath>
      <clipPath id="clip19_1028_28146">
        <rect
          width="82.1614"
          height="84.5"
          fill="white"
          transform="matrix(-1 0 0 1 818.018 84.5)"
        />
      </clipPath>
      <clipPath id="clip20_1028_28146">
        <rect
          width="84.5"
          height="82.1614"
          fill="white"
          transform="matrix(4.47656e-08 1 1 -4.2682e-08 817.518 0)"
        />
      </clipPath>
      <clipPath id="clip21_1028_28146">
        <rect
          width="82.1614"
          height="84.5"
          fill="white"
          transform="matrix(-1 0 0 1 899.68 84.5)"
        />
      </clipPath>
      <clipPath id="clip22_1028_28146">
        <rect
          width="84.5"
          height="82.1614"
          fill="white"
          transform="matrix(4.47656e-08 1 1 -4.2682e-08 899.18 0)"
        />
      </clipPath>
      <clipPath id="clip23_1028_28146">
        <rect
          width="82.1614"
          height="84.5"
          fill="white"
          transform="matrix(-1 0 0 1 981.341 84.5)"
        />
      </clipPath>
      <clipPath id="clip24_1028_28146">
        <rect
          width="84.5"
          height="82.1614"
          fill="white"
          transform="matrix(4.47656e-08 1 1 -4.2682e-08 980.841 0)"
        />
      </clipPath>
      <clipPath id="clip25_1028_28146">
        <rect
          width="82.1614"
          height="84.5"
          fill="white"
          transform="matrix(-1 0 0 1 1063 84.5)"
        />
      </clipPath>
      <clipPath id="clip26_1028_28146">
        <rect
          width="84.5"
          height="82.1614"
          fill="white"
          transform="translate(1165.97) rotate(90)"
        />
      </clipPath>
      <clipPath id="clip27_1028_28146">
        <rect
          width="82.1614"
          height="84.5"
          fill="white"
          transform="translate(1083.81 84.5)"
        />
      </clipPath>
      <clipPath id="clip28_1028_28146">
        <rect
          width="84.5"
          height="82.1614"
          fill="white"
          transform="translate(1247.63) rotate(90)"
        />
      </clipPath>
      <clipPath id="clip29_1028_28146">
        <rect
          width="82.1614"
          height="84.5"
          fill="white"
          transform="translate(1165.47 84.5)"
        />
      </clipPath>
      <clipPath id="clip30_1028_28146">
        <rect
          width="84.5"
          height="82.1614"
          fill="white"
          transform="translate(1329.29) rotate(90)"
        />
      </clipPath>
      <clipPath id="clip31_1028_28146">
        <rect
          width="82.1614"
          height="84.5"
          fill="white"
          transform="translate(1247.13 84.5)"
        />
      </clipPath>
      <clipPath id="clip32_1028_28146">
        <rect
          width="84.5"
          height="82.1614"
          fill="white"
          transform="translate(1410.95) rotate(90)"
        />
      </clipPath>
      <clipPath id="clip33_1028_28146">
        <rect
          width="82.1614"
          height="84.5"
          fill="white"
          transform="translate(1328.79 84.5)"
        />
      </clipPath>
      <clipPath id="clip34_1028_28146">
        <rect
          width="84.5"
          height="82.1614"
          fill="white"
          transform="translate(1492.61) rotate(90)"
        />
      </clipPath>
      <clipPath id="clip35_1028_28146">
        <rect
          width="82.1614"
          height="84.5"
          fill="white"
          transform="translate(1410.45 84.5)"
        />
      </clipPath>
      <clipPath id="clip36_1028_28146">
        <rect
          width="84.5"
          height="82.1614"
          fill="white"
          transform="translate(1574.27) rotate(90)"
        />
      </clipPath>
      <clipPath id="clip37_1028_28146">
        <rect
          width="82.1614"
          height="84.5"
          fill="white"
          transform="translate(1492.11 84.5)"
        />
      </clipPath>
      <clipPath id="clip38_1028_28146">
        <rect
          width="84.5"
          height="82.1614"
          fill="white"
          transform="translate(1655.94) rotate(90)"
        />
      </clipPath>
      <clipPath id="clip39_1028_28146">
        <rect
          width="82.1614"
          height="84.5"
          fill="white"
          transform="translate(1573.77 84.5)"
        />
      </clipPath>
      <clipPath id="clip40_1028_28146">
        <rect
          width="84.5"
          height="82.1614"
          fill="white"
          transform="translate(1737.6) rotate(90)"
        />
      </clipPath>
      <clipPath id="clip41_1028_28146">
        <rect
          width="82.1614"
          height="84.5"
          fill="white"
          transform="translate(1655.44 84.5)"
        />
      </clipPath>
      <clipPath id="clip42_1028_28146">
        <rect
          width="84.5"
          height="82.1614"
          fill="white"
          transform="translate(1819.26) rotate(90)"
        />
      </clipPath>
      <clipPath id="clip43_1028_28146">
        <rect
          width="82.1614"
          height="84.5"
          fill="white"
          transform="translate(1737.1 84.5)"
        />
      </clipPath>
      <clipPath id="clip44_1028_28146">
        <rect
          width="84.5"
          height="82.1614"
          fill="white"
          transform="translate(1900.92) rotate(90)"
        />
      </clipPath>
      <clipPath id="clip45_1028_28146">
        <rect
          width="82.1614"
          height="84.5"
          fill="white"
          transform="translate(1818.76 84.5)"
        />
      </clipPath>
      <clipPath id="clip46_1028_28146">
        <rect
          width="84.5"
          height="82.1614"
          fill="white"
          transform="translate(1982.58) rotate(90)"
        />
      </clipPath>
      <clipPath id="clip47_1028_28146">
        <rect
          width="82.1614"
          height="84.5"
          fill="white"
          transform="translate(1900.42 84.5)"
        />
      </clipPath>
      <clipPath id="clip48_1028_28146">
        <rect
          width="84.5"
          height="82.1614"
          fill="white"
          transform="translate(2064.24) rotate(90)"
        />
      </clipPath>
      <clipPath id="clip49_1028_28146">
        <rect
          width="82.1614"
          height="84.5"
          fill="white"
          transform="translate(1982.08 84.5)"
        />
      </clipPath>
      <clipPath id="clip50_1028_28146">
        <rect
          width="84.5"
          height="82.1614"
          fill="white"
          transform="translate(2145.9) rotate(90)"
        />
      </clipPath>
      <clipPath id="clip51_1028_28146">
        <rect
          width="82.1614"
          height="84.5"
          fill="white"
          transform="translate(2063.74 84.5)"
        />
      </clipPath>
    </defs>
  </svg>
</template>
