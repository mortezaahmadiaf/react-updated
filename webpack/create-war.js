const fs = require('fs')
const path = require('path')
const archiver = require('archiver')

// Get the custom build name and project name from command-line arguments
const buildName = process.env.BUILD_NAME || 'dist' // Default to 'dist'
const projectName = process.argv[2] || 'dist'

const warFileDirPath = path.join(__dirname, `../war-file`)
if (!fs.existsSync(warFileDirPath)) {
  fs.mkdirSync(warFileDirPath)
}

// Set paths
const buildDir = path.resolve(__dirname, `../${buildName}`)
const outputWarPath = path.resolve(warFileDirPath, `${projectName}.war`)

// Create a file to stream archive data to
const output = fs.createWriteStream(outputWarPath)
const archive = archiver('zip', {
  zlib: { level: 9 }, // Sets the compression level
})

// Listen for all archive data to be written
output.on('close', function () {
  console.log(`Archive created with ${archive.pointer()} total bytes.`)
})

// Good practice to catch warnings (ie stat failures and other non-fatal errors)
archive.on('warning', function (err) {
  if (err.code === 'ENOENT') {
    console.warn(err)
  } else {
    throw err
  }
})

// Good practice to catch errors
archive.on('error', function (err) {
  throw err
})

// Pipe archive data to the file
archive.pipe(output)

// Append files from the build directory
archive.directory(buildDir, '/')

// Finalize the archive (ie we are done appending files but streams have to finish yet)
archive.finalize()
