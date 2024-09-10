import {defineConfig} from 'drizzle-kit'

export default defineConfig({
    dialect: 'postgresql',
    schema: './src/infra/database/schema.ts',
    dbCredentials: {
        url: process.env.DATABASE_URL!,
    },
    verbose: true,
    strict: true,
})