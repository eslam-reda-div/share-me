import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: '3hf7spi5',
  dataset: 'production',
  apiVersion: '2023-05-03',
  useCdn: true,
  token: 'sk0L2FLeMbNzNvpCujHxYtqKFa1Jfy7CQ5YOdxf8JEDCKL7XChPJ3kQRPUrW2IYC9pA0naV5iU8oCyljyrZgIgeF1BRvpUJ0y2CyhrtwFvK8P9w213ZZ7NCpcG0W5QwKljWesd65dXaD76ZP1wyoLIzqdPTFeRggER27djgMuLy4wcZoHqrm',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
