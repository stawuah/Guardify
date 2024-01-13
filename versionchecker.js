// // // // 
// // // const { exec } = require('child_process');
// // // const { promisify } = require('util');
// // // const fs = require('fs');

// // // const execAsync = promisify(exec);
// // // const readFileAsync = promisify(fs.readFile);

// // // async function checkVersions() {
// // //   try {
// // //     console.log('Checking for outdated package versions...');

// // //     // Execute 'npm outdated' command to get outdated package information
// // //     const { stdout } = await execAsync('npm outdated --json --global false');

// // //     // Parse the JSON output
// // //     const outdatedPackages = JSON.parse(stdout);

// // //     // Read package.json
// // //     const packageJson = await readFileAsync('./package.json', 'utf-8');
// // //     const parsedPackageJson = JSON.parse(packageJson);

// // //     if (Object.keys(outdatedPackages).length === 0) {
// // //       console.log('All packages are up to date.');
// // //     } else {
// // //       console.log('Outdated packages:');
// // //       for (const packageName in outdatedPackages) {
// // //         const { current, wanted, latest } = outdatedPackages[packageName];
// // //         console.log(`${packageName}: ${current} (wanted: ${wanted}, latest: ${latest})`);
// // //       }
// // //     }

// // //     return parsedPackageJson;
// // //   } catch (error) {
// // //     console.error('Error checking package versions:', error.message);
// // //   }
// // // }

// // // checkVersions().then((parsedPackageJson) => {
// // //   // Do something with the parsed package.json if needed
// // //   console.log(parsedPackageJson);
// // // });


// // // const { promisify } = require('util');
// // // const fs = require('fs');

// // // const readFileAsync = promisify(fs.readFile);
// // // const execAsync = promisify(require('child_process').exec);


// // // async function checkVersions() {
// // //   try {
// // //     console.log('Checking for outdated package versions...');

// // //     // Read package.json
// // //     const packageJson = await readFileAsync('./package.json', 'utf-8');
// // //     const parsedPackageJson = JSON.parse(packageJson);

// // //     // Get the installed version of express
// // //     const { stdout: installedExpressVersion } = await execAsync('npm list express --depth=0 --json');
// // //     const installedExpress = JSON.parse(installedExpressVersion).dependencies.express.version;

// // //     // Compare the installed version with the version in package.json
// // //     const wantedExpressVersion = parsedPackageJson.dependencies.express;

// // //     if (installedExpress !== wantedExpressVersion) {
// // //       console.log(`express is outdated. Installed: ${installedExpress}, Wanted: ${wantedExpressVersion}`);
// // //     } else {
// // //       console.log('express is up to date.');
// // //     }

// // //     return parsedPackageJson;
// // //   } catch (error) {
// // //     console.error('Error checking package versions:', error.message);
// // //   }
// // // }

// // // checkVersions().then((parsedPackageJson) => {
// // //   // Do something with the parsed package.json if needed
// // //   console.log(parsedPackageJson);
// // // });

// // // const { promisify } = require('util');
// // // const fs = require('fs');

// // // const readFileAsync = promisify(fs.readFile);
// // // const execAsync = promisify(require('child_process').exec);

// // // async function checkVersions() {
// // //   try {
// // //     console.log('Checking for outdated package versions...');

// // //     // Read package.json
// // //     const packageJson = await readFileAsync('./package.json', 'utf-8');
// // //     const parsedPackageJson = JSON.parse(packageJson);

// // //     // Get the installed version of express
// // //     const { stdout: installedExpressVersion, stderr } = await execAsync('npm list express --depth=0 --json');
    
// // //     // Check for errors in npm list
// // //     do {
// // //       const stderr = await execAsync('npm outdated -g --json')
// // //     } while (stderr);
// // //     if (stderr) {
// // //       throw new Error(`Error in 'npm list express': ${stderr}`);
   
// // //     }

// // //     const installedExpress = JSON.parse(installedExpressVersion).dependencies.express.version;

// // //     // Compare the installed version with the version in package.json
// // //     const wantedExpressVersion = parsedPackageJson.dependencies.express;

// // //     if (installedExpress !== wantedExpressVersion) {
// // //       console.log(`express is outdated. Installed: ${installedExpress}, Wanted: ${wantedExpressVersion}`);
// // //     } else {
// // //       console.log('express is up to date.');
// // //     }

// // //     return parsedPackageJson;
// // //   } catch (error) {
// // //     console.error('Error checking package versions:', error.message);
// // //   }
// // // }

// // // checkVersions().then((parsedPackageJson) => {
// // //   // Do something with the parsed package.json if needed
// // //   console.log(parsedPackageJson);
// // // });

// // const { promisify } = require('util');
// // const fs = require('fs');

// // const readFileAsync = promisify(fs.readFile);
// // const execAsync = promisify(require('child_process').exec);

// // async function checkVersions() {
// //   try {
// //     console.log('Checking for outdated package versions...');

// //     // Read package.json
// //     const packageJson = await readFileAsync('./package.json', 'utf-8');
// //     const parsedPackageJson = JSON.parse(packageJson);

// //     // Get the installed version of express
// //     const { stdout: installedExpressVersion, stderr } = await execAsync('npm list express --depth=0 --json');

// //     // Check for errors in npm list
// //     if (stderr) {
// //       throw new Error(`Error in 'npm list express': ${stderr}`);
// //     }

// //     const installedExpress = JSON.parse(installedExpressVersion).dependencies.express.version;

// //     // Compare the installed version with the version in package.json
// //     const wantedExpressVersion = parsedPackageJson.dependencies.express;

// //     if (installedExpress !== wantedExpressVersion) {
// //       console.log(`express is outdated. Installed: ${installedExpress}, Wanted: ${wantedExpressVersion}`);
// //     } else {
// //       console.log('express is up to date.');
// //     }

// //     // Now check for outdated global packages
// //     const { stdout: outdatedGlobalPackages } = await execAsync('npm outdated -g --json');
// //     const globalPackages = JSON.parse(outdatedGlobalPackages);

// //     if (Object.keys(globalPackages).length === 0) {
// //       console.log('All global packages are up to date.');
// //     } else {
// //       console.log('Outdated global packages:');
// //       for (const packageName in globalPackages) {
// //         const { current, wanted, latest } = globalPackages[packageName];
// //         console.log(`${packageName}: ${current} (wanted: ${wanted}, latest: ${latest})`);
// //       }
// //     }

// //     return parsedPackageJson;
// //   } catch (error) {
// //     console.error('Error checking package versions:', error.message);
// //   }
// // }

// // checkVersions().then((parsedPackageJson) => {
// //   // Do something with the parsed package.json if needed
// //   console.log(parsedPackageJson);
// // });
// const { promisify } = require('util');
// const fs = require('fs');

// const readFileAsync = promisify(fs.readFile);
// const execAsync = promisify(require('child_process').exec);

// async function checkVersions() {
//   try {
//     console.log('Checking for outdated package versions...');

//     // Read package.json
//     const packageJson = await readFileAsync('./node_modules/express/package.json', 'utf-8');
//     const parsedPackageJson = JSON.parse(packageJson);

//     // Get the installed version of express
//     const { stdout: installedExpressVersion, stderr: installErr } = await execAsync('npm list express --depth=0 --json');

//     // Check for errors in npm list
//     if (installErr) {
//       throw new Error(`Error in 'npm list express': ${installErr}`);
//     }

//     const installedExpress = JSON.parse(installedExpressVersion).dependencies.express.version;

//     // Compare the installed version with the version in package.json
//     const wantedExpressVersion = parsedPackageJson.dependencies.express;

//     if (installedExpress !== wantedExpressVersion) {
//       console.log(`express is outdated. Installed: ${installedExpress}, Wanted: ${wantedExpressVersion}`);
//       // Handle the case where the wanted version is not available
//     } else {
//       console.log('express is up to date.');
//     }

//     // Now check for outdated global packages
//     const { stdout: outdatedGlobalPackages, stderr: globalErr } = await execAsync('npm outdated -g --json');

//     // Check for errors in npm outdated -g
//     if (globalErr) {
//       throw new Error(`Error in 'npm outdated -g': ${globalErr}`);
//     }

//     const globalPackages = JSON.parse(outdatedGlobalPackages);

//     if (Object.keys(globalPackages).length === 0) {
//       console.log('All global packages are up to date.');
//     } else {
//       console.log('Outdated global packages:');
//       for (const packageName in globalPackages) {
//         const { current, wanted, latest } = globalPackages[packageName];
//         console.log(`${packageName}: ${current} (wanted: ${wanted}, latest: ${latest})`);
//       }
//     }

//     return parsedPackageJson;
//   } catch (error) {
//     console.error('Error checking package versions:', error.message);
//   }
// }

// checkVersions().then((parsedPackageJson) => {
//   // Do something with the parsed package.json if needed
//   console.log(parsedPackageJson);
  // });




///tdryuigohpj[jorwfuifgiefgiewfgewhgfoefgludfweifbeigfiwgfougo9;we]



  // const { promisify } = require('util');
  // const fs = require('fs');
  // const readFileAsync = promisify(fs.readFile);


  // async function checkVersions(packageName = {}) {
  //   try {
  //     console.log('Checking for outdated package versions...');

  //     // Read package.json to get the specified package version
  //     const packageJson = await readFileAsync('./package.json', 'utf-8');
  //     console.log(packageJson);
  //     const parsedPackageJson = JSON.parse(packageJson);

  //     // Get the specified package and version from package.json
  //     // You can replace this with dynamic reading from package.json
  //     const specifiedVersion = parsedPackageJson.dependencies[packageName];

  //     // Read the installed package.json from node_modules
  //     const installedPackageJsonPath = `./node_modules/${packageName}/package.json`;

  //     console.log(installedPackageJsonPath , "=======", "Node modules path 🗃️ ");
      
  //     const installedPackageJson = await readFileAsync(installedPackageJsonPath, 'utf-8');
  //     const parsedInstalledPackageJson = JSON.parse(installedPackageJson);

  //     // Compare the specified version with the installed version
  //     const installedVersion = parsedInstalledPackageJson.version;

  //     // Check if the specified version starts with caret (^)
  //     const caretRegex = /^\^/;
  //     const version = `${specifiedVersion}`; 


  //     if (specifiedVersion !== installedVersion) {
  //       console.log(`${packageName} version mismatch !!! ✅. Specified: ${specifiedVersion}, Installed: ${installedVersion} `);
  //     } 
  //     if (caretRegex.test(version)) {
  //       console.log(`${packageName} version correct 💡. 
  //       Specified: ${specifiedVersion}, Installed: ${installedVersion} 
  //       The caret (^) symbol in front of the version number in the package.json file allows npm to update to the latest minor or patch version when installing 📦 
  //       or updating dependencies. So, when the script compares the installed version (x.x.x) with the wanted version (^x.x.x), it considers it outdated if there is a newer minor or patch version available💡.`);
  //     }
  //     if (specifiedVersion === installedVersion) {
  //       console.log(`Version Has not been termpered with 🌍 🚀` );
  //     }
  //     return parsedPackageJson;
      
  //   } catch (error) {
  //     console.error('Error checking package versions:', error.message);
  //   }
  // }

  // checkVersions({ "mongoose": true, "express": true })


const { promisify } = require('util');
const fs = require('fs');
const readFileAsync = promisify(fs.readFile);

async function checkVersions(packageNames = []) {
  try {
    console.log('Checking for outdated package versions...');

    // Read package.json to get the specified package version
    const packageJson = await readFileAsync('./package.json', 'utf-8');
    console.log(packageJson);
    const parsedPackageJson = JSON.parse(packageJson);

    for (const packageName of packageNames) {
      // Get the specified package and version from package.json
      const specifiedVersion = parsedPackageJson.dependencies[packageName];

      // Read the installed package.json from node_modules
      const installedPackageJsonPath = `./node_modules/${packageName}/package.json`;

      console.log(installedPackageJsonPath, "=======", "Node modules path 🗃️ ");

      const installedPackageJson = await readFileAsync(installedPackageJsonPath, 'utf-8');
      const parsedInstalledPackageJson = JSON.parse(installedPackageJson);

      // Compare the specified version with the installed version | the previous one installed 
      const installedVersion = parsedInstalledPackageJson.version;

      // Check if the specified version starts with caret (^)
      const caretRegex = /^\^/;
      const version = `${specifiedVersion}`;

      if (specifiedVersion !== installedVersion) {
        console.log(`${packageName} version mismatch !!! ✅. Specified: ${specifiedVersion}, Installed: ${installedVersion} `);
        if (specifiedVersion === undefined) {
          console.log(`${packageName} specified version wasn't changed ✅. Specified: ${specifiedVersion}, Installed: ${installedVersion} `);
        }
      }
      if (caretRegex.test(version)) {
        console.log(`${packageName} version correct 💡. 
          Specified: ${specifiedVersion}, Installed: ${installedVersion} 
          The caret (^) symbol in front of the version number in the package.json file allows npm to update to the latest minor or patch version when installing 📦 
          or updating dependencies. So, when the script compares the installed version (x.x.x) with the wanted version (^x.x.x), it considers it outdated if there is a newer minor or patch version available💡.`);
      }
      if (specifiedVersion === installedVersion) {
        console.log(`${packageName} Version is consistent 🌍 🚀` );
      }
    }
  

    return parsedPackageJson;
  } catch (error) {
    console.error('Error checking package versions:', error.message);
  }
}

const dependenciesToCheck = ['express', 'debug' , 'YAW2'];

checkVersions(dependenciesToCheck);
