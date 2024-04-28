function convertFileName(fileName) {
    
    if (fileName.includes('_')) {
      
        return fileName.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
    } else {
        return fileName.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
    }
}
const snakeCaseFileName = 'my_file_name';
const camelCaseFileName = 'myFileName';

console.log(convertFileName(snakeCaseFileName)); 
console.log(convertFileName(camelCaseFileName)); j ujujujjyh
