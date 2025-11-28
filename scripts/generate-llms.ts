/**
 * Generate llms.json at build time
 * This script collects all content from the website and generates a comprehensive JSON file
 */

import { writeLLMSJson } from '../lib/generate-llms';

async function main() {
  try {
    await writeLLMSJson();
    process.exit(0);
  } catch (error) {
    console.error('Error generating llms.json:', error);
    process.exit(1);
  }
}

main();

