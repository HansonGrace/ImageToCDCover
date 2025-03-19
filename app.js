const { app, BrowserWindow } = require('electron');

//function to create the main window
function createWindow() {
  //create a new BrowserWindow instance
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    backgroundColor: '#4A90E2', //background color
    webPreferences: {
      nodeIntegration: true
    }
  });

  //load html content
  win.loadURL('data:text/html,<html><body style="background-color:#4A90E2;"><h1 style="text-align:center;color:white;">Hello, Electron!</h1></body></html>');

}

//run when Electron has finished initializing
app.whenReady().then(() => {
  createWindow();

  // Quit the app when all windows are closed (Windows/Linux)
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });
});

// For macOS: Create window when app is activated
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
