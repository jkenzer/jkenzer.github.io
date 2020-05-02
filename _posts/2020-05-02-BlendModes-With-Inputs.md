# Trying in a Markdown file

<script src="/sketchbook/p5.min.js"></script>
<script src="/sketchbook/blend-mode/blendmode-inputs.js"></script>

<div id="sketch"></div>

## Blend Mode

### N:ODD
    <select onchange="handleonchange(this,'ODD')">
      <option value="0">BLEND</option>
      <option value="1">ADD</option>
      <option value="2">DARKEST</option>
      <option value="3">LIGHTEST</option>
      <option value="4">DIFFERENCE</option>
      <option value="5">EXCLUSION</option>
      <option value="6">MULTIPLY</option>
      <option value="7">OVERLAY</option>
      <option value="8">HARD LIGHT</option>
      <option value="9">SOFT LIGHT</option>
      <option value="10">DODGE</option>
      <option value="11">BURN</option>
    </select>
### N:EVEN
    <select onchange="handleonchange(this,'EVEN')">
      <option value="1">ADD</option>
      <option value="0">BLEND</option>
      <option value="2">DARKEST</option>
      <option value="3">LIGHTEST</option>
      <option value="4">DIFFERENCE</option>
      <option value="5">EXCLUSION</option>
      <option value="6">MULTIPLY</option>
      <option value="7">OVERLAY</option>
      <option value="8">HARD LIGHT</option>
      <option value="9">SOFT LIGHT</option>
      <option value="10">DODGE</option>
      <option value="11">BURN</option>
    </select>
## Stroke Weight
<input value="30" type="text" onblur="handleStrokeChange(this)" />