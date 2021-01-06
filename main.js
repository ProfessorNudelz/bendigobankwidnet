const { app, BrowserWindow } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    width: 400,
    height: 500,
    title: 'Bendigo Bank',
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadURL('https://banking.bendigobank.com.au/banking/accounts')
  win.removeMenu()
  win.setIcon('./bendigologo.png')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
