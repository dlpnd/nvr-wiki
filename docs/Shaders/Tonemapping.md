# Tonemapping

---

## Main

### TonemappingMode

Tonemapping Algorithm -  0: None (vanilla), 1: VTLottes (default), 2:NVRLottes, 3:Reinhard, 4: Reinhard Jodie, 5: ACES Filmic, 6: ACES Fitted, 7:Uncharted 2, 8:Uchimura (GT), 9:AGX

>Default: 1

---

### Exposure

Scales the engine lighting strength/brightness range before tonemap, useful for HDR rendering

>Default: 1.0

---

### Gamma

Gamma modifier to be applied after tonemapping, delinearises output. If placed at 1.0, outputs at linear space for HDR (UI unaffected)

>Default: 2.2

---

### Linearization

Converts image to corrected linear space before tonemapping. 1.0 is non-linear, if so place Gamma at 1.0 as well

>Default: 2.2

---

### SkyMultiplier

Scales the brightness of the sky/sun textures. Requires Sky shader enabled

>Default: 1.0

---

### WeatherModifier

Influence of the vanilla weather modifiers (brightness, contrast, saturation)

>Default: 1.0

---

### WeatherContrast

Influence of the vanilla contrast setting, applies post-tonemap. Scales atop WeatherModifier, can cause black crush

>Default: 0.1

---

### Saturation

Saturation of the image before tonemapping

>Default: 1.0

---

### ToneMappingColor

Changes the strength of the vanilla tint influence (not fades)

>Default: 1.0

---

### TonemapContrast

Contrast setting for Lottes, Uchimura

>Default: 1.0

---

### TonemapBrightness

Brightness setting for Lottes, Uncharted, Uchimura

>Default: 1.0

---

### TonemapMidpoint

Midpoint setting for Lottes Tonemapper (avoid changing), Linear Section Start for Uchimura

>Default: 1.0

---

### TonemapShoulder

White Shoulder for Lottes (max 1.0, should be left default), Black shoulder for Uchimura

>Default: 1.0

---

### TonemapWhitePoint

White point Setting for Lottes, Reinhard (both), Uncharted. Adjust point that the image clips/exceeds max brightness. For Uchimura, adjusts Linear Section Length (soft clips whites)

>Default: 1.0

---

### HighlightSaturation

Highlight saturation for VT Lottes, controls how saturated bright elements are as they approach the White Point

>Default: 1.0

---

### BloomExponent

Makes the bloom more spread out or more focused

>Default: 0.7

---

### BloomStrength

Scales the game's bloom pass strength

>Default: 0.15

---

### PointLightMultiplier

Experimental - modifies the strength of all point lights

>Default: 1.0

---

## Interiors

### TonemappingMode

Tonemapping Algorithm -  0: None (vanilla), 1: VTLottes (default), 2:NVRLottes, 3:Reinhard, 4: Reinhard Jodie, 5: ACES Filmic, 6: ACES Fitted, 7:Uncharted 2, 8:Uchimura (GT), 9:AGX

>Default: 1

---

### Exposure

Scales the engine lighting strength/brightness range before tonemap, useful for HDR rendering

>Default: 1.2

---

### Gamma

Gamma modifier to be applied after tonemapping, delinearises output. If placed at 1.0, outputs at linear space for HDR (UI unaffected)

>Default: 2.2

---

### Linearization

Converts image to corrected linear space before tonemapping. 1.0 is non-linear, if so place Gamma at 1.0 as well

>Default: 2.2

---

### SkyMultiplier

Scales the brightness of the sky/sun textures. Requires Sky shader enabled

>Default: 1.0

---

### WeatherModifier

Influence of the vanilla weather modifiers (brightness, contrast, saturation)

>Default: 1.0

---

### WeatherContrast

Influence of the vanilla contrast setting, applies post-tonemap. Scales atop WeatherModifier, can cause black crush notably in Interiors

>Default: 0.1

---

### Saturation

Saturation of the image before tonemapping

>Default: 1.0

---

### ToneMappingColor

Changes the strength of the vanilla tint influence (not fades)

>Default: 1.0

---

### TonemapContrast

Contrast setting for Lottes, Uchimura

>Default: 1.0

---

### TonemapBrightness

Brightness setting for Lottes, Uncharted, Uchimura

>Default: 1.0

---

### TonemapMidpoint

Midpoint setting for Lottes Tonemapper (avoid changing), Linear Section Start for Uchimura

>Default: 1.0

---

### TonemapShoulder

White Shoulder for Lottes (max 1.0, should be left default), Black shoulder for Uchimura

>Default: 1.0

---

### TonemapWhitePoint

White point Setting for Lottes, Reinhard (both), Uncharted. Adjust point that the image clips/exceeds max brightness. For Uchimura, adjusts Linear Section Length (soft clips whites)

>Default: 1.0

---

### HighlightSaturation

Highlight saturation for VT Lottes, controls how saturated bright elements are as they approach the White Point

>Default: 1.0

---

### BloomExponent

Makes the bloom more spread out or more focused

>Default: 0.9

---

### BloomStrength

Scales the game's bloom pass strength

>Default: 0.03

---

### PointLightMultiplier

Experimental - modifies the strength of all point lights

>Default: 1.0

---

## Night

### TonemappingMode

Tonemapping Algorithm -  0: None (vanilla), 1: VTLottes (default), 2:NVRLottes, 3:Reinhard, 4: Reinhard Jodie, 5: ACES Filmic, 6: ACES Fitted, 7:Uncharted 2, 8:Uchimura (GT), 9:AGX

>Default: 1

---

### Exposure

Scales the engine lighting strength/brightness range before tonemap, useful for HDR rendering

>Default: 1.2

---

### Gamma

Gamma modifier to be applied after tonemapping, delinearises output. If placed at 1.0, outputs at linear space for HDR (UI unaffected)

>Default: 2.2

---

### Linearization

Converts image to corrected linear space before tonemapping. 1.0 is non-linear, if so place Gamma at 1.0 as well

>Default: 2.2

---

### SkyMultiplier

Scales the brightness of the sky/sun textures. Requires Sky shader enabled

>Default: 1.0

---

### WeatherModifier

Influence of the vanilla weather modifiers (brightness, contrast, saturation)

>Default: 1.0

---

### WeatherContrast

Influence of the vanilla contrast setting, applies post-tonemap. Scales atop WeatherModifier, can cause black crush notably in Interiors

>Default: 0.1

---

### Saturation

Saturation of the image before tonemapping

>Default: 1.0

---

### ToneMappingColor

Changes the strength of the vanilla tint influence (not fades)

>Default: 1.0

---

### TonemapContrast

Contrast setting for Lottes, Uchimura

>Default: 1.0

---

### TonemapBrightness

Brightness setting for Lottes, Uncharted, Uchimura

>Default: 1.0

---

### TonemapMidpoint

Midpoint setting for Lottes Tonemapper (avoid changing), Linear Section Start for Uchimura

>Default: 1.0

---

### TonemapShoulder

White Shoulder for Lottes (max 1.0, should be left default), Black shoulder for Uchimura

>Default: 1.0

---

### TonemapWhitePoint

White point Setting for Lottes, Reinhard (both), Uncharted. Adjust point that the image clips/exceeds max brightness. For Uchimura, adjusts Linear Section Length (soft clips whites)

>Default: 1.0

---

### HighlightSaturation

Highlight saturation for VT Lottes, controls how saturated bright elements are as they approach the White Point

>Default: 1.0

---

### BloomExponent

Makes the bloom more spread out or more focused

>Default: 0.9

---

### BloomStrength

Scales the game's bloom pass strength

>Default: 0.3

---

### PointLightMultiplier

Experimental - modifies the strength of all point lights

>Default: 1.0

---

## Status

### Enabled

Replaces vanilla HDR tonemapping shaders with custom ones.

>Default: true

---
