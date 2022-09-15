import Xbox from './lib/src/xbox/xbox';

const client = new Xbox('', {language: 'pt-BR'})

async function a() {
   let b = await client.user
   console.log(b)
}
a()