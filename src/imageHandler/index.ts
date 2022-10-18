import fetch from 'node-fetch';
import sharp from 'sharp';
import Jimp from 'jimp';

const downloadImage = async (url: string): Promise<Buffer> => {
  const result = await fetch(url);
  const response = Buffer.from(await result.arrayBuffer())

  return response;
}

const saveImage = async (imageBuffer: Buffer): Promise<void> => {
  await sharp(imageBuffer).toFile('./temp/image.jpeg');
}

const imageHandler = async (url: string): Promise<void> => {
  const imageBuffer = await downloadImage(url);
  const metadata = await sharp(imageBuffer).metadata();

  const imageWidth = metadata.width as number;
  const imageHeight = metadata.height as number;

  // save image to be used by jimp
  await saveImage(imageBuffer);

  // write text to image
  // possibly will need to integrate a SVG file with only the text and overlay (sharp.overlay) the temp image with it
  const imageCaption = {
    head: 'Bom dia!',
    body: 'Não importa a cor do céu,',
    footer: 'quem faz a manhã bonita é você.'
  }
  const loadedImage = await Jimp.read('./temp/image.jpeg');
  const font = await Jimp.loadFont(Jimp.FONT_SANS_64_BLACK);

  loadedImage.print(font, (imageWidth / 4), (imageHeight / 2 - 200), imageCaption.head);
  loadedImage.print(font, (imageWidth / 6), (imageHeight / 2 - 100), imageCaption.body);
  loadedImage.print(font, (imageWidth / 10), (imageHeight / 2 - 0), imageCaption.footer);

  loadedImage.write('./temp/image.jpeg');
};

export default imageHandler;
