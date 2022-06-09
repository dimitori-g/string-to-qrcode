import { toDataURL } from 'qrcode';
if (process.argv.length < 3) {
    console.error('Usage: node index.js <text>');
    process.exit(1);
};
const getImgData = () => {
    toDataURL(process.argv[2])
    .then(data => {
        console.log(`<img src=${data}></img>`);
    })
    .catch(err => {
        console.error(err);
    });
};
getImgData();