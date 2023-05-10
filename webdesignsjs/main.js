let cacheTheme

const changeHtml = (str) => {
  const changeLeftArrow = str.replaceAll('<', '&lt;')
  const changeRightArrow = changeLeftArrow.replaceAll('>', '&gt')
  return changeRightArrow
}

const showCode = (selectedTheme) => {
  const code = document.querySelector('code')

  const mainCode = mainCodeData(selectedTheme);
  const htmlCode =
    `<!DOCTYPE html>
<html lang="en">
  `+ mainCode + `
</html>
`

  const contentCode = changeHtml(htmlCode)
  code.innerHTML = contentCode
  varGlobalToCopyHtmlCode = htmlCode
  localStorage.setItem('changeTheme', mainCode)
}

const dataForLoSto = (data, cacheTheme) => {
  return {
    bg: data.bg,
    color: data.color,
    button: data.button,
    buttonHover: data.buttonHover,
    cacheTheme,
  }
}

const firstTheme = (_) => {
  cacheTheme = themes[0]
  showCode(themes[0])
  document.querySelector('iframe').contentWindow.location.reload()
  hljs.highlightAll()
  const iframe = document.querySelector('iframe')
  setTimeout(() => {
    iframe.style.opacity = '1'
  }, 500)
}

const changeTheme = (name) => {
  const iframe = document.querySelector('iframe')
  iframe.style.opacity = '0'
  const selectedTheme = themes.filter((theme) => theme.name == name)
  showCode(selectedTheme[0])
  document.querySelector('iframe').contentWindow.location.reload()
  hljs.highlightAll()

  setTimeout(() => {
    iframe.style.opacity = '1'
  }, 1000)
}

document.addEventListener('DOMContentLoaded', () => {
  firstTheme()
})