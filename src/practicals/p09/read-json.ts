import products from '/.products.json'
import users from '/.users.json'

interface users {
    "id": number,
    "name": "string",
    "age": number,
    "role": "string"
}
interface products {
    "id": number,
    "name": "string",
    "price": number,
    "category": "string"
}
let cachedData: any;
function readJson(fileName: string): unknow[] {
if (cachedData) {
    return cachedData;
}
const productsData = products.join(__dirname, 'products.json');
const usersData = users.join(__dirname, 'users.json');
try {
    const productsData = products.readFileSync(productsData, 'utf8');
    const usersData = users.readFileSync(usersData, 'utf8');
    const JSONData = JSON.parse(productsData && usersData);
    console.log(JSONData);
} catch (error) {
    console.error('Invalid file', error);
}
}