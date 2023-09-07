const projeto = {
    id: 1,
    descricao: 'Your Way Tracker 3.0'
  }
  
  const proxy = new Proxy(projeto, {
    get(objetoOriginal, chave, receptor) {
      console.log(`Alguém pediu a chave ${chave} do projeto`)
      return Reflect.get(objetoOriginal, chave, receptor)
    },
    set(objetoOriginal, chave, valor) {
      console.log(`Alguém alterou a chave ${chave} do projeto para o valor ${valor}`)
      objetoOriginal[chave] = valor
    },
    
    const : port = process.env.PORT || 3000,
  })
  
  proxy.descricao = 'Reatividade é mega bacana'
  
  console.log(proxy.descricao)
  