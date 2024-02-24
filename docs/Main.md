---
sidebar_position: 5
---

# Main Settings

## CameraMode

---

### Main

#### ChasingFirst

Use Chasing camera in first person.

>Default: false

---

#### ChasingThird

Use Chasing camera in third person.

>Default: false

---

#### Crosshair

Display crosshair in Camera Mode.

>Default: 0

---

#### Enabled

Activate Camera Mode.

>Default: false

---

#### FoV

Custom FOV in Camera Mode.

>Default: 90.0

---

### Positioning

#### AimingOffsetX

>Default: -1.0

---

#### AimingOffsetY

>Default: 15.0

---

#### AimingOffsetZ

>Default: 4.5

---

#### DialogOffsetX

>Default: -50.0

---

#### DialogOffsetY

>Default: -50.0

---

#### DialogOffsetZ

>Default: 10.0

---

#### OffsetX

>Default: 0.0

---

#### OffsetY

>Default: 15.0

---

#### OffsetZ

>Default: 5.0

---

## Develop

---

### Main

#### CompileEffects

1 to always recompile, 2 to recompile newer versions.

>Default: 2

---

#### CompileShaders

1 to always recompile, 2 to recompile newer versions.

>Default: 2

---

#### DebugMode

Enables debug features like capture shaders and print shadowmaps.

>Default: false

---

#### DebugVar1

Custom variable used when developing shaders.

>Default: 1.0

---

#### DebugVar2

Custom variable used when developing shaders.

>Default: 1.0

---

#### DebugVar3

Custom variable used when developing shaders.

>Default: 1.0

---

#### DebugVar4

Custom variable used when developing shaders.

>Default: 1.0

---

#### TraceShaders

Keyboard shortcut to print used shaders list to the log.

>Default: 25

---

## FlyCam

---

### Main

#### Enabled

>Default: true

---

#### KeyAdd

>Default: 78

---

#### KeySubtract

>Default: 74

---

#### ScrollMultiplier

>Default: 2.0

---

#### StepValue

>Default: 1.0

---

## FrameRate

---

### SmartControl

#### FlowControl

>Default: -0.5

---

#### SmartControl

>Default: false

---

#### SmartControlFPS

>Default: 60

---

### Stuttering

#### BackgroundThreadPriority

>Default: 5

---

#### SmartBackgroundProcess

>Default: false

---

## LowHFSound

---

### Main

#### FatigueCoeff

>Default: 0.5

---

#### FatigueEnabled

>Default: true

---

#### HealthCoeff

>Default: 0.5

---

#### HealthEnabled

>Default: false

---

## Main

---

### Misc

#### ForceMSAA

Override game setting to force MSAA.

>Default: false

---

#### RenderEffects

Toggle rendering of all effects.

>Default: true

---

#### RenderPreTonemapping

Toggle rendering of some effects in HDR before the game image space effects (can cause glitches).

>Default: true

---

#### ReplaceIntro

Controls rendering of the main menu custom video.

>Default: false

---

#### ScreenshotKey

Keycode for custom screenshot hotkey (removes HUD and saves as jpg).

>Default: 87

---

### Precipitations

#### RemovePrecipitations

Disables vanilla rain and other precipitations.

>Default: false

---

### Water

#### ForceReflections

Always render the full world in reflection for HD reflections.

>Default: true

---

#### RemoveUnderwater

Disables fog underwater. Not compatible with custom underwater shader.

>Default: false

---

## Menu

---

### DirectX Scan Codes

The keys are DirectX Scan Codes.

<details>
  <summary>View Codes</summary>

```text
Key Button
  1 Escape
  2 1
  3 2
  4 3
  5 4
  6 5
  7 6
  8 7
  9 8
 10 9
 11 0
 12 -
 13 =
 14 Backspace
 15 Tab
 16 Q
 17 W
 18 E
 19 R
 20 T
 21 Y
 22 U
 23 I
 24 O
 25 P
 26 [
 27 ]
 28 Enter
 29 Left Control
 30 A
 31 S
 32 D
 33 F
 34 G
 35 H
 36 J
 37 K
 38 L
 39 ;
 40 '
 41 ~
 42 Left Shift
 43 \
 44 Z
 45 X
 46 C
 47 V
 48 B
 49 N
 50 M
 51 ,
 52 .
 53 /  
 54 Right Shift
 55 NUM*
 56 Left Alt
 57 Spacebar
 58 Caps Lock
 59 F1
 60 F2
 61 F3
 62 F4
 63 F5
 64 F6
 65 F7
 66 F8
 67 F9
 68 F10
 69 Num Lock
 70 Scroll Lock
 71 NUM7
 72 NUM8
 73 NUM9
 74 NUM-
 75 NUM4
 76 NUM5
 77 NUM6
 78 NUM+
 79 NUM1
 80 NUM2
 81 NUM3
 82 NUM0
 83 NUM.
 87 F11
 88 F12
156 NUM Enter
157 Right Control
181 NUM/
184 Right Alt
199 Home
200 Up Arrow
201 PgUp
203 Left Arrow
205 Right Arrow
207 End
208 Down Arrow
209 PgDown
210 Insert
211 Delete
256 Left Mouse Button
257 Right Mouse Button
258 Middle/Wheel Mouse Button
259 Mouse Button 3
260 Mouse Button 4
261 Mouse Button 5
262 Mouse Button 6
263 Mouse Button 7
264 Mouse Wheel Up
265 Mouse Wheel Down
```

</details>

### Keys

#### KeyAdd

Keycode for increment value shortcut in menu.

>Default: 78

---

#### KeyDown

Keycode for the hotkey to navigate down in the main menu.

>Default: 208

---

#### KeyEditing

Keycode for the hotkey to toggle custom value entry mode in menu.

>Default: 156

---

#### KeyEnable

Keycode for the hotkey to activate the main menu.

>Default: 24

---

#### KeyLeft

Keycode for the hotkey to navigate left in the main menu.

>Default: 203

---

#### KeyPageDown

Keycode for the hotkey to go to next page of options in the main menu.

>Default: 209

---

#### KeyPageUp

Keycode for the hotkey to go to previous page of options in the main menu.

>Default: 201

---

#### KeyRight

Keycode for the hotkey to navigate right in the main menu.

>Default: 205

---

#### KeySave

Keycode for the hotkey to save changes done in the main menu (if not used, will revert upon restart).

>Default: 28

---

#### KeySubtract

Keycode for decrement value shortcut in menu.

>Default: 74

---

#### KeyUp

Keycode for the hotkey to navigate up in the main menu.

>Default: 200

---

#### EntryUseNumpad

Wether to use the numpad numbers or the other numbers. Start entry with "=" or numpad "Enter"

>Default: true

---

### Style

#### ItemColumnSize

Custom size for menu columns.

>Default: 300

---

#### MainItemColumnSize

Custom size for menu leftmost column.

>Default: 100

---

#### PositionX

Left position of the menu on the screen.

>Default: 60

---

#### PositionY

Top position of the menu on the screen.

>Default: 60

---

#### RowSpace

Custom padding between rows for the menu.

>Default: 0

---

#### RowsPerPage

Max amount of items to display per page on the menu.

>Default: 35

---

#### TextColorEditing

Custom color for value being edited during value entry.

>Default: '255,100,50'

---

#### TextColorEnabled

Custom color for active effects.

>Default: '100,170,90'

---

#### TextColorNormal

Custom color for normal menu text.

>Default: '240,200,80'

---

#### TextColorSelected

Custom color for selected menu text.

>Default: '255,255,255'

---

#### TextFont

Custom font for menu text.

>Default: 'Calibri'

---

#### TextFontStatus

Custom font for enabled/disabled shader text.

>Default: 'Consolas'

---

#### TextShadowColorEditing

Custom shadow color for value being edited during value entry.

>Default: '50,50,50'

---

#### TextShadowColorEnabled

Custom shadow color for enabled/disabled text.

>Default: '50,50,50'

---

#### TextShadowColorNormal

Custom shadow color for normal text.

>Default: '50,50,50'

---

#### TextShadowColorSelected

Custom shadow color for selected text.

>Default: '50,50,50'

---

#### TextSize

Font size for normal text.

>Default: 22

---

#### TextSizeStatus

Font size for enabled/disabled text.

>Default: 12

---

#### TitleColumnSize

Custom size for title column.

>Default: 850

---

## SleepingMode

---

### Main

#### Enabled

Custom camera animation when player character goes to sleep.

>Default: false

---

#### Mode

>Default: 0

---

## WeatherMode

---

### General

#### CoeffFogB

>Default: 0.86

---

#### CoeffFogG

>Default: 0.88

---

#### CoeffFogR

>Default: 0.9

---

#### CoeffNightB

>Default: 0.5

---

#### CoeffNightG

>Default: 0.6

---

#### CoeffNightR

>Default: 0.6

---

#### CoeffSunB

>Default: 0.8

---

#### CoeffSunG

>Default: 0.9

---

#### CoeffSunR

>Default: 1.0

---

### Main

#### Enabled

>Default: false

---
