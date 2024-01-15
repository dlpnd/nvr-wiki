# VolumetricFog

---

## Main

### Amount

Global multiplier for fog strength in exteriors

>Default: 1.0

---

### AmountInterior

Global multiplier for fog strength in interiors

>Default: 1.0

---

### SunPower

Controls the influence of Sun Color when shining through fog

>Default: 1.0

---

### LowFogDensity

Density of low lying fog using weather fog colors and sun influence

>Default: 1.0

---

### LowFogFalloff

Vertical falloff of low fog

>Default: 1.0

---

### LowFogDist

Distance falloff of low fog, low values disperse fog vs concentrate distant fog

>Default: 1.0

---

### LowFogBlend

Influence of low fog vs height fog when blending the two forms

>Default: 1.0

---

### LowFogHeight

Adjusts the level that additional height falloff occurs at for low fog

>Default: 1.0

---

### HeightFogDensity

Density of low lying fog using a weather fog color, sky color blend and sun color blend

>Default: 1.0

---

### HeightFogFalloff

Vertical falloff of atmospheric height fog,

>Default: 1.0

---

### HeightFogDist

Distance falloff of atmospheric height fog, low values disperse fog vs concentrate distant fog

>Default: 1.0

---

### HeightFogSkyColor

Distance falloff of Sky Coloring in Height Fog, lower values push sky color closer to the camera

>Default: 1.0

---

### HeightFogHeight

Adjusts the level that additional height falloff occurs at for high fog

>Default: 1.0

---

### HeightFogBlend

Influence of height fog vs low fog when blending the two forms

>Default: 1.0

---

### HeightFogRolloff

Combined falloff of Height and Low fog, high values disperse fog vs low values concentrating distant fog

>Default: 1.0

---

### SimpleFogExtinction

Extinction factor in coloring, or light lost due to absorption of particles

>Default: 1.0

---

### SimpleFogInscattering

Inscattering factor in coloring, or light gained from sun scaterring

>Default: 1.0

---

### SimpleFogNight

Power of extinction factor at night time, which uses only simple fog

>Default: 1.0

---

### SimpleFogSkyColor

Distance falloff of Sky Coloring in Simple Fog, lower values push sky color closer to the camera

>Default: 1.0

---

### SimpleFogHeight

Adjusts the level that additional height falloff occurs at for simple fog

>Default: 1.0

---

### SimpleFogBlend

Final blend of simple fog vs height/low fog, low values can remove influence of latter forms and vice versa

>Default: 1.0

---

## Status

### Enabled

Volumetric fog shader tinted by the sun. Rendered after shadows and other effects for more accurate effect.

>Default: true

---
