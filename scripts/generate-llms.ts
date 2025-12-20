/**
 * Generate llms.json at build time
 * This script collects all content from the website and generates a comprehensive JSON file
 */

import { writeLLMSJson } from '../lib/generate-llms';
import path from 'path';
import fs from 'fs';

async function main() {
  try {
    console.log('🚀 Starting llms.json generation...');
    const outputPath = path.join(process.cwd(), 'llms.json');

    await writeLLMSJson(outputPath);

    // Verify file was created
    if (fs.existsSync(outputPath)) {
      const stats = fs.statSync(outputPath);
      console.log(`✅ Successfully generated llms.json at ${outputPath}`);
      console.log(`   File size: ${(stats.size / 1024).toFixed(2)} KB`);
      process.exit(0);
    } else {
      console.error('❌ Error: llms.json was not created at expected path:', outputPath);
      process.exit(1);
    }
  } catch (error) {
    console.error('❌ Error generating llms.json:', error);
    if (error instanceof Error) {
      console.error('   Stack:', error.stack);
    }
    process.exit(1);
  }
}

main();

