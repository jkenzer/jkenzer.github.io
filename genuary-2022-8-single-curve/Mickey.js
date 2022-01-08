class Mickey {
  constructor(x, y, scale, angle = 0) {
    // let scale = 0.125;
    push();
    translate(x, y);
    rotate(angle);
    // face
    arc(0, 0, 270 * scale, 270 * scale, 342, 198);
    // top
    arc(0, 0, 270 * scale, 270 * scale, 254, 283);
    // left ear
    arc(-120 * scale, -125 * scale, 163 * scale, 163 * scale, 95, 357);
    // right ear
    arc(114 * scale, -123 * scale, 163 * scale, 163 * scale, 186, 80);
    pop();
  }
}
