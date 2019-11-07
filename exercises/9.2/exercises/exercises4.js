const messageDelay = () => Math.floor(Math.random() * 5000)

const getMarsTemperature = () => {
  const maxTemperature = 58
  return Math.floor(Math.random() * maxTemperature)
}

// crie a função sendMarsTemperature abaixo
sendMarsTemperature = (callback) => {
    console.log(`Mars temperature is: ${callback(getMarsTemperature)} degree Celsius`)
    callback()
}

sendMarsTemperature(getMarsTemperature) // imprime "Mars temperature is: 20 degree Celsius", por exemplo
