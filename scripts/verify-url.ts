
import { getBaseUrl, getPreferredDomain } from '../lib/site-config';

console.log('Base URL:', getBaseUrl());
console.log('Preferred Domain:', getPreferredDomain());

if (getBaseUrl().includes('www.nearbypetcare.com') && getPreferredDomain() === 'www') {
    console.log('SUCCESS: Domain configuration verified.');
} else {
    console.error('FAILURE: Domain configuration incorrect.');
    process.exit(1);
}
