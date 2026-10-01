import { defineEndformConfig } from 'endform';

export default defineEndformConfig({
  // Let playwright-bdd resolve configuration paths on each remote machine.
  environmentVariables: ['!^PLAYWRIGHT_BDD_CONFIGS$'],
  // playwright-bdd loads step definitions by glob, rather than static imports.
  additionalFiles: ['features/steps/*.ts'],
});
