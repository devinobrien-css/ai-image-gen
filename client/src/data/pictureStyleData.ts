import { PictureStyle } from "../objects/PictureStyle";
import { SelectionOption } from "../objects/SelectionOption";

export const pictureStyleData: Array<PictureStyle> = [
  {
    label: "Realistic",
    format: (character: SelectionOption|undefined|undefined, activity: SelectionOption|undefined|undefined, place: SelectionOption|undefined) =>
      `${character?.label || ''} ${activity?.label || ''} in front of ${place?.label || ''}, exquisite detail, 30-megapixel, 4k,\
 85-mm-lens, sharp-focus, intricately-detailed, long exposure time, f/8, ISO 100, shutter-speed 1/125,\
 diffuse-back-lighting, award-winning photograph, facing-camera, looking-into-camera, monovisions, elle,\
 small-catchlight, low-contrast, High-sharpness, facial-symmetry, depth-of-field, golden-hour, ultra-detailed photography --v 4`,
  },
  {
    label: "Vintage Film",
    format: (character: SelectionOption|undefined, activity: SelectionOption|undefined, place: SelectionOption|undefined) =>
      `${character?.label || ''} ${activity?.label || ''}, ${place?.label || ''} background, 1960s, technicolor old movie film grain scratches dirt and imperfections.\
 film lighting. . very detailed face, proportional face, open eyes, photorealistic, very detailed arms, sharp focus,\
 ultra realistic, ultra detailed, cinematic lighting, photographic, Eastman Kodak Color Negative film 5251 50T shot on panavision super ps .--v 4`,
  },
  {
    label: "Superhero",
    format: (character: SelectionOption|undefined, activity: SelectionOption|undefined, place: SelectionOption|undefined) =>
      `${character?.label || ''} superhero ${activity?.label || ''} ${place?.label || ''} : windswept, inlighted --v 4 --upbeta`,
  },
  {
    label: "Cyborg Glam",
    format: (character: SelectionOption|undefined, activity: SelectionOption|undefined, place: SelectionOption|undefined) =>
      `A glamour portrait of a gorgeous futuristic cyberpunk cyborg ${character?.label || ''} ${activity?.label || ''} in style of Marcin Nagreba and Tim Flach,\
 wearing intricate haute couture clothing, jewellery and headpiece, next to ${place?.label || ''} as background,\
 dark cyan and orange and pink tones and dramatic light, no text, sharp focus, editorial portrait --v 4 --upbeta`,
  },
  {
    label: "RetroWave",
    format: (character: SelectionOption|undefined, activity: SelectionOption|undefined, place: SelectionOption|undefined) =>
      `Retrowave ${character?.label || ''} ${activity?.label || ''} next to ${place?.label || ''}, Full body shot, anime style,\
 Trigger Studio style, manga art, comics, inking, graffiti art, graphic, neon colors, golden ratio composition, design for tshirt --v 4`,
  },
  {
    label: "Groovy",
    format: (character: SelectionOption|undefined, activity: SelectionOption|undefined, place: SelectionOption|undefined) =>
      `sequined ${character?.label || ''} ${activity?.label || ''} next to ${place?.label || ''}, disco lighting, ray tracing, overwatch style --v 4`,
  },
  {
    label: "Watercolor",
    format: (character: SelectionOption|undefined, activity: SelectionOption|undefined, place: SelectionOption|undefined) =>
      `watercolour sketch ${character?.label || ''} ${activity?.label || ''} with ${place?.label || ''} in back —-v 4`,
  },
  {
    label: "Futuristic",
    format: (character: SelectionOption|undefined, activity: SelectionOption|undefined, place: SelectionOption|undefined) =>
      `${character?.label || ''} ${activity?.label || ''}, in front of ${place?.label || ''}, blue and pink neon lightning, front view,\
 incredible detail, detail sharpening, static cinematic production, 8k, HD, cinematography, photorealistic photography,\
 epic composition, Unreal Engine, cinematic, color grading, ultra wide angle, depth field, highly detailed,\
 beautifully coloured, insane detail, intricate detail, beautiful colours, unreal engine, cinematic, color grading,\
 editorial photography, photography, image capture, depth of field, DOF, tilt blur, white balance, 32k, resolution Ultra,\
 Megapixel, ProPhoto RGB, VR, Half Moon Lighting, Backlighting, Natural Lighting, Incandescent, Fiber Optic, Mood Lighting,\
 Cinematic Lighting, Studio Lighting, Soft Lighting, Photorealistic, Volumetric, Fine Lighting, Feature Lighting,\
 Global Lighting, Global Illumination, Global Illumination in Screen Space, Global Illumination by Ray Tracing, Optics,\
 Dispersion, Brightness, Shadows, Roughness, Glare, Ray Traced Reflections, Lumen Reflections, Reflections in Screen Space,\
 Diffracti on Gradation, Chromatic Aberration, G B Displacement, Scan Lines, Ray Tracing, Ray Tracing Ambient Occlusion,\
 Anti-Aliasing, FKAA, TXAA, RTX, SSAO, Shaders, OpenGL-Shaders, GLSL-Shaders, Post Processing, Post-Production, Cel shaders,\
 Tone Mapping, CGI, VFX, SFX, Insanely detailed and complex, Hyper-maximized, Stylish, Hyper-realistic,\
 Highly detailed dynamic mode, Shooting, 8k ar 2:3 --v 4`,
  },
  {
    label: "Pixar-ish",
    format: (character: SelectionOption|undefined, activity: SelectionOption|undefined, place: SelectionOption|undefined) =>
      `${character?.label || ''} character, ${activity?.label || ''}, ${place?.label || ''} background, pixar, cute, funny, pastel colors, lsd, colorful --v 4 --q 2`,
  },
  {
    label: "Anime/Ghibli",
    format: (character: SelectionOption|undefined, activity: SelectionOption|undefined, place: SelectionOption|undefined) =>
      `overwatch character ${character?.label || ''} ${activity?.label || ''}, 2D digital painting, side profile full body shot,\
 beautiful character concept art, isolated on ${place?.label || ''} background, with, highly detailed, clean lines,\
 anime-style vector art, cel-shading, digital illustration, --ar 3:2 --upbeta --v 4`,
  },
  {
    label: "Minecraft",
    format: (character: SelectionOption|undefined, activity: SelectionOption|undefined, place: SelectionOption|undefined) =>
      `Minecraft world, with a ${character?.label || ''} ${activity?.label || ''}, cube tree, egypt pyramids, the sky is groaning darkness.\
 in fantasy art style, perfect lighting, ultra detailed, redshift render, zbrush, fantasy, 8k,\
 extremely detailed and intricate, unreal engine, ultra realistic, hdr, octane render, studio quality 8k UHD,\
 enhanced quality, art station, wlop and artgerm style, cinematic, by Canon EOS 5D Mark4 and SIGMA Art Lens 35mm F1.4 DG HSM,\
 F1.4, ISO 200 Shutter Speed 2000. --q 2 --v 4`,
  },
  {
    label: "Pencil Sketch",
    format: (character: SelectionOption|undefined, activity: SelectionOption|undefined, place: SelectionOption|undefined) =>
      `Coloring book for adults, detailed ${character?.label || ''} ${activity?.label || ''}, ${place?.label || ''} behind, 8K,\
 Very detailed, white Hand draw, pencil sketch, Black and white, Printable outlined art, Crisp lines --ar 2:3\
 --stylize 1000 --v 4 --v 4 --s 20000 --upbeta --q 2`,
  },
  {
    label: "B/W Line-Art",
    format: (character: SelectionOption|undefined, activity: SelectionOption|undefined, place: SelectionOption|undefined) =>
      `black and white line art, no shading, for adults, ${character?.label || ''} ${activity?.label || ''}, ${place?.label || ''} in background,\
 8K, Very detailed, white Hand draw, pencil sketch, Black and white, Printable outlined art, Crisp lines --ar 2:3\
 --stylize 1000 --v 4 --v 4 --s 20000 --upbeta --q 2`,
  },
];